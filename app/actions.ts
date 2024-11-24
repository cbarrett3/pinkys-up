'use server'

import { z } from "zod"
import { Resend } from 'resend'
import { QuoteRequestEmail } from '@/emails/quote-request'

// Debug: Log if API key is present (but not the actual key)
const apiKey = process.env.RESEND_API_KEY
console.log('Debug - Environment check:')
console.log('- Resend API Key present:', !!apiKey)
console.log('- API Key length:', apiKey?.length)
console.log('- First 4 chars:', apiKey?.substring(0, 4))

const resend = new Resend(apiKey)

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  eventType: z.string().min(1, "Event type is required"),
  eventDate: z.string().min(1, "Event date is required"),
  location: z.string().min(1, "Location is required"),
  guestCount: z.string().min(1, "Guest count is required"),
  referralSource: z.string().min(1, "Please let us know how you heard about us"),
  additionalDetails: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

type FormState = {
  error?: string | null
  success?: boolean
}

type EmailError = {
  name?: string
  message?: string
  stack?: string
  data?: any
}

export async function submitQuoteForm(prevState: FormState, formData: FormData): Promise<FormState> {
  try {
    const validatedFields = formSchema.safeParse(formData)

    if (!validatedFields.success) {
      return { error: "Invalid form data", success: false }
    }

    const data = validatedFields.data

    try {
      const emailResult = await resend.emails.send({
        from: 'Pinkys Up <onboarding@resend.dev>',
        to: ['pereira.brenda61@gmail.com'],
        subject: `New Quote Request from ${data.firstName} ${data.lastName}`,
        html: QuoteRequestEmail(data),
        replyTo: data.email,
      })

      return { success: true }
    } catch (error: any) {
      const emailError: EmailError = {
        name: error?.name,
        message: error?.message,
        stack: error?.stack,
        data: error?.data,
      }
      console.error('Detailed email error:', emailError)
      return { error: error?.message || "Failed to send email", success: false }
    }
  } catch (error) {
    console.error('Error processing form:', error)
    return { error: "Failed to process form", success: false }
  }
}

export async function sendEmail(data: FormData): Promise<{ error?: string; success?: boolean }> {
  try {
    const validatedFields = formSchema.safeParse(data)

    if (!validatedFields.success) {
      return { error: "Please fill out all required fields", success: false }
    }

    const validatedData = validatedFields.data

    try {
      const emailResult = await resend.emails.send({
        from: 'Pinkys Up <onboarding@resend.dev>',
        to: ['pereira.brenda61@gmail.com'],
        subject: `New Quote Request from ${validatedData.firstName} ${validatedData.lastName}`,
        text: `
          Name: ${validatedData.firstName} ${validatedData.lastName}
          Email: ${validatedData.email}
          Phone: ${validatedData.phone}
          Services: ${validatedData.services.join(', ')}
          Event Type: ${validatedData.eventType}
          Event Date: ${validatedData.eventDate}
          Location: ${validatedData.location}
          Guest Count: ${validatedData.guestCount}
          Referral Source: ${validatedData.referralSource}
          Additional Details: ${validatedData.additionalDetails || 'None provided'}
        `,
      });
      return { success: true }
    } catch (error: any) {
      const emailError: EmailError = {
        name: error?.name,
        message: error?.message,
        stack: error?.stack,
        data: error?.data,
      }
      console.error('Detailed email error:', emailError)
      return { error: error?.message || "Failed to send email", success: false }
    }
  } catch (error) {
    console.error('Error processing form:', error)
    return { error: "Failed to process form", success: false }
  }
}

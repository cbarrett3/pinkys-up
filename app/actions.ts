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

type FormState = {
  error?: string | null
  success?: boolean
} | null

export async function submitQuoteForm(prevState: FormState, formData: FormData): Promise<FormState> {
  try {
    const validatedFields = formSchema.safeParse({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      services: formData.getAll('services'),
      eventType: formData.get('eventType'),
      eventDate: formData.get('eventDate'),
      location: formData.get('location'),
      guestCount: formData.get('guestCount'),
      referralSource: formData.get('referralSource'),
      additionalDetails: formData.get('additionalDetails'),
    })

    if (!validatedFields.success) {
      return { error: "Please fill out all required fields", success: false }
    }

    const data = validatedFields.data

    // Send email using Resend
    try {
      console.log('Attempting to send email with data:', {
        to: 'pereira.brenda61@gmail.com',
        subject: `New Quote Request from ${data.firstName} ${data.lastName}`,
        // Don't log the actual HTML content
      })

      const emailResult = await resend.emails.send({
        from: 'Pinkys Up <onboarding@resend.dev>',
        to: ['pereira.brenda61@gmail.com'],
        subject: `New Quote Request from ${data.firstName} ${data.lastName}`,
        html: QuoteRequestEmail(data),
        replyTo: data.email,
      })

      console.log('Email send result:', JSON.stringify(emailResult, null, 2))
      return { error: null, success: true }
    } catch (error) {
      console.error('Detailed email error:', {
        name: error?.name,
        message: error?.message,
        stack: error?.stack,
        data: error?.data,
        fullError: JSON.stringify(error, null, 2)
      })
      return { error: error?.message || "Failed to send email. Please try again later.", success: false }
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return { error: "Failed to submit form. Please try again later.", success: false }
  }
}

export async function sendEmail(data: FormData): Promise<{ error?: string; success?: boolean }> {
  try {
    const validatedFields = formSchema.safeParse({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      phone: data.get('phone'),
      email: data.get('email'),
      services: data.getAll('services'),
      eventType: data.get('eventType'),
      eventDate: data.get('eventDate'),
      location: data.get('location'),
      guestCount: data.get('guestCount'),
      referralSource: data.get('referralSource'),
      additionalDetails: data.get('additionalDetails'),
    })

    if (!validatedFields.success) {
      return { error: "Please fill out all required fields", success: false }
    }

    const validatedData = validatedFields.data

    // Send email using Resend
    try {
      console.log('Attempting to send email with data:', {
        to: 'pereira.brenda61@gmail.com',
        subject: `New Quote Request from ${validatedData.firstName} ${validatedData.lastName}`,
        // Don't log the actual HTML content
      })

      const emailResult = await resend.emails.send({
        from: 'Pinkys Up <onboarding@resend.dev>',
        to: ['pereira.brenda61@gmail.com'],
        subject: `New Quote Request from ${validatedData.firstName} ${validatedData.lastName}`,
        html: QuoteRequestEmail(validatedData),
        replyTo: validatedData.email,
      })

      console.log('Email send result:', JSON.stringify(emailResult, null, 2))
      return { error: null, success: true }
    } catch (error) {
      console.error('Detailed email error:', {
        name: error?.name,
        message: error?.message,
        stack: error?.stack,
        data: error?.data,
        fullError: JSON.stringify(error, null, 2)
      })
      return { error: error?.message || "Failed to send email. Please try again later.", success: false }
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return { error: "Failed to submit form. Please try again later.", success: false }
  }
}

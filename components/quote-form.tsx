'use client'

import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { submitQuoteForm } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { SubmitButton } from '@/components/submit-button'

export function QuoteForm() {
  const [formState, setFormState] = useState<{ status: 'idle' }>({ status: 'idle' });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    location: '',
    referralSource: '',
    additionalDetails: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.eventDate.trim()) newErrors.eventDate = 'Event date is required';
    if (!formData.eventType.trim()) newErrors.eventType = 'Event type is required';
    if (!formData.guestCount.trim()) newErrors.guestCount = 'Guest count is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!validateForm()) {
      return;
    }
    
    const formData = new FormData(form);
    
    setFormState({ status: 'pending' });
    try {
      const result = await submitQuoteForm(null, formData);
      if (result?.success) {
        form.reset();
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          eventDate: '',
          eventType: '',
          guestCount: '',
          location: '',
          referralSource: '',
          additionalDetails: ''
        });
        setErrors({});
        setSubmitted(true);
      }
      setFormState({ status: 'idle' });
    } catch (error) {
      setFormState({ status: 'error' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >            
      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
        {formState.status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-red-50 border border-red-500 rounded text-red-500"
          >
            An unexpected error occurred
          </motion.div>
        )}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="py-10 px-6 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <svg
                className="w-16 h-16 mx-auto mb-4 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Thank You for Choosing PINKYS UP!
              </h3>
              <p className="text-gray-600 text-lg">
                We&apos;ll get back to you within 24-48 hours with pricing and availability.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-sm text-gray-500"
            >
              Keep an eye on your email for our response!
            </motion.div>
          </motion.div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>

          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-gray-700 font-medium">Services Needed</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="bar" name="services" value="bar" className="border-2 border-gray-300 data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500" />
              <Label htmlFor="bar" className="text-gray-600">Bar Service</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="mixologist" name="services" value="mixologist" className="border-2 border-gray-300 data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500" />
              <Label htmlFor="mixologist" className="text-gray-600">Mixologist</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="glassware" name="services" value="glassware" className="border-2 border-gray-300 data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500" />
              <Label htmlFor="glassware" className="text-gray-600">Glassware</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="custom" name="services" value="custom" className="border-2 border-gray-300 data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500" />
              <Label htmlFor="custom" className="text-gray-600">Custom Menu</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="dj" name="services" value="dj" className="border-2 border-gray-300 data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500" />
              <Label htmlFor="dj" className="text-gray-600">DJ Service</Label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="eventType">Event Type</Label>
            <Input
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
              required
            />
            {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>}
          </div>

          <div>
            <Label htmlFor="eventDate">Event Date</Label>
            <Input
              id="eventDate"
              name="eventDate"
              type="date"
              value={formData.eventDate}
              onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
              required
            />
            {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="guestCount">Guest Count</Label>
            <Input
              id="guestCount"
              name="guestCount"
              type="number"
              value={formData.guestCount}
              onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
              required
            />
            {errors.guestCount && <p className="text-red-500 text-sm mt-1">{errors.guestCount}</p>}
          </div>

          <div>
            <Label htmlFor="location">Event Location</Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              required
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="referralSource">How did you hear about us?</Label>
          <Input
            id="referralSource"
            name="referralSource"
            value={formData.referralSource}
            onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="additionalDetails">Additional Details</Label>
          <Textarea
            id="additionalDetails"
            name="additionalDetails"
            value={formData.additionalDetails}
            onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
          />
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full"
        >
          <SubmitButton className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md" />
        </motion.div>
      </form>
    </motion.div>
  )
}

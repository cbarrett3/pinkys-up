interface QuoteEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  guestCount: string;
  location: string;
  services: string[];
  referralSource: string;
  additionalDetails?: string;
}

export function QuoteRequestEmail({
  firstName,
  lastName,
  email,
  phone,
  eventDate,
  eventType,
  guestCount,
  location,
  services,
  referralSource,
  additionalDetails,
}: QuoteEmailProps) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(to right, #ec4899, #a855f7); padding: 20px; color: white; border-radius: 8px; }
          .section { margin: 20px 0; }
          .label { font-weight: bold; color: #666; }
          .value { margin-top: 4px; }
          .services { display: flex; gap: 8px; flex-wrap: wrap; }
          .service-tag { background: #f3f4f6; padding: 4px 8px; border-radius: 4px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Quote Request from PINKYS UP</h1>
          </div>
          
          <div class="section">
            <div class="label">Client Name:</div>
            <div class="value">${firstName} ${lastName}</div>
          </div>

          <div class="section">
            <div class="label">Contact Information:</div>
            <div class="value">Email: ${email}</div>
            <div class="value">Phone: ${phone}</div>
          </div>

          <div class="section">
            <div class="label">Event Details:</div>
            <div class="value">Type: ${eventType}</div>
            <div class="value">Date: ${eventDate}</div>
            <div class="value">Location: ${location}</div>
            <div class="value">Guest Count: ${guestCount}</div>
          </div>

          <div class="section">
            <div class="label">Services Requested:</div>
            <div class="services">
              ${services.map(service => `<span class="service-tag">${service}</span>`).join(' ')}
            </div>
          </div>

          <div class="section">
            <div class="label">How they found us:</div>
            <div class="value">${referralSource}</div>
          </div>

          ${additionalDetails ? `
            <div class="section">
              <div class="label">Additional Details:</div>
              <div class="value">${additionalDetails}</div>
            </div>
          ` : ''}
        </div>
      </body>
    </html>
  `;
}

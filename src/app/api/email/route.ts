import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const personalEmail = process.env.PERSONAL_EMAIL
const emailDomain = process.env.EMAIL_DOMAIN

export async function POST(request: Request) {
  const reqBody = await request.json()
  const { firstName, lastName, email, text } = reqBody

  if (!firstName || !lastName || !email || !text) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 },
    )
  }

  try {
    await resend.emails.send({
      from: emailDomain || '',
      to: personalEmail || '',
      subject: `New message from ${firstName} ${lastName}`,
      html: `<p>You have a new message from <strong>${firstName} ${lastName}</strong> (${email}):</p><p>${text}</p>`,
    })
    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 },
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}

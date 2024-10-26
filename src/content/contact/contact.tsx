import { BiLogoGithub, BiLogoLinkedin, BiMailSend } from 'react-icons/bi'

export const contentHeader = 'Contact Me'

export const contactTitle = "Don't be shy, say hello!"

export const contactText =
  'I would love to hear from you! Please fill out the form or connect with me on social media.'

export const socialLinks = [
  {
    icon: <BiMailSend />,
    title: 'Email',
    text: 'Personal and professional inquiries',
    link: 'gabriel_eger01@hotmail.com',
  },
  {
    icon: <BiLogoLinkedin />,
    title: 'LinkedIn',
    text: 'Professional networking',
    link: 'https://www.linkedin.com/in/gabrieleger/',
  },
  {
    icon: <BiLogoGithub />,
    title: 'GitHub',
    text: 'Open-source projects and contributions',
    link: 'https://github.com/GabrielEger2',
  },
]

export const contactFormName = 'Name'
export const contactFormNamePlaceholder = 'Your Name'

export const contactFormSurname = 'Surname'
export const contactFormSurnamePlaceholder = 'Your Surname'

export const contactFormEmail = 'Email'
export const contactFormEmailPlaceholder = 'Your Email'

export const contactFormMessage = 'Message'
export const contactFormMessagePlaceholder =
  'I would like to know more about...'

export const contactFormSubmit = 'Send Message'

'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { BiCheckDouble, BiX } from 'react-icons/bi'

const EmailForm = () => {
  const t = useTranslations('contact')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    text: '',
  })

  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
        console.error(result.error)
      }
    } catch (error) {
      setStatus('error')
      console.error(error)
    }

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      text: '',
    })

    setTimeout(() => {
      setStatus(null)
    }, 2000)
  }

  const variants = {
    hidden: { opacity: 0, y: 20 }, // Fade down and out on exit
    visible: { opacity: 1, y: 0 }, // Stay in position while visible
    enter: { opacity: 0, y: -20 }, // Fade in from above
  }

  return (
    <div className="card bg-base-100 w-full h-full border border-base-200 shadow-lg">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="flex gap-4 w-full">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                {t.raw('contactForm.name.label')}
              </span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder={t.raw('contactForm.name.placeholder')}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                {t.raw('contactForm.surname.label')}
              </span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={t.raw('contactForm.surname.placeholder')}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              {t.raw('contactForm.email.label')}
            </span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.raw('contactForm.email.placeholder')}
            className="input input-bordered"
            required
          />
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">
              {t.raw('contactForm.message.label')}
            </span>
          </div>
          <textarea
            name="text"
            value={formData.text}
            onChange={handleChange}
            className="textarea textarea-bordered h-36"
            placeholder={t.raw('contactForm.message.placeholder')}
            required
          />
        </label>
        <div className="form-control mt-6">
          <button
            type="submit"
            className={`btn ${
              status === 'success'
                ? 'btn-success'
                : status === 'error'
                  ? 'btn-error'
                  : status === 'sending'
                    ? 'btn-info'
                    : 'btn-primary'
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {status === 'sending' ? (
                <motion.span
                  key="sending"
                  initial="enter"
                  animate="visible"
                  exit="hidden"
                  variants={variants}
                  transition={{ duration: 0.15 }}
                >
                  <span className="loading loading-spinner loading-md" />
                </motion.span>
              ) : status === 'success' ? (
                <motion.span
                  key="success"
                  initial="enter"
                  animate="visible"
                  exit="hidden"
                  variants={variants}
                  transition={{ duration: 0.15 }}
                >
                  <BiCheckDouble size={24} />
                </motion.span>
              ) : status === 'error' ? (
                <motion.span
                  key="error"
                  initial="enter"
                  animate="visible"
                  exit="hidden"
                  variants={variants}
                  transition={{ duration: 0.15 }}
                >
                  <BiX size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="submit"
                  initial="enter"
                  animate="visible"
                  exit="hidden"
                  variants={variants}
                  transition={{ duration: 0.15 }}
                >
                  {t('contactForm.submit')}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </form>
    </div>
  )
}

export default EmailForm

'use client'

import { AnimatePresence, motion } from 'framer-motion'

import Cookies from 'js-cookie'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { BiX } from 'react-icons/bi'

const CookiesConsent = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false)
  const t = useTranslations('layout.cookieConsent')

  useEffect(() => {
    const cookieConsent = Cookies.get('cookieConsent')

    if (!cookieConsent) {
      setShowCookieBanner(true)
    }
  }, [])

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'accepted')
    setShowCookieBanner(false)
  }

  const handleDeny = () => {
    Cookies.set('cookieConsent', 'denied')
    setShowCookieBanner(false)
  }

  return (
    <div className="fixed bottom-0 p-2 z-50 w-full flex">
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div
            className="alert shadow-lg max-w-96 bg-base-200"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="flex justify-between">
                <h3 className="font-bold">{t('title')}</h3>
                <BiX
                  className="cursor-pointer"
                  size={24}
                  onClick={handleDeny}
                />
              </div>
              <div className="flex justify-between space-x-4 mt-4">
                <p className="text-sm text-start">{t('text')}</p>
                <button
                  onClick={handleAccept}
                  className="btn btn-success text-base-100"
                >
                  {t('button')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CookiesConsent

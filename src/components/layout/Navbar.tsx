'use client'

import { Link } from '@/i18n/routing'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import { useTranslations } from 'next-intl'
import LanguageController from './LanguageController'
import NavLink from './NavLink'
import ThemeController from './ThemeController'

interface Link {
  id: string
  link: string
  text: string
  title: string
  description: string
  href: '/' | '/experience' | '/projects' | '/contact'
}

const Navbar = () => {
  const t = useTranslations('core.header')
  const [mobileNav, toggleMobileNav] = useCycle(false, true)

  console.log(t.raw('NavbarLinks'))

  return (
    <>
      <div className="w-full flex justify-center fixed bg-base-100 shadow-lg z-50 top-0">
        <nav className="flex h-16 w-full justify-between max-w-[88rem] items-center mx-2">
          <Link href={t('NavbarTitleLink')} className="btn btn-ghost text-xl">
            {t('NavbarTitle')}
          </Link>
          <div className="hidden items-center space-x-2 lg:translate-x-10 xl:translate-x-0 md:flex">
            {t.raw('NavbarLinks').content.map((link: Link) => (
              <NavLink
                key={link.id}
                content={link}
                linkText={t('NavbarLinks.linkText')}
              />
            ))}
          </div>
          <div className="items-center space-x-1 hidden md:flex">
            <ThemeController />
            <LanguageController />
          </div>
          <motion.button
            animate={mobileNav ? 'open' : 'closed'}
            onClick={() => toggleMobileNav()}
            className="flex flex-col space-y-1 md:hidden p-1 outline-none"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 8 },
              }}
              className="w-7 h-1 bg-base-content block"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0, transition: { duration: 0 } },
              }}
              className="w-7 h-1 bg-base-content block"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -8 },
              }}
              className="w-7 h-1 bg-base-content block"
            />
          </motion.button>
        </nav>
      </div>
      <AnimatePresence>
        {mobileNav && (
          <motion.div
            variants={{
              open: {
                x: '0%',
                transition: {
                  when: 'beforeChildren',
                  type: 'spring',
                  bounce: 0.12,
                  duration: 0.3,
                },
              },
              closed: {
                x: '-100%',
                transition: {
                  when: 'beforeChildren',
                  type: 'spring',
                  bounce: 0.12,
                  duration: 0.3,
                },
              },
            }}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed w-[70vw] inset-0 border-r border-base-300 z-50 p-2 bg-base-100 flex flex-col md:hidden sm:w-[50vw]"
          >
            <motion.div
              variants={{
                open: {
                  y: '0%',
                  opacity: 1,
                },
                closed: {
                  y: '12%',
                  opacity: 0,
                },
              }}
            >
              <Link
                href={t('NavbarTitleLink')}
                className="btn btn-ghost text-xl"
              >
                {t('NavbarTitle')}
              </Link>
              <ul className="space-y-2 flex flex-col items-start mt-4">
                {t.raw('NavbarLinks.content')?.map((link: Link) => (
                  <li className="btn btn-ghost text-xl" key={link.id}>
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="divider" />
            <motion.div
              variants={{
                open: {
                  y: '0%',
                  opacity: 1,
                },
                closed: {
                  y: '-42%',
                  opacity: 0,
                },
              }}
              className="flex flex-col"
            >
              <ThemeController />
              <LanguageController />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

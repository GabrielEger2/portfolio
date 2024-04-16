import { footerLinks } from '@/content/layout/FooterContent'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <p>
          Gabriel Scheidt Eger
          <br />
          MIT License © 2024
        </p>
      </aside>
      {footerLinks.map((section, index) => (
        <nav key={index}>
          <h6 className="footer-title">{section.title}</h6>
          {section.links.map((link, index) => (
            <a
              key={index}
              className="link link-hover"
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
            >
              {link.title}
            </a>
          ))}
        </nav>
      ))}
    </footer>
  )
}

export default Footer

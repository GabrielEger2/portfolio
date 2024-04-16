import { footerContent, footerLinks } from '@/content/core/FooterContent'

const Footer = () => {
  return (
    <div className="w-full flex justify-center bg-base-200">
      <footer className="footer p-10 text-base-content max-w-[88rem]">
        <aside>
          <p>
            {footerContent.title}
            <br />
            {footerContent.description}
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
    </div>
  )
}

export default Footer

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

interface FooterLink {
  title: string;
  links: { title: string; href: string }[];
}

const Footer = () => {
  const t = useTranslations('core.footer');

  return (
    <div className="w-full flex justify-center bg-base-200">
      <footer className="footer p-10 text-base-content max-w-[88rem]">
        <aside>
          <p>
            {t('title')}
            <br />
            {t('description')}
          </p>
        </aside>
        {t.raw('footerLinks').map((footerLink: FooterLink, index: number) => (
          <nav key={index}>
            <h6 className="footer-title">{footerLink.title}</h6>
            {footerLink.links.map((linkItem, i) => (
              <Link
                key={i}
                className="link link-hover"
                target="_blank"
                rel="noopener noreferrer"
                href={linkItem.href as any}
              >
                {linkItem.title}
              </Link>
            ))}
          </nav>
        ))}
      </footer>
    </div>
  );
};

export default Footer;

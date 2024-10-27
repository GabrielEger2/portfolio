import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('core.footer');

  const footerLinksData = [
    {
      key: 'link1',
      linksCount: 4
    },
    {
      key: 'link2',
      linksCount: 4
    },
    {
      key: 'link3',
      linksCount: 3
    }
  ];

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
        {footerLinksData.map(({ key, linksCount }, index) => (
          <nav key={index}>
            <h6 className="footer-title">{t(`footerLinks.${key}.title`)}</h6>
            {Array.from({ length: linksCount }, (_, i) => (
              <a
                key={i}
                className="link link-hover"
                target="_blank"
                rel="noopener noreferrer"
                href={t(`footerLinks.${key}.links.link${i + 1}.href`)}
              >
                {t(`footerLinks.${key}.links.link${i + 1}.title`)}
              </a>
            ))}
          </nav>
        ))}
      </footer>
    </div>
  )
}

export default Footer

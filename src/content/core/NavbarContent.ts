export const NavbarTitle = 'GEDev'
export const NavbarTitleLink = '/'

export const NavbarLinks = {
  linkText: 'Find out more',
  content: [
    {
      id: 'home',
      title: 'Home',
      href: '/',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit varius ipsum',
      topics: [
        { title: 'Topics 1', items: ['Topic 1', 'Topic 2', 'Topic 3'] },
        { title: 'Topics 2', items: ['Topic 1', 'Topic 2', 'Topic 3'] },
        { title: 'Topics 3', items: ['Topic 1', 'Topic 2', 'Topic 3'] },
      ],
    },
    {
      id: 'experience',
      title: 'Experience',
      href: '/experience',
      description:
        'Explore my career, education, and self-learning experiences in this comprehensive overview',
      topics: [
        {
          title: 'Work Experience',
          items: ['FreeLance', 'ClearViction', 'MundialMix'],
        },
        {
          title: 'Formal Education',
          items: ['Technical School', 'Bsc CS'],
        },
        {
          title: 'Self-Learning',
          items: ['Courses', 'Certificates', 'Bootcamps'],
        },
      ],
    },
    {
      id: 'projects',
      title: 'Projects',
      href: '/projects',
      description:
        'Discover a curated selection of my projects, showcasing my skills in software development.',
      topics: [
        {
          title: 'Projects List',
          items: ['GitHub Link', 'Projects Display'],
        },
        {
          title: 'Top Projects',
          items: ['Projects Carousel', 'Showcase'],
        },
        {
          title: 'All Projects',
          items: ['Stack Filter', 'Language Filter'],
        },
      ],
    },
    {
      id: 'contactMe',
      title: 'Contact Me',
      href: '/contact',
    },
  ],
}

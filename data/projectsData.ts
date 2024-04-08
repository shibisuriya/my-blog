interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Classic Slither.io',
    description: `Experience Slither.io gameplay on a Nokia 6110-style snake game, powered by React and WebRTC. Play against bots or your friends.`,
    imgSrc: '/static/images/slitherio.jpeg',
    href: 'https://github.com/shibisuriya/classic-slither.io',
  },
  {
    title: 'Indian E-commerce Product Scraper',
    description: `This project allows you to scrape products from various Indian e-commerce websites. It consists of multiple Python scripts, each dedicated to scraping a specific website.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/shibisuriya/indian-e-commerce-scaper',
  },
]

export default projectsData

module.exports = {
  title: 'AI BOOKS',
  head: [
    ['link', { rel: 'icon', href: 'images/hero.jpg' }]
  ],
  description: 'AI 연구랩 활동보고서',
  themeConfig: {
    displayAllHeaders: true, // Default: false
    // navbar: false,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Books',
        items: [
          {
            text: '맥락',
            link: '/books/맥락/'
          },
          {
            text: 'CD랩',
            link: '/books/CD랩/'
          },
          {
            text: 'MIT',
            link: '/books/MIT/'
          },
          {
            text: '달팽이',
            link: '/books/달팽이/'
          },
        ],
      },
      { text: 'Guide', link: '/guide/' },
    ]
  }
}

module.exports = {
    base: "https://infyomlabs.github.io/infy-tracker-docs/",
    title: 'InfyTracker',
    description: 'Minimal Task and Time Management tool',
    themeConfig: {
        head: [
            ['link', { rel: 'icon', href: '/favicon.ico' }]
        ],
        search: false,
        logo: '/assets/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
        ],
        sidebar: 'auto'
    }
}

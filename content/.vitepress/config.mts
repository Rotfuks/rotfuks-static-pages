import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rotfuks - Dominik Kress",
  description: "My Personal Website",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about-me' },
      { text: 'Portfolio', link: '/portfolio' }
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/dominik-kress-33a540174/' }
    ],

    aside: false,
    
    docFooter: {
      prev: false,
      next: false
    }
  },
  vite: {
    ssr: {
      noExternal: ['vuetify']
    }
  }
})



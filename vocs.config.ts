import { defineConfig } from 'vocs'

export default defineConfig({
  logoUrl: "/tiger3018.i2i.1019.clip.ico",
  title: 'Zhou Bohan',
  description: "Sense the [REAL] world's Beauty",
  ogImageUrl: 'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  banner: '',
  topNav: [
    {
      text: "What's on?",
      link: '/what',
    },
    {
      text: "Why here?",
      link: '/why',
    },
  ],
})

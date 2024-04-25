import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require('daisyui/src/theming/themes').light,
          primary: '#9333ea',
          secondary: '#dc2626',

          '--rounded-box': '0.5rem',
          '--rounded-btn': '0.25rem',
        },
        dark: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require('daisyui/src/theming/themes').dracula,

          '--rounded-box': '0.5rem',
          '--rounded-btn': '0.25rem',
        },
      },
      'corporate',
      'lofi',
      'synthwave',
      'cyberpunk',
      'forest',
      'winter',
      'sunset',
      'wireframe',
      'retro',
      'lemonade',
      'luxury',
      'black',
    ],
  },
}
export default config

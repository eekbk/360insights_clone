import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'genericBanner': "url('https://info.360insights.com/hubfs/_2022/banners/generic-banner.png')",
        'ladyNumberOne': 'https://www.360insights.com/hs-fs/hubfs/_2022/home…bp?width=801&height=801&name=Lady-Number-One.webp',
      },
      colors: {
        cyan: {
          360: '#00A4BD'
        }
      },
      keyframes: {
        slideUp: {
          '0%': {
            'opacity': '0.2',
            'transform': 'translateY(100%)',
          },
          '100%': {
            'opacity': '1',
            'transform': 'translateY(0)'
          }
        },
      },
      animation: {
        slideUp: "slideUp 0.5s ease-in-out"
      },
      maxHeight: {
        'mobileMenu': 'calc(100vh - 64px)',
      }
    },
  },
  plugins: [],
}
export default config

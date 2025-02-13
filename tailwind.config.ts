import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto-Regular', 'sans-serif'],
        'Roboto-Medium': ['Roboto-Medium', 'sans-serif'],
        'Roboto-SemiBold': ['Roboto-SemiBold', 'sans-serif'],
        'Roboto-Bold': ['Roboto-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        body: 'rgb(228,233,247)',
        sidebar: 'rgb(255,255,255)',
        primary: 'rgb(45,212,191)',
        'primary-light': 'rgb(246,245,255)',
        toggle: 'rgb(221,221,221)',
        text: 'rgb(112,112,112)',
        'body-dark': 'rgb(24,25,26)',
        'sidebar-dark': 'rgb(36,37,38)',
        'primary-dark': 'rgb(58,59,60)',
        'primary-light-dark': 'rgb(58,59,60)',
        'toggle-dark': 'rgb(255,255,255)',
        'text-dark': 'rgb(204,204,204)',
        'puzzle-tile': 'rgb(52,41,86)',
        'puzzle-correct': 'rgb(110,80,180)',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

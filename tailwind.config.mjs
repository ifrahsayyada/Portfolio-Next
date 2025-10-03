/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./assets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        lightHHover: '#f0f8ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        'white': '4px 4px 0 #fff',
        'black': '4px 4px 0 #000',
        'soft': '0px 10px 30px 0px rgba(0, 0, 0, 0.1)',
        'medium': '0px 10px 30px 0px rgba(0, 0, 0, 0.3)',
        'strong': '0px 10px 30px 0px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        spin_slow: 'spin 6s linear infinite'
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}

export default config
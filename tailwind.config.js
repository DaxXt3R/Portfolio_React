/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        "light": "linear-gradient(90deg, #979797 0%,#DADADA 6%, #FFFFFF 12%,  #FFFFFF 88%, #DADADA 94%, #979797 100%);",
        "dark": "linear-gradient(90deg, #000000 0%,#1B1B1B 6%, #262626 12%,  #262626 88%, #1B1B1B 94%, #000000 100%);",
      },
      colors:{
        theme: {
          bg: "var(--bg)", 
          window: "var(--window)", 
          text: "var(--text)", 
          bold: "var(--bold)", 
          muted: "var(--muted)", 
          accent: "var(--accent)", 
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  
  
  
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}


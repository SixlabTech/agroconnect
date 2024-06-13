/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {

      
      'blue': '#1fb6ff',
      'white': '#ffffff',
      'pink': '#ff49db',
      'yellow-btn':'#F7C35F',
      'bg-gold': '#F89C0E',
      'orange': '#ff7849',
      'green': '#3F6341',
      'text-green':'#095D40',
      'gray-btn': '#F4F2F2',
      'text-gray':'#757575',
      'gray': '#878680',
      'gray-light': '#d3dce6',
      'border-line': '#878680',
      'red': '#fb1414',
    },
  },
  plugins: [("daisyui")],
    // daisyUI config (optional - here are the default values)
    daisyui: {
      themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
      darkTheme: "white", // name of one of the included themes for dark mode
      base: true, // applies background color and foreground color for root element by default
      utils: true, // adds responsive and modifier utility classes
      prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
      logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
      themeRoot: ":root", // The element that receives theme color CSS variables
    },
}
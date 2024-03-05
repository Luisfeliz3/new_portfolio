/** @type {import('tailwindcss').Config} */
export default{
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        loucustom : {
          yellow : "#FEBD69",
          light_blue : "#232F3A",
          background : "#EAEDED",
          deafult : "#131921"
        }
      }
    },
  },
  plugins: [],
}


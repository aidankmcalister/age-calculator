/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins-bold": ["Poppins-Bold", "sans"],
        "poppins-bold-italic": ["Poppins-Bold-Italic", "sans"],
        "poppins-bold-extra": ["Poppins-Bold-Extra", "sans"],
        "poppins-bold-extra-italic": ["Poppins-Bold-Extra-Italic", "sans"],
        "poppins-italic": ["Poppins-Italic", "sans"],
        "poppins-reg": ["Poppins-Regular", "sans"],
      },
    },
  },
  plugins: [],
};

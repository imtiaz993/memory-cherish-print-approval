/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "checked-step": "url('./Assets/icons/checked-step.svg')",
        "unchecked-step": "url('./Assets/icons/unchecked-step.svg')",
      },
      colors: {
        "dark-gray": "#29303D",
      },
    },
  },
  plugins: [],
};

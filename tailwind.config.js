/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'mobile-card': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
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

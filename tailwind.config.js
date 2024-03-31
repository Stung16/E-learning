const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "toastify-color-light": "#fff",
      "toastify-color-dark": "#121212",
      "toastify-color-info": "#3498db",
      "toastify-color-success": "#07bc0c",
      "toastify-color-warning": "#f1c40f",
      "toastify-color-error": "#e74c3c",
      "toastify-color-transparent": "hsla(0,0%,100%,.7)",
      "toastify-icon-color-info": "#3498db",
      "toastify-icon-color-success": "#07bc0c",
      "toastify-icon-color-warning": "#f1c40f",
      "toastify-icon-color-error": "#e74c3c",
      "primary-color": "#f05123",
      "black-color": "#000",
      "white-color": "#fff",
      "gray-color": "#666",
      "text-color": "#333",
      "plum-color": "#b80257",
      "fb-color": "#4080ff",
      "mail-color": "#f47425",
      "invalid-color": "#f33a58",
      "desc-color": "#0000008a",
      "first-color": "#1dbfaf",
      "second-color": "#1dbfaf",
      "button-color": "#1dbfaf",
    },
    extend: {},
    height: {
      "header-hight": "66px",
    },
  },
  plugins: [nextui()],
};

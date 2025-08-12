/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
    pastelPink: '#FFE4E1',
    skinSoft: '#FDE2D3',
  }
    },
  },
  plugins: [],
};
// This is the Tailwind CSS configuration file for the Libricito-web project.
// It specifies the paths to the files that Tailwind should scan for class names,
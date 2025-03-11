/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // This is how to create custom colours in Tailwind CSS
        // So instead of something like `text-blue-500`
        // You can now do this: `text-primary` 
        // or `text-accent` or `secondary-text`

        // You can also use variations like text-dark-200
        primary: '#030014',
        secondary: '#151312',
        light:  {
          100: '#D6C6FF',
          200: '#A8B5DB',
          300: '#9CA4AB'
        },
        dark: {
          100: '#221f3d',
          200: '#0f0d23'
        },
        accent: '#AB8BFF'
      }
    },
  },
  plugins: [],
}

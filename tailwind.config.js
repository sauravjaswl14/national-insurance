/** @type {import('tailwindcss').Config} */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}', './node_modules/flowbite/**/*.js'],
  theme: {
    screens: { sm: '375px', md: '768px', lg: '1024px', xl: '1440px' },
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        cyanLight: 'hsl(180, 66%, 69%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        180: '32rem',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
// module.exports = {
//   content: ["./**/*.{html,js}"],
//   theme: {
//     screens: {
//       sm: "480px",
//       md: "768px",
//       lg: "976px",
//       xl: "1440px",
//     },
//     extend: {
//       colors: {
//         strongCyan: "hsl(171, 66%, 44%)",
//         lightBlue: "hsl(233, 100%, 69%)",
//         darkGrayishBlue: "hsl(210, 10%, 33%)",
//         grayishBlue: "hsl(201, 11%, 66%)",
//       },
//       fontFamily: {
//         sans: ["Bai Jamjuree", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };

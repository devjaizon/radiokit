
/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Apply the dark mode class setting:
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    // 2. Append the path for the Skeleton NPM package and files:
    require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'body': 'repeat(auto-fill, minmax(15rem, 1fr))',
      },
      colors: {
        'radio': 'rgba(255, 255, 255, 0.164)',
      },
      boxShadow: {
        'radio-shadow': ['2px 2px 4px rgb(211, 211, 211)', '-2px -2px 4px rgb(255, 255, 255)'],
        'radio-hover': ['1px 1px 4px rgb(170, 183, 226)', '-1px -1px 4px rgb(224, 170, 213)'],
      }
    },
  },
  plugins: [
    // 3. Append the Skeleton plugin to the end of this list
    ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
  ]
}

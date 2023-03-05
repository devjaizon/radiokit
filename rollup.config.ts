// rollup.config.js
import sveltePreprocess from 'svelte-preprocess'

export default {
  // ...,
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
  ],
}

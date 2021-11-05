import preprocess from "svelte-preprocess";
import path from "path"
import vercel from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },
  kit: {
    adapter: vercel(),
    vite: {
      resolve: {
        alias: {
          $components: path.resolve('./src/components'),
          $utils: path.resolve('./src/utils/')
        }
      }
    }
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;

<script>
  import Fa from 'svelte-fa/src/fa.svelte';
  import { fade } from 'svelte/transition';
  import { faHeart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';

  export let isWhite;
</script>

<header
  id="up"
  class={`${
    isWhite ? 'text-white-theme' : 'text-gray-500-theme'
  } flex items-center justify-between w-screen py-4 max-w-7xl px-4 xl:px-0`}
  transition:fade|local
>
  <a
    href="/"
    class="font-bold uppercase transition-all font-palanquin hover:brightness-90"
    >pokedex</a
  >
  <nav class="flex gap-3 text-2xl">
    <a href="/favorites" class="transition-all hover:brightness-90">
      <Fa icon={faHeart} />
    </a>
    <a href="/about" class="transition-all hover:brightness-90">
      <Fa icon={faInfoCircle} />
    </a>
    <a
      href="https://github.com/luizfverissimo/pokedex-svelte"
      target="_black"
      rel="noreferer noopener"
      class="transition-all hover:brightness-90"
    >
      <Fa icon={faGithub} />
    </a>
  </nav>
</header>

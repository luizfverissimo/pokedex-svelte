<script>
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faHeart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<header class="flex items-center justify-between w-screen py-4 max-w-7xl">
  <a
    href="/"
    class="font-bold uppercase transition-all font-palanquin text-gray-500-theme hover:brightness-75"
    >pokedex</a
  >
  <nav class="flex gap-3 text-2xl text-gray-500-theme">
    <a href="/" class="transition-all hover:brightness-75">
      <Fa icon={faHeart} />
    </a>
    <a href="/" class="transition-all hover:brightness-75">
      <Fa icon={faInfoCircle} />
    </a>
    <a href="/" class="transition-all hover:brightness-75">
      <Fa icon={faGithub} />
    </a>
  </nav>
</header>

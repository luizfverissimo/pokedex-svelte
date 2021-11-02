<script>
  import { onMount } from 'svelte';

  import PokeballIcon from './PokeballIcon.svelte';

  export let type;
  export let isActive;

  onMount(() => {});
</script>

<button
  class={`flex justify-center items-center gap-2 px-4 py-2 font-bold uppercase transition-all border-[1px] rounded-lg shadow-xl font-palanquin ${
    isActive ? 'text-black-theme' : 'text-gray-500-theme'
  } hover:text-black-theme`}
  on:click
>
  <div class:type>
    {#if isActive}
      <PokeballIcon />
    {/if}
  </div>
  <slot />
</button>

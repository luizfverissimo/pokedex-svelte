<script>
  import { fly } from 'svelte/transition';
  import StatBar from './StatBar.svelte';
  export let pokeData;
</script>

<div
  class="flex flex-col items-start w-full gap-4 p-6 border-2 rounded-lg shadow-xl mt-9"
  in:fly={{ x: -100, delay: 400, duration: 300 }}
  out:fly={{ x: 100, duration: 300 }}
>
  <div class="flex flex-col items-center w-full gap-2 ">
    {#each pokeData.stats as stat}
      <StatBar {stat} type={pokeData.types[0].type.name}/>
    {/each}
  </div>
</div>

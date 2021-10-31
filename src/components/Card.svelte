<script>
  import { padder } from '$utils/padder';
  import { faHeart } from '@fortawesome/free-solid-svg-icons';
  import { onMount } from 'svelte';
  import Fa from 'svelte-fa/src/fa.svelte';

  export let pokemonName;
  let pokeData;
  let number = '000';

  onMount(async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await res.json();
    pokeData = data;
    number = padder('000', pokeData.id);
  });
</script>

{#if pokeData}
  <a
    href="/"
    class="group bg-white w-[320px] relative flex flex-col items-center p-4 z-10 rounded-lg shadow-xl min-h-[300px] overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl"
  >
    <div
      class={`${pokeData.types[0].type.name} absolute top-0 w-full h-[180px] z-[-1]`}
    />
    <div
      class="flex items-center justify-between w-full text-2xl text-white-theme"
    >
      <Fa icon={faHeart} />
      <p class="text-4xl font-bold opacity-50 font-palanquin">#{number}</p>
    </div>
    <img
      class="max-h-[200px] w-auto transition-all transform group-hover:-rotate-6 group-hover:drop-shadow-xl"
      src={pokeData.sprites.other['official-artwork'].front_default}
      alt={`Image of ${pokeData.name}`}
    />
    <h2
      class="relative text-2xl font-bold uppercase font-palanquin text-black-theme"
    >
      {pokeData.name}
      <div
        class={`${pokeData.types[0].type.name} absolute bottom-[-3px] w-full h-[3px]`}
      />
    </h2>
    <div class="flex justify-center gap-2 mt-6">
      {#each pokeData.types as type}
        <p class={`${type.type.name} text-sm px-2 py-1 rounded-md text-black-theme`}>
          {type.type.name}
        </p>
      {/each}
    </div>
  </a>
{/if}

<style lang="postcss">
</style>

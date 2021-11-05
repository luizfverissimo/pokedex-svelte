<script>
  import { fly } from 'svelte/transition';

  export let evolutionChain;
  export let pokemonName;

  const eeveeEvolutionsName = [
    'eevee',
    'jolteon',
    'flareon',
    'espeon',
    'umbreon',
    'leafeon',
    'glaceon',
    'sylveon',
    'vaporeon'
  ];

  let isEevee = eeveeEvolutionsName.includes(pokemonName);
</script>

<div
  class="flex flex-col items-start w-full gap-4 p-6 border-2 rounded-lg shadow-xl mt-9"
  in:fly={{ x: -100, delay: 400, duration: 300 }}
  out:fly={{ x: 100, duration: 300 }}
>
  <div class="w-full flex flex-col items-center gap-4">
    {#each evolutionChain as evolution, index}
      <a
        href={`/details?id=${evolution.species_name}`}
        class="group flex flex-col items-center cursor-pointer"
      >
        <img
          class={` transition-all transform group-hover:rotate-6 hover:drop-shadow-xl ${
            evolution.species_name === pokemonName ? 'active' : 'w-[100px]'
          }`}
          src={evolution.imageUrl}
          alt={`Image of ${evolution.species_name}`}
        />
        <h3
          class="font-palanquin text-black-theme uppercase font-bold text-center"
        >
          {evolution.species_name}
        </h3>
        {#if index !== evolutionChain.length - 1 && !isEevee}
          <span class="text-2xl text-gray-500-theme">↓</span>
        {/if}
        {#if index === 0 && isEevee}
          <span class="text-2xl text-gray-500-theme">↓</span>
        {/if}
      </a>
    {/each}
  </div>
</div>

<style lang="postcss">
  .active {
    width: 150px;
  }
</style>

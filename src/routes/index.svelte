<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const data = await res.json();

    return {
      props: { pokemon: data.results }
    };
  }
</script>

<script>
  import { onMount } from 'svelte';
  import Lazy from 'svelte-lazy';
  import { fade } from 'svelte/transition';

  import { fetchLocalFavPokemon } from '../stores/favStore';
  import SearchBar from '$components/SearchBar.svelte';
  import Card from '$components/Card.svelte';

  export let pokemon = [];
  let pokemonVisible = pokemon;

  let searchQuery = '';
  let timer;
  let isSearching = false;

  onMount(async () => {
    fetchLocalFavPokemon();
  });

  function searchPokemon(query) {
    const querySanitized = query.toLowerCase();
    clearTimeout(timer);
    isSearching = true;
    const searchTime = 1000

    timer = setTimeout(() => {
      if (query.length === 0) {
        pokemonVisible = pokemon;
      }

      const pokemonFiltered = pokemon.filter((pokemon) =>
        pokemon.name.includes(querySanitized)
      );
      pokemonVisible = pokemonFiltered;
      isSearching = false;
    }, searchTime);
  }

  $: {
    searchPokemon(searchQuery);
  }
</script>

<svelte:head>
  <title>Pokedex | LF Verissimo</title>
</svelte:head>

<main class="flex flex-col items-center justify-center w-full gap-8 px-4 max-w-7xl xl:px-0">
  <img
    src="pokedex_logo.min.png"
    alt="Pokedex Logo"
    class="mt-8 w-[219px] h-auto"
  />
  <SearchBar bind:searchQuery {pokemon} bind:isSearching />
  {#if pokemonVisible.length === 0}
    <div class="flex flex-col items-center gap-2" transition:fade|local>
      <p class="w-full text-base text-center font-roboto text-gray-500-theme">
        Sorry! No pokemon found.
      </p>
      <img
        class="w-[100px]"
        src="https://emoji.gg/assets/emoji/1305_pikachu_sad2.png"
        alt="Pikachu crying."
      />
    </div>
  {/if}
  <div class="flex flex-wrap justify-center w-full mb-8 gap-9">
    {#each pokemonVisible as { name } (name)}
      <Lazy height={320}>
        <Card pokemonName={name} />
      </Lazy>
    {/each}
  </div>
</main>

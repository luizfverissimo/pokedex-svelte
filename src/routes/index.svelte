<script>
  import { onMount } from 'svelte';
  import Lazy from 'svelte-lazy';

  import SearchBar from '$components/SearchBar.svelte';
  import Card from '$components/Card.svelte';

  let pokemon = [];
  let pokemonVisible = [];

  let searchQuery = '';
  let timer

  onMount(async () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then((res) => res.json())
      .then((data) => {
        pokemon = data.results;
        pokemonVisible = data.results;
      });
  });

  function searchPokemon(query) {
    console.log(query)
    const querySanitized = query.toLowerCase()
    clearTimeout(timer)

    timer = setTimeout(() => {
      if(query.length === 0) {
        pokemonVisible = pokemon
      }

      const pokemonFiltered = pokemon.filter(pokemon => pokemon.name.includes(querySanitized))
      pokemonVisible = pokemonFiltered
    }, 2000)
  }

  $: {
    searchPokemon(searchQuery)
  }
</script>

<main class="flex flex-col items-center justify-center w-full gap-8 max-w-7xl">
  <img
    src="pokedex_logo.min.png"
    alt="Pokedex Logo"
    class="mt-16 w-[219px] h-auto"
  />
  <SearchBar bind:searchQuery pokemon={pokemon} />
  <div class="grid w-full grid-cols-3 mt-8 gap-9">
    {#each pokemonVisible as { name } (name)}
      <Lazy height={300}>
        <Card pokemonName={name} />
      </Lazy>
    {/each}
  </div>
</main>

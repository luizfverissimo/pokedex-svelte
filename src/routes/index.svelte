<script>
  import { onMount } from 'svelte';

  import SearchBar from '../components/SearchBar.svelte';

  let pokemon = [];

  onMount(async () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then((res) => res.json())
      .then((data) => {
        pokemon = data.results;
      });
  });
</script>

<main class="flex flex-col items-center justify-center w-full max-w-7xl">
  <img
    src="pokedex_logo.min.png"
    alt="Pokedex Logo"
    class="mt-16 w-[219px] h-auto"
  />
  <SearchBar />
  {#each pokemon as poke}
    <p>{poke.name}</p>
  {/each}
</main>

<script>
  import { onMount } from 'svelte';
  import Lazy from 'svelte-lazy';
  import { favPokemon, fetchLocalFavPokemon } from '../stores/favStore';
  import Card from '$components/Card.svelte';

  let pokemonFavorited = [];

  onMount(async () => {
    fetchLocalFavPokemon();
    pokemonFavorited = $favPokemon
  });
</script>

<svelte:head>
  <title>Pokedex | LF Verissimo</title>
</svelte:head>

<main class="flex flex-col items-center justify-center w-full gap-8 max-w-7xl">
  <img
    src="pokedex_logo.min.png"
    alt="Pokedex Logo"
    class="mt-8 w-[100px] h-auto"
  />
  <h1 class="text-4xl font-bold uppercase font-palanquin text-black-theme">favorites</h1>
  {#if pokemonFavorited.length === 0}
    <div class="flex flex-col items-center gap-2">
      <p class="w-full text-base text-center font-roboto text-gray-500-theme">
        Sorry! No favorite pokemon found.
      </p>
      <img
        class="w-[100px]"
        src="https://emoji.gg/assets/emoji/1305_pikachu_sad2.png"
        alt="Pikachu crying."
      />
    </div>
  {/if}
  <div class="grid w-full grid-cols-3 my-8 gap-9">
    {#each pokemonFavorited as pokemon (pokemon)}
      <Lazy height={300}>
        <Card pokemonName={pokemon} />
      </Lazy>
    {/each}
  </div>
</main>

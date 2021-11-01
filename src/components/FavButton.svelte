<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { faHeart } from '@fortawesome/free-solid-svg-icons';
  import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
  import Fa from 'svelte-fa/src/fa.svelte';

  import { favPokemon } from '../stores/favStore';

  let isFav = false;
  export let pokemonName;

  onMount(() => {
    if ($favPokemon.includes(pokemonName)) {
      isFav = true;
      return;
    }
  });

  function handleFav() {
    if (!isFav) {
      favPokemon.update((data) => [...data, pokemonName]);
      isFav = true;
      console.log($favPokemon);
      localStorage.setItem('favPokemon', JSON.stringify($favPokemon));
      return;
    }

    if (isFav) {
      const favPokemonFiltered = $favPokemon.filter(
        (data) => data !== pokemonName
      );
      favPokemon.set(favPokemonFiltered);
      isFav = false;
      console.log($favPokemon);
      localStorage.setItem('favPokemon', JSON.stringify($favPokemon));
      return;
    }
  }
</script>

<button class="transition-all transform hover:scale-110 hover:brightness-90" transition:fade on:click={handleFav}>
  {#if isFav}
    <Fa icon={faHeart} />
  {:else}
    <Fa icon={faHeartOutline} />
  {/if}
</button>

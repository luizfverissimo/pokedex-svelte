
<script>
  import { onMount } from 'svelte';

  import bulbaData from '../bulba.json';
  export let pokeData = bulbaData;

  onMount(() => {
    console.log(pokeData);
  });
</script>

<svelte:head>
  <title>{pokeData.name.toUpperCase()} | Pokedex</title>
</svelte:head>

<div class={`${pokeData.types[0].type.name} absolute top-0 w-full h-[400px] z-[-1]`}/>
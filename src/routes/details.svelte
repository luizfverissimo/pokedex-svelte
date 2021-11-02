<script context="module">
  export async function load({fetch, page}) {
    const id = page.query.get('id')
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data  = await res.json()

    return {
      props: {
        pokeData: data
      }
    }
  }
</script>

<script>
  import { fly } from 'svelte/transition';

  import AboutCard from '$components/AboutCard.svelte';
  import DetailsButton from '$components/DetailsButton.svelte';
  import StatsCard from '$components/StatsCard.svelte';
  import { padder } from '$utils/padder';
  import { status } from '../stores/changeDetails';

  import bulbaData from '../bulba.json'; //remove

  export let pokeData = bulbaData;
  let sectionActive = 'stats';

  function changeDetails(section) {
    sectionActive = section
    status.set(sectionActive === 'stats');
    return
  }

</script>

<svelte:head>
  <title>{pokeData.name.toUpperCase()} | Pokedex</title>
</svelte:head>

<div
  class={`${pokeData.types[0].type.name} absolute top-0 w-full h-[280px] z-[-1]`}
/>
<main class="flex flex-col items-center w-full mt-6 max-w-7xl ">
  <section class="flex items-center w-full gap-9">
    <img
      class="max-h-[250px] min-h-[150px] w-auto transition-all transform hover:rotate-6 hover:drop-shadow-xl"
      src={pokeData.sprites.other['official-artwork'].front_default}
      alt={`Image of ${pokeData.name}`}
    />
    <div class="font-bold font-palanquin">
      <span class="text-3xl text-black-theme"
        >#{padder('000', pokeData.id)}</span
      >
      <h1 class="text-5xl uppercase text-white-theme">{pokeData.name}</h1>
    </div>
  </section>
  <section class="flex items-center justify-center w-full gap-4">
    <DetailsButton
      isActive={sectionActive === 'about'}
      type={pokeData.types[0].type.name}
      on:click={() => changeDetails('about')}>about</DetailsButton
    >
    <DetailsButton
      isActive={sectionActive === 'stats'}
      type={pokeData.types[0].type.name}
      on:click={() => changeDetails('stats')}>stats</DetailsButton
    >
    <DetailsButton
      isActive={sectionActive === 'evolution'}
      type={pokeData.types[0].type.name}
      on:click={() => changeDetails('evolution')}>evolution</DetailsButton
    >
  </section>

  <section class="flex flex-col w-full h-[400px] max-w-lg mb-8">
    {#if sectionActive === 'about'}
      <AboutCard {pokeData} />
    {/if}
    {#if sectionActive === 'stats'}
      <StatsCard {pokeData} />
    {/if}
    {#if sectionActive === 'evolution'}
      <div
        class="flex flex-col items-start w-full gap-4 p-6 border-2 rounded-lg shadow-xl mt-9"
        in:fly={{ x: -100, delay: 400, duration: 300 }}
        out:fly={{ x: 100, duration: 300 }}
      >
        evolution
      </div>
    {/if}
  </section>
</main>

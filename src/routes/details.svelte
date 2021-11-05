<script context="module">
  export async function load({ fetch, page }) {
    const id = page.query.get('id');
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    const resSpecies = await fetch(data.species.url);
    const { evolution_chain } = await resSpecies.json();

    let dataEvolutionChain;
    if (evolution_chain) {
      const resEvolutionChain = await fetch(evolution_chain.url);
      const { chain } = await resEvolutionChain.json();
      dataEvolutionChain = await evolutionChainFlatter(chain);
    }

    let abilities = [];
    const promises = data.abilities.map(async (item, index) => {
      return new Promise(async (resolve, reject) => {
        const res = await fetch(item.ability.url);
        const data = await res.json();

        const [{ effect }] = data.effect_entries.filter(
          (item) => item.language.name === 'en'
        );
        abilities[index] = effect;
        return resolve();
      });
    });

    await Promise.all(promises);

    return {
      props: {
        pokeData: data,
        abilitiesText: abilities,
        evolutionChain: dataEvolutionChain
      }
    };
  }
</script>

<script>
  import { fly } from 'svelte/transition';

  import AboutCard from '$components/AboutCard.svelte';
  import DetailsButton from '$components/DetailsButton.svelte';
  import StatsCard from '$components/StatsCard.svelte';
  import { padder } from '$utils/padder';
  import { status } from '../stores/changeDetails';

  import EvolutionCard from '$components/EvolutionCard.svelte';
  import { evolutionChainFlatter } from '$utils/evolutionChainFlatter';

  export let pokeData;
  export let abilitiesText;
  export let evolutionChain;
  let sectionActive = 'stats';

  function changeDetails(section) {
    sectionActive = section;
    status.set(sectionActive === 'stats');
    return;
  }
</script>

<svelte:head>
  <title>{pokeData.name.toUpperCase()} | Pokedex</title>
</svelte:head>

<div
  class={`${pokeData.types[0].type.name} absolute top-0 w-full h-[280px] z-[-1]`}
/>
<main class="flex flex-col items-center w-full px-4 mt-6 max-w-7xl xl:px-0">
  <section class="flex flex-col items-center w-full gap-2 mb-8 md:flex-row md:mb-0 md:gap-9">
    <img
      class="max-h-[250px] min-h-[150px] w-auto transition-all transform hover:rotate-6 hover:drop-shadow-xl"
      src={pokeData.sprites.other['official-artwork'].front_default}
      alt={`Image of ${pokeData.name}`}
    />
    <div class="font-bold font-palanquin">
      <span class="text-3xl text-black-theme"
        >#{padder('000', pokeData.id)}</span
      >
      <h1 class="text-5xl uppercase text-gray-500-theme md:text-white-theme">{pokeData.name}</h1>
    </div>
  </section>
  <section class="flex flex-wrap items-center justify-center w-full gap-4">
    <DetailsButton
      isActive={sectionActive === 'about'}
      on:click={() => changeDetails('about')}>about</DetailsButton
    >
    <DetailsButton
      isActive={sectionActive === 'stats'}
      on:click={() => changeDetails('stats')}>stats</DetailsButton
    >
    <DetailsButton
      isActive={sectionActive === 'evolution'}
      on:click={() => changeDetails('evolution')}>evolution</DetailsButton
    >
  </section>

  <section class="flex flex-col w-full min-h-[400px] max-w-lg mb-8">
    {#if sectionActive === 'about'}
      <AboutCard {pokeData} {abilitiesText} />
    {:else if sectionActive === 'stats'}
      <StatsCard {pokeData} />
    {:else if sectionActive === 'evolution'}
      <EvolutionCard {evolutionChain} pokemonName={pokeData.name}/>
    {/if}
  </section>
</main>

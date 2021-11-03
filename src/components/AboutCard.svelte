<!-- <script context="module">
  export async function load({ fetch }) {
    const resCharacteristic = await fetch(
      `https://pokeapi.co/api/v2/characteristic/${pokeData.id}`
    );
    const dataCharacteristic = await resCharacteristic.json();

    const [{ description }] = dataCharacteristic.descriptions.filter(
      (item) => item.language.name === 'en'
    );

    let abilities = [];
    pokeData.abilities.forEach(async (item, index) => {
      const res = await fetch(item.ability.url);
      const data = await res.json();

      const [{ effect }] = data.effect_entries.filter(
        (item) => item.language.name === 'en'
      );
      abilities[index] = effect;
    });

    console.log(abilities, description);
    return {
      props: {
        infoText: description,
        abilitiesText: abilities
      }
    };
  }
</script> -->

<script>
  import { onMount } from 'svelte';

  import { fly } from 'svelte/transition';
  export let pokeData;

  export let infoText;
  export let abilitiesText;

  // onMount(() => {
  //   fetchCharacteristic(pokeData.id)
  //   fetchAbilitiesText(pokeData.abilities)
  // })

  function showAbility(index) {
    console.log(abilitiesText[index]);
  }
</script>

<div
  class="flex flex-col items-start w-full gap-4 p-6 border-2 rounded-lg shadow-xl mt-9"
  in:fly={{ x: -100, delay: 400, duration: 300 }}
  out:fly={{ x: 100, duration: 300 }}
>
  <div class="flex items-center gap-2">
    <p class="font-bold font-roboto text-black-theme">Type:</p>
    <div class="flex items-center gap-2">
      {#each pokeData.types as type}
        <p
          class={`${type.type.name} text-sm px-2 py-1 rounded-md text-black-theme`}
        >
          {type.type.name}
        </p>
      {/each}
    </div>
  </div>
  <p class="font-roboto text-black-theme">
    <strong>Characteristics:</strong> "{infoText}"
  </p>
  <p class="font-roboto text-black-theme">
    <strong>Weight:</strong>
    {pokeData.weight} pounds
  </p>
  <p class="font-roboto text-black-theme">
    <strong>Height:</strong>
    {pokeData.height} ft.
  </p>
  <p class="font-roboto text-black-theme">
    <strong>Abilities:</strong>
    {#each pokeData.abilities as ability, index}
      <span
        on:mouseover={() => showAbility(index)}
        on:focus={() => showAbility(index)}
        class="mr-2 underline cursor-help">{ability.ability.name}</span
      >
    {/each}
  </p>
</div>

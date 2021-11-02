<script>
  import { fly } from 'svelte/transition';
  export let pokeData;

  function getAbility(name) {
    console.log(name);
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
    <strong>Characteristics:</strong> A retirar
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
    {#each pokeData.abilities as ability}
      <span
        on:mouseover={() => getAbility(ability.ability.name)}
        on:focus={() => getAbility(ability.ability.name)}
        class="mr-2 underline cursor-help">{ability.ability.name}</span
      >
    {/each}
  </p>
</div>

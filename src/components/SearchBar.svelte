<script>
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faCircleNotch, faSearch } from '@fortawesome/free-solid-svg-icons';

  export let searchQuery;
  export let pokemon;
  export let isSearching;
</script>

<div
  class="flex items-center justify-center gap-2 px-4 py-3 text-lg border-2 rounded-lg shadow-lg border-gray-100-theme ring-gray-500-theme ring-opacity-40 focus-within:ring-2"
>
  <input
    type="text"
    bind:value={searchQuery}
    list="pokemon"
    class="bg-transparent w-[250px] outline-none text-black-theme placeholder-shown:text-gray-500-theme"
    placeholder="Who is that Pokemon?"
  />
  <datalist id="pokemon">
    {#each pokemon as item}
      <option value={item.name} />
    {/each}
  </datalist>
  {#if isSearching}
    <Fa class="text-black-theme" icon={faCircleNotch} spin />
  {:else}
    <Fa class="text-black-theme" icon={faSearch} />
  {/if}
</div>

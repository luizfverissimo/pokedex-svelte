<script>
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faSearch } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="searchContainer">
  <input
    type="text"
    class="bg-transparent outline-none text-black-theme placeholder-shown:text-gray-500-theme"
    placeholder="Who is that Pokemon?"
  />
  <Fa class="text-black-theme" icon={faSearch} />
</div>

<style lang="postcss">
  .searchContainer {
    @apply flex items-center justify-center gap-2 px-4 py-3 text-lg border-2 rounded-lg shadow-lg border-gray-100-theme ring-gray-500-theme ring-opacity-40 focus-within:ring-2;
  }
</style>

<script>
</script>

<svelte:head>
  <title>Pokedex | LF Verissimo</title>
</svelte:head>

<main class="flex flex-col items-center w-full px-4 mt-6 max-w-7xl xl:px-0">
  <img
    src="pokedex_logo.min.png"
    alt="Pokedex Logo"
    class="mt-8 w-[100px] h-auto"
  />
  <h1 class="text-4xl font-bold uppercase font-palanquin text-black-theme">
    about
  </h1>
  <section
    class="flex flex-col items-center w-full gap-4 text-lg mt-9 font-roboto"
  >
    <p>Pokedex Project created to learn Svelte and Svelte Kit.</p>
    <p>Created by <strong>LF Verissimo</strong></p>
    <a href="https://lfverissimo.com" rel="noopener noreferer" target="_blank">
      <img
        src="https://github.com/luizfverissimo/luizfverissimo/raw/8604eedb8ecf5eeb23f8ffae63cfdf8eba6513c3/banner.png?raw=true"
        alt="Banner with LF Verssimo informations - Frontend Developer"
      />
    </a>
    <p class="mt-4">
      All the data was provided by the <a
        class="underline"
        href="https://pokeapi.co/"
        target="_blank"
        rel="noopener noreferer"
        ><strong>PokeApki - The RESTful Pokémon API</strong></a
      >
    </p>
  </section>
</main>

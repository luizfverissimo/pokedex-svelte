<script context="module">
  export async function load({ page }) {
    return {
      props: { isWhite: page.path === '/details' }
    };
  }
</script>

<script>
  import '../app.css';
  import Navbar from '$components/Navbar.svelte';
  export let isWhite;
</script>

<Navbar bind:isWhite />
<slot />

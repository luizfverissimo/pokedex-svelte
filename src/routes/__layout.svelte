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
  import UpButton from '$components/UpButton.svelte';
  export let isWhite;
</script>

<Navbar bind:isWhite />
<UpButton />
<slot />

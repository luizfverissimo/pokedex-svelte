<script>
  export let stat;
  export let type;

  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { status } from '../stores/changeDetails';
  import { onMount } from 'svelte';

  const progress = tweened(0, {
    delay: 500,
    duration: 400,
    easing: cubicOut
  });

  onMount(() => {
    progress.set(stat.base_stat);
  });

  $: {
    if ($status) {
      progress.set(stat.base_stat);
    }
  }
</script>

<div class="flex justify-between w-full font-roboto text-black-theme">
  <span class="font-bold uppercase">{stat.stat.name}</span>
  <span>{stat.base_stat}</span>
</div>
<div class="relative w-full">
  <hr class="w-full h-[12px] bg-gray-500-theme rounded-lg z-10 shadow-md" />
  <hr
    class={`${type} h-[12px] absolute top-0 left-0 z-20 rounded-lg`}
    style={`width: ${$progress}%`}
  />
</div>

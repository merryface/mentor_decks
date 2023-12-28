<script>
  import Header from "$lib/components/Header.svelte";
  import { onMount } from 'svelte';
  import Login from "$lib/components/Login.svelte";

  export let loggedin = false;
  console.log('loggedin', loggedin);

  onMount(() => {
  });
</script>

<Header />
<div class="container">
  {#if loggedin}
    <slot />
  {:else}
    <Login />
  {/if}
</div>

<style>
  .container {
    padding: 2rem 3rem;
    max-width: 1400px;
  }
</style>

<script>
  import Header from "$lib/components/Header.svelte";
  import { onMount } from 'svelte';
  import Login from "$lib/components/Login.svelte";

  export let data;
  const loggedin = data.loggedin;
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

<script>
  import Login from "$lib/components/Login.svelte";
  import { onMount } from 'svelte';

  export let data;

  onMount(() => {
    // if logged in redirect to dashboard page
    if (data.loggedin) {
      window.location.href = '/dashboard';
    }
  })
</script>

<Login />
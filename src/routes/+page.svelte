<script>
  import Login from "$lib/components/Login.svelte";
  import { onMount } from 'svelte';

  export let data;

  onMount(() => {
    if (data.loggedin) {
      window.location.href = '/dashboard';
    }
  })
</script>

<Login />
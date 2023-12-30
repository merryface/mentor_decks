<script>
  import { page } from '$app/stores';  
  import Header from "$lib/components/Header.svelte";
  import { onMount } from "svelte";
  export let data;

  // Environment variables
  const VATSIM_CLIENT_ID = import.meta.env.VITE_VATSIM_CLIENT_ID;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  const VATSIM_OAUTH_ENDPOINT = import.meta.env.VITE_VATSIM_OAUTH_ENDPOINT;

  //  Routes
  const currentPath = $page.url.pathname 
  const authUrl = `${VATSIM_OAUTH_ENDPOINT}/oauth/authorize?response_type=code&client_id=${VATSIM_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=full_name+vatsim_details`;
  const publicRoutes = ['/', authUrl];

  onMount(() => {
    if (!data.loggedin && !publicRoutes.includes(currentPath)) {
      window.location.href = './';
    }

    if (data.loggedin && currentPath === '/') {
      window.location.href = './dashboard';
    }
  });
</script>

<Header />
<div class="container">

  <slot />
</div>

<style>
  .container {
    padding: 2rem 3rem;
    max-width: 1400px;
  }
</style>

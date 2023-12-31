<script>
  export let data;
</script>

<div class="">
  {#if data.err !== undefined}
      <p>Error: {data.err}</p>
  {/if}
  <p>Logging you in...</p>
</div>
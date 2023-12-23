<script>
	import Header from "$lib/components/Header.svelte";

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
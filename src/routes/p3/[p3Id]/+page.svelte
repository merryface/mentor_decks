<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { error } from '@sveltejs/kit';
  import { browser } from '$app/environment';
  import DeckCard from '$lib/components/DeckCard.svelte';

  let lesson; // Initialize as an empty object

  // Extract the p3Id from the URL
  const p3Id = $page.params.p3Id;

  onMount(async () => {
    if (browser) {
      try {
        const response = await fetch(`https://merryface.github.io/mentor_decks_data/p3_rating.json`);
        if (!response.ok) {
          throw error(404, 'Lesson not found');
        }
        const lessons = await response.json();

        // Find the specific lesson with the given p3Id
        lesson = lessons[p3Id];
        if (!lesson) {
          throw error(404, 'Lesson not found');
        }
      } catch (err) {
        console.error('There was a problem with the fetch operation:', err);
      }
    }
  });

</script>

{#if lesson}
  <DeckCard data={lesson} />
{:else}
  <p>Loading...</p>
{/if}

<script>
  import { onMount } from 'svelte';
  let lessons = []; // Initialize as an empty array
  export let rating;

  onMount(() => {
    fetch(`https://merryface.github.io/mentor_decks_data/${rating}_rating.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        lessons = data;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });
</script>

<h1>{rating.toUpperCase()} Rating</h1>
<ul>
  {#each lessons as lesson}
    <li><a href={`/{rating}/${lesson.id}`}>{lesson.lessonTitle}</a></li>
  {/each}
</ul>

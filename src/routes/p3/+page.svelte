<script>
  import { onMount } from 'svelte';
  let lessons = []; // Initialize as an empty array

  onMount(() => {
    fetch('https://merryface.github.io/mentor_decks_data/p3_rating.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        lessons = data; // Update the lessons variable
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });
</script>

<h1>p3 Rating</h1>
<ul>
  {#each lessons as lesson}
    <li><a href={`/p3/${lesson.id}`}>{lesson.lessonTitle}</a></li>
  {/each}
</ul>

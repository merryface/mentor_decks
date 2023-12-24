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

<h2>{rating.charAt(0).toUpperCase() + rating.slice(1)} Rating</h2>
<ul>
  {#each lessons as lesson}
    <li><a href={`/{rating}/${lesson.id}`}>{lesson.lessonTitle}</a></li>
  {/each}
</ul>

<style>
  h2 {
    margin-bottom: 2rem;
    margin-top: 1rem;
    font-size: 3rem;
    font-weight: bold;
    color:#17375E;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    background-color:#17375E;
    padding: 1rem;
    width: 70%;
    max-width: 60rem;
    border-radius: 5px;
    text-align: center;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
</style>

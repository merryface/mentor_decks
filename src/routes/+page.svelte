<script>
  import BriefAndAssessment from "$lib/components/BriefAndAssessment.svelte";
  import Exercise from "$lib/components/Exercise.svelte";
  import { demoDeckCard } from '$lib/data/demoDeckCard.js'
</script>

<h2>Lesson Deck Card</h2>
<BriefAndAssessment data={demoDeckCard}/>
<Exercise />

<style>
  h2 {
    margin-bottom: 1rem;
    font-size: 3rem;
    font-weight: bold;
    color:#17375E;
  }
</style>



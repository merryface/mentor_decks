<script>
  import BriefAndAssessment from "$lib/components/BriefAndAssessment.svelte";
  import Exercise from "$lib/components/Exercise.svelte";
  import FlightProfile from "$lib/components/FlightProfile.svelte";
  import { demoDeckCard } from '$lib/data/demoDeckCard.js'
	import CriteriaSetup from "../lib/components/CriteriaSetup.svelte";

  const exercises = demoDeckCard.exercises;
</script>

<h2>Lesson Deck Card</h2>
<BriefAndAssessment data={demoDeckCard}/>
{#each exercises as exercise}
<Exercise data={exercise} />
{/each}

<FlightProfile data={demoDeckCard.configuration} />

<CriteriaSetup exercises={exercises} />
  
<style>
  h2 {
    margin-bottom: 1rem;
    font-size: 3rem;
    font-weight: bold;
    color:#17375E;
  }
</style>



<script>
	import RemedialExercises from './RemedialExercises.svelte';
  import BriefAndAssessment from "$lib/components/BriefAndAssessment.svelte";
  import Exercise from "$lib/components/Exercise.svelte";
  import FlightProfile from "$lib/components/FlightProfile.svelte";
  import CriteriaSetup from "$lib/components/CriteriaSetup.svelte"; 

  export let data;
  const lessonTitle = data.lessonTitle;
  const exercises = data.exercises;
  const remedialExercises = data.remedialExercises;
</script>

<h2>{lessonTitle}</h2>
<BriefAndAssessment data={data}/>

{#each exercises as exercise}
<Exercise data={exercise} />
{/each}

<FlightProfile data={data.configuration} />
<RemedialExercises remedialExercises={remedialExercises} />
<CriteriaSetup exercises={exercises} />

  
<style>
  h2 {
    margin-bottom: 1rem;
    font-size: 3rem;
    font-weight: bold;
    color:#17375E;
  }
</style>



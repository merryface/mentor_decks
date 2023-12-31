<script>
  export let remedialExercises;  
</script>

<div class="remedial-exercises">
  <h3>Flight Profile</h3>
  {#each remedialExercises as exercise}
  <div class="exercise-item">
    <div class="weakness">{exercise.weakness}</div>
    <div class="suggested-exercise">{exercise.remediation}</div>
  </div>
  {/each}
</div>

<style>
  .remedial-exercises {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    border-bottom: 1px solid #17375E;
    border-top: 1px solid #17375E;
  }
  .exercise-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .weakness, .suggested-exercise {
    font-size: 1.2rem;
  }
  .weakness {
    font-weight: bold;
    color: #17375E;
  }
  .suggested-exercise {
    color: #17375E;
  }
</style>
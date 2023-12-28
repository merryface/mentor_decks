<script>
  import { onMount } from 'svelte';

  let lesson = {
    id: 9999,
    lessonTitle: "",
    image: "",
    assessmentQuestions: [],
    exercises: [],
    configuration: {}
  };

  let assessmentQuestion = '';
  let assessmentAnswer = '';

  let exerciseTitle = '';
  let selectedItemIndex = 0; // Index of the selected exercise
  let exerciseItem = { item: "", criteria: "" };

  const addToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(lesson, null, 2));
      console.log('Copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const addQuestion = () => {
    lesson.assessmentQuestions = [
      ...lesson.assessmentQuestions,
      { question: assessmentQuestion, answer: assessmentAnswer }
    ];
    assessmentQuestion = '';
    assessmentAnswer = '';
  };

  const addExercise = () => {
    lesson.exercises = [
      ...lesson.exercises,
      { title: exerciseTitle, exerciseItems: [] }
    ];
    exerciseTitle = '';
  };

  const addExerciseItem = () => {
    if (lesson.exercises.length > 0) {
      let updatedExercises = [...lesson.exercises];
      updatedExercises[selectedItemIndex].exerciseItems = [
        ...updatedExercises[selectedItemIndex].exerciseItems,
        { ...exerciseItem }
      ];
      lesson.exercises = updatedExercises;
      exerciseItem = { item: "", criteria: "" };
    }
  };

  onMount(() => {
  });
</script>

<form>
  <label>
    Lesson Title
    <input type="text" bind:value={lesson.lessonTitle} placeholder="Lesson Title" />
  </label>

  <div class="multiPart">
    <p>Assessment Questions</p>
    <label>
      Question
      <input type="text" bind:value={assessmentQuestion} placeholder="Question" />
    </label>
    <label>
      Answer
      <input type="text" bind:value={assessmentAnswer} placeholder="Answer" />
    </label>
    <button type="button" on:click={addQuestion}>Add Question</button>
  </div>

  <div class="multiPart">
    <p>Exercises</p>
    <label>
      Exercise Title
      <input type="text" bind:value={exerciseTitle} placeholder="Exercise Title" />
    </label>
    <button type="button" on:click={addExercise}>Add Exercise</button>
  </div>

  {#if lesson.exercises.length > 0}
    <label>
      Select Exercise to add Items to
      <select bind:value={selectedItemIndex}>
        {#each lesson.exercises as exercise, index}
        <option value={index}>{exercise.title}</option>
        {/each}
      </select>
    </label>

    <label>
      Item
      <input type="text" bind:value={exerciseItem.item} placeholder="Exercise item" />
    </label>

    <label>
      Criteria
      <input type="text" bind:value={exerciseItem.criteria} placeholder="Exercise criteria" />
    </label>
    <button type="button" on:click={addExerciseItem}>Add Item</button>

    <div>
      <p>Exercise Items</p>
      {#each lesson.exercises as exercise}
        {#each exercise.exerciseItems as exerciseItem}
          <p>{exerciseItem.item}</p>
          <p>{exerciseItem.criteria}</p>
        {/each}
      {/each}
    </div>
  {/if}

  <button type="button" on:click={addToClipboard}>Copy to Clipboard</button>
</form>

<pre>{JSON.stringify(lesson, null, 2)}</pre>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .multiPart, label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>

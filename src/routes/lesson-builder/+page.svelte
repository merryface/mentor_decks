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

  const reset = () => {
    lesson = {
      id: 9999,
      lessonTitle: "",
      image: "",
      assessmentQuestions: [],
      exercises: [],
      configuration: {}
    };
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
    if (exerciseTitle === '') return;
    lesson.exercises = [
      ...lesson.exercises,
      { title: exerciseTitle, exerciseItems: [] }
    ];
    exerciseTitle = '';
  };

  const addExerciseItem = () => {
    if (exerciseItem.item === '' || exerciseItem.criteria === '') return;
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

<h2>Lesson Builder</h2>

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

  <div class="multiPart">
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
  {/if}
  </div>


</form>

<pre>{JSON.stringify(lesson, null, 2)}</pre>
<div class="pre-buttons">
  <button type="button" on:click={addToClipboard}>Copy to Clipboard</button>
  <button class="warning" type="button" on:click={reset}>Reset</button>
</div>


<style>
  h2 {
    margin-bottom: 1rem;
    font-size: 3rem;
    font-weight: bold;
    color:#17375E;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: bold;
    font-size: 1.5rem;
  }

  label {
    font-size: 1.3rem;
  }

  input, select {
    margin-top: 0.4rem;
    font-size: 1.3rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #17375E;
  }

  .multiPart, label {
    display: flex;
    flex-direction: column;
  }

  .multiPart {
    border: 1px solid #17375E;
    border-radius: 5px;
    padding: 1rem;
    gap: 1rem;
  }

  pre {
    background-color: #17375E;
    color: white;
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  button {
    background-color: #17375E;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    cursor: pointer;
  }

  .pre-buttons button {
    height: 3rem;
    width: 15rem;
  }

  .pre-buttons {
    display: flex;
    justify-content: space-between;
  }

  .warning {
    background-color: rgb(188, 14, 14);
  }
</style>

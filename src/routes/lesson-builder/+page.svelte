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

  let config = {
    status: "Cold & dark",
    fuel: "50-100%",
    payload: "189kg",
    bags: "20kg",
    location: "Parking ramp",
    atc: "None",
    runway: "27L",
    liveWeather: false,
    wind: "Calm",
    temp: "15°C",
    pressure: "1013hPa",
    visibility: "+10km",
    ceiling: "None",
    notes: ""
  };

  // Update lesson configuration whenever config changes
  $: lesson.configuration = config;

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

  {#if lesson.exercises.length > 0}
  <div class="multiPart">
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
  </div>
  {/if}

  <div class="multiPart">
    <p>Configuration</p>
    <label>
      Image
      <input type="text" bind:value={lesson.image} placeholder="Image URL" />
    </label>
  </div>

  <div class="multiPart">
    <p>Configuration</p>
    <label>
      Status
      <input type="text" bind:value={config.status} placeholder="Status" />
    </label>

    <label>
      Fuel
      <input type="text" bind:value={config.fuel} placeholder="Fuel" />
    </label>

    <label>
      Crew & Pax Weights
      <input type="text" bind:value={config.payload} placeholder="Payload" />
    </label>

    <label class="switch">
      Live Weather
      <input type="checkbox" bind:checked={config.liveWeather} />
      <span class="slider"></span>
    </label>

    {#if !config.liveWeather}
    <label>
      Wind
      <input type="text" bind:value={config.wind} placeholder="Wind" />
    </label>

    <label>
      Temperature
      <input type="text" bind:value={config.temp} placeholder="Temperature" />
    </label>

    <label>
      Pressure
      <input type="text" bind:value={config.pressure} placeholder="Pressure" />
    </label>

    <label>
      Visibility
      <input type="text" bind:value={config.visibility} placeholder="Visibility" />
    </label>

    <label>
      Ceiling
      <input type="text" bind:value={config.ceiling} placeholder="Ceiling" />
    </label>
    {/if}



    <label>
      Notes
      <textarea bind:value={config.notes} placeholder="Notes"></textarea>
    </label>
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

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-left: 10px;
  }

  /* Hide default checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>

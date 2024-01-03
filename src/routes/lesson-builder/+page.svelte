<script>
  import { onMount } from 'svelte';

  let lesson = {
    id: 9999,
    lessonTitle: "",
    image: "",
    assessmentQuestions: [],
    exercises: [],
    configuration: {},
    remedialExercises: []
  };

  let assessmentQuestion = '';
  let assessmentAnswer = '';

  let remediationItem = '';
  let suggestedExercise = '';

  let exerciseTitle = '';
  let selectedItemIndex = 0; // Index of the selected exercise
  let exerciseItem = { item: "", criteria: "" };

  let config = {
    // a/c config
    status: "Cold & dark",
    fuel: "50-100%",
    payload: "189kg",
    bags: "20kg",
    // Flight config
    location: "Parking ramp",
    atc: "None",
    runway: "27L",
    // Weather config
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

  const saveToLocalStorage = () => {
    localStorage.setItem('lessonData', JSON.stringify(lesson));
    console.log('Data saved to localStorage');
    alert('Data saved!');
  };

  const addToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(lesson, null, 2));
      console.log('Copied to clipboard');
      alert('Copied to clipboard');
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
      configuration: {},
      remedialExercises: []
    };
    localStorage.removeItem('lessonData');
    console.log('Data reset and cleared from localStorage');
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

  const deleteQuestion = (index) => {
    let updatedQuestions = [...lesson.assessmentQuestions];
    updatedQuestions.splice(index, 1);
    lesson.assessmentQuestions = updatedQuestions;
  };

  const deleteCriteria = (index) => {
    let updatedExercises = [...lesson.exercises];
    updatedExercises[selectedItemIndex].exerciseItems.splice(index, 1);
    lesson.exercises = updatedExercises;
  };

  const addRemediationExercise = () => {
    if (remediationItem === '' || suggestedExercise === '') return;
    lesson.remedialExercises = [
      ...lesson.remedialExercises,
      { weakness: remediationItem, remediation: suggestedExercise }
    ];
    remediationItem = '';
    suggestedExercise = '';
  };

  const deleteRemediationExercise = (index) => {
    let updatedRemedialExercises = [...lesson.remedialExercises];
    updatedRemedialExercises.splice(index, 1);
    lesson.remedialExercises = updatedRemedialExercises;
  };

  onMount(() => {
    const savedData = localStorage.getItem('lessonData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        lesson = parsedData;
      } catch (error) {
        console.error("Error parsing saved data", error);
      }
    }
  });
</script>

<div class="top">
  <h2>Lesson Builder</h2>
  <button type="button" on:click={saveToLocalStorage}>Save</button>
</div>

<form>
  <label>
    Lesson Title
    <input type="text" bind:value={lesson.lessonTitle} placeholder="Lesson Title" />
  </label>

  <!-- Assessment Questions -->
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

    {#if lesson.assessmentQuestions.length > 0}
    <div class="currentQuestions">
      <p>Current Questions</p>
      {#each lesson.assessmentQuestions as question, index}
      <div class="question">
        <div class="info">
          <p>{index + 1}. {question.question}</p>
          <p>{question.answer}</p>
        </div>
        <button on:click={deleteQuestion}>Delete</button>
        </div>
      {/each}

    </div>
    {/if}
  </div>

  <!-- Exercises -->
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

    <div class="itemsOfCurrentExercise">
      <p>Current Items</p>
      {#each lesson.exercises[selectedItemIndex].exerciseItems as item, index}
      <div class="question">
        <div class="info">
          <p>{index + 1}. {item.item}</p>
          <p>{item.criteria}</p>
        </div>
        <button on:click={deleteCriteria}>Delete</button>
      </div>
      {/each}
    </div>
  </div>
  {/if}

  <!-- Flight Profile -->
  <div class="multiPart">
    <p>Flight Profile</p>
    <!-- aircraft config -->
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

    <label>
      Luggage Weight
      <input type="text" bind:value={config.bags} placeholder="Payload" />
    </label>

    <!-- Flight Configuration -->
    <label>
      Location
      <input type="text" bind:value={config.location} placeholder="Location" />
    </label>

    <label>
      ATC
      <input type="text" bind:value={config.atc} placeholder="ATC" />
    </label>

    <label>
      Runway
      <input type="text" bind:value={config.runway} placeholder="Runway" />
    </label>

    <!-- Weather -->
    <label>
      Live Weather
      <div class="switch">
        <input type="checkbox" bind:checked={config.liveWeather} />
        <span class="slider round"></span>
      </div>
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
      <textarea bind:value={config.notes} placeholder="Notes" maxlength="250"></textarea>
    </label>
  </div>

  <!-- Remedial Exercises -->
  <div class="multiPart">
    <p>Suggested Remedial Exercises</p>
    <label>
      Item needing remediation
      <input type="text" bind:value={remediationItem} placeholder="Remediation Item" />
    </label>
    <label>
      Suggested Exercises
      <input type="text" bind:value={suggestedExercise} placeholder="Suggested Exercise" />
    </label>
    <button type="button" on:click={addRemediationExercise}>Add Remediation Exercise</button>

    {#if lesson.remedialExercises.length > 0}
    <div class="currentRemediation">
      <p>Current Questions</p>
      {#each lesson.remedialExercises as remediation, index}
      <div class="remediation">
        <div class="info">
          <p>{index + 1}. {remediation.weakness}</p>
          <p>{remediation.remediation}</p>
        </div>
        <button on:click={deleteRemediationExercise}>Delete</button>
        </div>
      {/each}

    </div>
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

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 6rem;
    height: 2.7rem;
    margin-top: 0.4rem;
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
    height: 2rem;
    width: 2rem;
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
    box-shadow: 0 0 1px #17375E;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(3rem);
    -ms-transform: translateX(3rem);
    transform: translateX(3rem);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .question, .remediation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin-bottom: 0.5rem;
  }

  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
    width: 90%;
  }

  .info > :first-child {
    color: #17375E;
    margin-right: 1.5rem;
  }

  @media screen and (max-width: 782px) {
    .question p, .remediation p {
      font-size: 1rem;
    }
  }
</style>

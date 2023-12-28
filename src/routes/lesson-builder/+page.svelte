<script>
  import { onMount } from 'svelte';

  $: lesson = {
    id: 9999,
    lessonTitle: "",
    image: "",
    assessmentQuestions: [],
    exercises: [],
    configuration: {}
  };

  let assessmentQuestion = ''
  let assessmentAnswer = ''

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

  onMount(() => {
  });
</script>

<form>
  <label>
    Lesson Title
    <input type="text" bind:value={lesson.lessonTitle} placeholder="Lesson Title" />
  </label>

  <p>Assessment Questions</p>
  <label>
    Question
    <input type="text" bind:value={assessmentQuestion} placeholder="Question" />
  </label>
  <label>
    Answer
    <input type="text" bind:value={assessmentAnswer} placeholder="Answer" />
  </label>

  <!-- Similar inputs for other properties -->

  <button type="button" on:click={addQuestion}>Add Question</button>
  <button type="button" on:click={addToClipboard}>Copy to Clipboard</button>
</form>

<pre>{JSON.stringify(lesson, null, 2)}</pre>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>

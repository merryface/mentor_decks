<script>
  export let data
  const image = data.image
  const assessmentQuestions = data.assessmentQuestions
</script>

<div class="brief-and-start-assessment">
  <img class="board-brief" src="{image}" alt="Vatsim UK logo">
    <div class="qa-container">
      <h3>Pre-lesson Assessment</h3>
      {#each assessmentQuestions as question}
      <div class="qa-item">
        <div class="question">{question.question}</div>
        <div class="answer">{question.answer}</div>
      </div>
      {/each}
  </div>
</div>

<style>
  .brief-and-start-assessment {
    width: 100%;
    display: flex;
    gap: 2rem;
  }

.board-brief {
  width: 50%;
  display: block;
  border: 2px solid #25ADE3;
  border-radius: 2px;
  object-fit: contain;
  }

  .qa-container {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .qa-item {
    display: flex;
    flex-direction: row;
    margin-bottom: 1px;
  }

  .question, .answer {
    padding: 10px;
    border: 1px solid #17375E;
    font-size: 1.2rem;
  }

  .question {
    flex: 1;
    background-color: #17375E;
    color: #25ADE3;
    border-right: none; /* Remove border between question and answer */
  }

  .answer {
    flex: 2;
    background-color: #fff;
  }

  @media screen and (max-width: 768px) {
    .brief-and-start-assessment {
      flex-direction: column;
    }
    .board-brief {
      width: 100%;
    }
    .qa-container {
      width: 100%;
    }
  }

</style>
<script>
  import placeholder from '$lib/assets/placeholder.png'
</script>
<h2>Lesson Title</h2>
<div class="brief-and-start-assessment">
  <img class="board-brief" src="{placeholder}" alt="Vatsim UK logo">
    <div class="qa-container">
      <h3>Pre-lesson Assessment</h3>
      <div class="qa-item">
        <div class="question">What is Flexbox?</div>
        <div class="answer">Flexbox is a CSS layout model optimized for designing complex layouts easily and predictably.</div>
      </div>
      <div class="qa-item">
        <div class="question">Why use Flexbox?</div>
        <div class="answer">It allows for alignment of elements in different directions and orders, and is responsive and adaptable.</div>
      </div>
      <!-- More Q&A items here -->
  </div>
</div>

<style>
  h2 {
    margin-bottom: 1rem;
    font-size: 3rem;
    font-weight: bold;
    color:#17375E;
  }
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

  h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
    color:#17375E;
  }

  .qa-container {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .qa-item {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
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
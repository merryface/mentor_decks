<script>
  import BriefAndAssessment from "$lib/components/BriefAndAssessment.svelte";

  import placeholder from '$lib/assets/placeholder.png'
  const assessmentQuestions = [
    {
      question: "What is Flexbox?",
      answer: "Flexbox is a CSS layout model optimized for designing complex layouts easily and predictably."
    },
    {
      question: "Why use Flexbox?",
      answer: "It allows for alignment of elements in different directions and orders, and is responsive and adaptable."
    },
  ]
</script>

<h2>Lesson Deck Card</h2>
<BriefAndAssessment image={placeholder} assessmentQuestions={assessmentQuestions}/>

<style>
  h2 {
    margin-bottom: 1rem;
    font-size: 3rem;
    font-weight: bold;
    color:#17375E;
  }
</style>



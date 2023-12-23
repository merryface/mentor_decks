
import placeholder from '$lib/assets/placeholder.png'

export let demoDeckCard = {
  image: placeholder,
  assessmentQuestions: [
    {
      question: "What is Flexbox?",
      answer: "Flexbox is a CSS layout model optimized for designing complex layouts easily and predictably."
    },
    {
      question: "Why use Flexbox?",
      answer: "It allows for alignment of elements in different directions and orders, and is responsive and adaptable."
    },
  ],
  exercises: [
    {
      title: "Exercise Title",
      exerciseItems: [
        {
          item: "Item 1",
          criteria: "Criteria to accomplish exercise item 1 to assessment standards",
        },
        {
          item: "Item 2",
          criteria: "Criteria to accomplish exercise item 2 to assessment standards",
        },
        {
          item: "Item 3",
          criteria: "Criteria to accomplish exercise item 2 to assessment standards",
        }
      ]
    },
    {
      title: "Exercise Title 2",
      exerciseItems: [
        {
          item: "Item 1",
          criteria: "Criteria to accomplish exercise item 1 to assessment standards",
        },
        {
          item: "Item 2",
          criteria: "Criteria to accomplish exercise item 2 to assessment standards",
        },
        {
          item: "Item 3",
          criteria: "Criteria to accomplish exercise item 2 to assessment standards",
        }
      ]
    }
  ]
}
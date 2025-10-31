import {correctAnswerSelectors, wrongAnswerSelectors, freeResponseAnswers} from './answers.js'

const scoreElement = document.querySelector('#score')

// Add event listeners to all correct elements
correctAnswerSelectors.forEach(selector => {
  document.querySelectorAll(selector).forEach(element => {
    element.addEventListener('click', () => {
      element.classList.add('right')
      updateScore()
    })
  })
})

// Add event listeners to all incorrect elements
wrongAnswerSelectors.forEach(selector => {
  document.querySelectorAll(selector).forEach(element => {
    element.addEventListener('click', () => {
      element.classList.add('wrong')
    })
  })
})

// Add listeners to input elements in questions
Object.entries(freeResponseAnswers).forEach(([id, answers]) => {
  const question = document.querySelector(`.question#${id}`)
  const input = question?.querySelector('input')

  if (!input) return

  input.addEventListener('input', () => {
    const value = input.value.trim().toLowerCase()

    // Check if input matches any correct answer
    if (answers.includes(value)) {
      input.classList.add('right')
      input.classList.remove('wrong')
    } else {
      input.classList.remove('right')
      input.classList.add('wrong')
    }

    updateScore()
  })
})

// Update correct counter
function updateScore() {
  // Count elements with .right class
  const numCorrect = document.querySelectorAll('.right').length
  // Count total questions
  const numQuestions = document.querySelectorAll('.question').length
  // Get percentage
  const percentCorrect = calculatePercentage(numCorrect, numQuestions)

  // Set score in score element
  scoreElement.innerText = `Score: ${percentCorrect}%`
}

function calculatePercentage(
  part,
  total
) {
  // Calculate percentage and round
  return Math.ceil((part/total) * 100)
}

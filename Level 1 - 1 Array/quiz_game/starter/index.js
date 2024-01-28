let quizQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["A. Berlin", "B. Paris", "C. Madrid", "D. Rome"],
    correctAnswer: "B. Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["A. Mars", "B. Venus", "C. Jupiter", "D. Saturn"],
    correctAnswer: "A. Mars",
  },
  {
    id: 3,
    question: "What is the largest mammal?",
    options: ["A. Elephant", "B. Blue Whale", "C. Giraffe", "D. Hippopotamus"],
    correctAnswer: "B. Blue Whale",
  },
];

let currentScore = 0; // CURRENT SCORE OF THE PLAYER
let currentQuestionIndex = 0; // CURRENT QUESTION THAT IS BEING ATTEMPTED BY THE PLAYER
/**
// Problem 1:
// Create a function that displays the current question and options to the user
// TEST CASES:
// displayQuestion() -> {id: 1,
    question: "What is the capital of France?",
    options: ["A. Berlin", "B. Paris", "C. Madrid", "D. Rome"]} <DO NOT GIVE ANSWER>

// Problem 2:
// Create a function that checks if the user's selected option is the correct answer
// Update the score accordingly
// TEST CASES:
// selectOption('A') -> Incorrect! Please try again
// selectOption('B') -> Very Good! <increase currentScore by 1>

// Problem 3:
// Create a function that moves to the next question
// If there are no more questions, end the game and display the final score
// TEST CASES:
// nextQuestion() -> increases currentQuestionIndex by 1 and then call displayQuestion()
// incase this is the last question: nextQuestion() -> Final Score: #
 */

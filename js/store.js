'use strict';

// store quiz
const quiz = {
  quizTitle: "Let's get quizzical",
  quizContent: {
    intro: "This text is an introduction for the quiz",
    questions: [{
      question: "What is the meaning of life?",
      answers: [{
        answer: "42",
        isCorrect: true
      }, {
        answer: "42",
        isCorrect: false
      }, {
        answer: "29",
        isCorrect: false
      }, {
        answer: "50",
        isCorrect: false
      }, {
        answer: "93",
        isCorrect: false
      }],
    }, {
      question: "Why am I building this?",
      answers: [{
        answer: "sunitha told me to",
        isCorrect: true
      }, {
        answer: "sunitha told me to",
        isCorrect: true
      }, {
        answer: "sunitha told me to",
        isCorrect: true
      }, {
        answer: "sunitha told me to",
        isCorrect: true
      }, {
        answer: "sunitha told me to",
        isCorrect: true
      }, {
        answer: "sunitha told me to",
        isCorrect: true
      }]
    }],
    outro: "this dynamic text is thanking you for doing the quiz"
  }
};

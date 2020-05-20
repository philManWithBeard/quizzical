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
      question: "Which of these plays was written by Arthur Miller?",
      answers: [{
        answer: "The Birthday Party",
        isCorrect: false
      }, {
        answer: "Cat on a Hot Tin Roof",
        isCorrect: false
      }, {
        answer: "Waiting for Godot",
        isCorrect: false
      }, {
        answer: "Death of a Salesman",
        isCorrect: true
      }]
    }, {
      question: "Who wrote the Sun Also Rises about an American expatriate journalist who travels from Paris to Pamplona, Spain, to observe the running of the bulls?",
      answers: [{
        answer: "F. Scott Fitzgerald",
        isCorrect: false
      }, {
        answer: "Ernest Hemingway",
        isCorrect: true
      }, {
        answer: "Tennessee Williams",
        isCorrect: false
      }, {
        answer: "Jake Barnes",
        isCorrect: false
      }]
    }, {
      question: "Which of the following works has not won a Pulitzer Prize?",
      answers: [{
        answer: "Harvey by Mary Chase",
        isCorrect: false
      }, {
        answer: "The Age of Innocence by Edith Wharton",
        isCorrect: false
      }, {
        answer: "To Kill a Mockinbird by Harper Lee",
        isCorrect: false
      }, {
        answer: "A Rose for Emily by William Faulkner",
        isCorrect: true
      }]
    }, {
      question: "In Crime and Punishment, why does Raskalnikov kill Lizaveta?",
      answers: [{
        answer: "She defends the pawnbroker",
        isCorrect: false
      }, {
        answer: "She represents bourgeois society",
        isCorrect: false
      }, {
        answer: "She disturbs him while he commits the murder",
        isCorrect: true
      }, {
        answer: "She strikes at him with a pair of sewing needles",
        isCorrect: false
      }]
    }],
    outro: 'this dynamic text is thanking you for doing the quiz'
  }
}

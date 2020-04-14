'use strict';

// store quiz
const quizContent = {
  intro: "this dynamic text is introducing you to the quiz",
  questions: [{
    question: "what is the meaning of life",
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
    question: "why am I building this?",
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
};

// Renders the quiz to the page
function paginate() {
  console.log(Object.keys(quizContent).length);
}

function questionNumber() {
  console.log('questionNumber: ran');
}

function totalQuestions() {
  console.log('totalQuestions: ran');
}

function runTheQuiz() {
  paginate();
  questionNumber();
  totalQuestions();
}

$(runTheQuiz);

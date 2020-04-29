'use strict';

let pageNumber = 0;
let questionNumber = 0;
let quizLength = (quiz.quizContent.questions.length * 2) + 1;
let score = 0;
let answer = null;


function handleButton() {
  answer = false;
  $("#quizForm").submit(function(event) {
    event.preventDefault();
    $.each($("input[name='answer']:checked"), function() {
      answer = $(this).val();

    });
    if (!answer && pageNumber >= 1){

    } else {
      console.log(answer);
    incrementPage();
    }
  });
}

function checkAnswer() {
  let rightAnswer = quiz.quizContent.questions[questionNumber].answers.find(element => element.isCorrect == true);
  if (answer == rightAnswer.answer) {
    score += 1;
    $(".happyFace").addClass('animate');
  } else if (pageNumber < 1) {
    console.log("quiz page")
  } else if (!answer) {
    console.log("no answer")
  } else {
    $(".sadFace").addClass('animate');
    console.log(`you got the wrong answer`);
  }
}

function incrementPage() {
  pageNumber += 1
  chooseContent();
}

function incrementQuestion() {
  questionNumber += 1
}

function chooseContent() {
  if (pageNumber == 0) {
    displayIntro();
    console.log(pageNumber);
  } else if (pageNumber == quizLength) {
    displayOutro();
        console.log(pageNumber);
  } else if ((pageNumber - 1) % 2 == 0) {
    displayQuestions();
    displayAnswers();
        console.log(pageNumber);
  } else {
    checkAnswer();
    displayResults();
        console.log(pageNumber);
  }
}

function displayIntro() {
  $(".quizTitle").html(quiz.quizTitle);
  $(".score").html(`${score} / ${quiz.quizContent.questions.length}`);
  $(".quizIntro").html(quiz.quizContent.intro);
  $(".questionNumber").html(`There are ${quiz.quizContent.questions.length} questions in this quiz`);
  $(".submit").prop('value', 'Start');
}

function displayQuestions() {
  $(".quizIntro").hide();
  $(".scoreBox").show();
  $(".quizTitle").hide();
  $(".questionNumber").hide();
  $(".score").html(`${score} / ${quiz.quizContent.questions.length}`);
  $(".question").html(quiz.quizContent.questions[questionNumber].question);
  $(".happyFace").removeClass('animate');
  $(".sadFace").removeClass('animate');
}

function displayAnswers() {
  let answerThing = quiz.quizContent.questions[questionNumber].answers.reduce((result, item, index) => {
    result += `<input type="radio" id="${index}" name="answer" value="${item.answer}">
    <label for="${index}">${item.answer}</label>`;
    return result;
  }, '');;
  answerThing += `
  <input class="submit" type="submit" value="Submit">`;
  $("#quizForm").html(answerThing);
  answer = null;
}

function displayResults() {
  $(".score").html(`${score} / ${quiz.quizContent.questions.length}`);
  $(".submit").prop('value', 'Next Question');
  incrementQuestion();
}

function displayOutro() {
  $(".quizTitle").show();
  $(".quizTitle").html("The End");
  $(".quizIntro").show();
  $(".quizIntro").html(quiz.quizContent.outro);
  $(".questionNumber").html(`You scored X out of ${quiz.quizContent.questions.length} questions in this quiz`);
  $(".score").html(`${score} / ${quiz.quizContent.questions.length}`);
  $(".question").html("");
  $("#quizForm").html(`<form action="./404.html" id="quizForm">
      <input class="submit" type="submit" value="Restart">
    </form>`);
  pageNumber = -1;
  questionNumber = 0;
  score = 0;
  answer = null;
}

function runTheQuiz() {
  handleButton();
  chooseContent();
}

$(runTheQuiz);

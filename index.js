//make sure to use .html() instead of .append() or anything else
import {STORE} from "/datastore.js";
//sets the question and score values to 0 to later be updated when functions are called
let questionIndex = 0;
let scoreCount = 0;

function createQuestion() {
  //here write an if statement? that generates the html string literal template for the form and use the current STORE index to get the current question and answers
  if (questionIndex < STORE.length) {
    return `<div class="question">
    <form>
    <fieldset class="answers">
    <legend>${STORE[questionIndex].question}</legend>
    <label class="answerSelect" for="${STORE[questionIndex].answers[0]}">
    <input type="radio" id="${STORE[questionIndex].answers[0]}" value="${STORE[questionIndex].answers[0]}" name="answer" required>
    <span>${STORE[questionIndex].answers[0]}</span>
    </label>
    <label class="answerSelect" for="${STORE[questionIndex].answers[1]}">
    <input type="radio" id="${STORE[questionIndex].answers[1]}" value="${STORE[questionIndex].answers[1]}" name="answer" required>
    <span>${STORE[questionIndex].answers[1]}</span>
    </label>
    <label class="answerSelect for="${STORE[questionIndex].answers[2]}"">
    <input type="radio" id="${STORE[questionIndex].answers[2]}" value="${STORE[questionIndex].answers[2]}" name="answer" required>
    <span>${STORE[questionIndex].answers[2]}</span>
    </label>
    <label class="answerSelect for="${STORE[questionIndex].answers[3]}"">
    <input type="radio" id="${STORE[questionIndex].answers[3]}" value="${STORE[questionIndex].answers[3]}" name="answer" required>
    <span>${STORE[questionIndex].answers[3]}</span>
    </label>
    </fieldset>
    <button type="submit" class="btn btn-submit" role="button">Submit</button>
    </form>
    </div>`;
  } else {
    //once all questions have been iterated through in the STORE array, call the generateResults function to update the html to show the results based on their score
    generateResults();
  };
};

function generateQuestion() {
  //when this function is called, update the html using the createQuestion function
  $('.quizForm').html(createQuestion());
};

function updateQuestionIndex() {
  //function with the intention of moving on to the next question upon completion
  questionIndex++;
  $('.questionIndex').text(questionIndex);
};

function startQuiz() {
  //removes the start quiz elements on the page and unhides the quiz form once you click the "Start" button
  $('.btn-start').click(function (event) {
    $('.startQuiz').remove();
    $('.quizForm').css('display', 'flex');
  });
};

function restartQuizListener() {
  //when the restart button is clicked, immediately reload page
  $('.quizForm').click('.btn-restart', function (event) {
    //reload method in javascript
    location.reload();
  });
};

function selectedAnswer() {
  //identifies which radio button is selected
  //identifies if the answer selected was correct or incorrect
  //updates score and generates the next question
  $('form').on('submit', function (event) {
    event.preventDefault();
    //passes the value of a checked radio button to the 'selected' variable
    let selected = $('input:checked');
    //passes the value to the 'answer' variable
    let answer = selected.val();
    let correctAnswer = `${STORE[questionIndex].correctAnswer}`;
    //if the answer matches the correct answer in the STORE array, update the score counter and update the scoreCount text in the DOM
    if (answer === correctAnswer) {
      selectedCorrectAnswer();
    } else {
      selectedWrongAnswer();
    }
    updateQuestionIndex();
    nextQuestion();
  });
};

function nextQuestion() {
  //when the "Next" button is clicked, generate the next question
  $('.quizForm').on('click', '.btn-next', function (event){
    generateNextQuestion();
  });
};

function selectedCorrectAnswer() {
  //passes correct answer value in STORE array into the correctAnswer variable
  let correctAnswer = `${STORE[questionIndex].correctAnswer}`;
  //updates score count in function and DOM
  scoreCount ++;
  $('.scoreCount').text(scoreCount);
  //updates html to provide answer feedback when this function is called
  $('.quizForm').html(`<div class="question answer-correct"><h3>You got it right! The answer is:</h3><br><span>"${correctAnswer}"</span><br><button type="button" class="btn btn-next" role="button">Next</button></div>`);
  nextQuestion();
};

function selectedWrongAnswer() {
  //same as selectedCorrectAnswer, but provides feedback for wrong answers
  let correctAnswer = `${STORE[questionIndex].correctAnswer}`;

  $('.quizForm').html(`<div class="question answer-wrong"><h3>You got the wrong answer! The correct answer is:</h3><br><span>"${correctAnswer}"</span><button type="button" class="btn btn-next" role ="button">Next</button></div>`);
  nextQuestion();
};

function generateResults() {
  //if score >= 8, output:"Great job! You seem to know your stuff"
  //else if score > 5, score <= 7, output: "You're so close! Go back to studying and try again"
  //else output: "Ouch! Looks like you could use another study review"
  //use .html() to update the DOM to just have  the final output with css classes generated
  //restartQuiz loaded so the restart button will work
  restartQuizListener();
  if (scoreCount >= 7) {
    $('.quizForm').html(`<div class="result highScore"><h3>Great Job! It seems you have more than what it takes to be a developer.</h3><button class="btn btn-restart" role="button">Restart Quiz</button></div>`)
  } else if ( scoreCount <= 6 && scoreCount > 4) {
    $('.quizForm').html(`<div class="result midScore"><h3>So close! Looks like you need to study and try again.</h3><button class="btn btn-restart" role="button">Restart Quiz</button></div>`)
  } else {
    $('.quizForm').html(`<div class="result lowScore"><h3>Ouch! Looks like you need to study quite a bit and try again. Don't worry, you'll get there in no time!</h3><button class="btn btn-restart" role="button">Restart Quiz</button></div>`)
  }
};

function generateNextQuestion() {
  //when radio button is clicked, update the question index in the STORE array and generate the next question
    generateQuestion();
    selectedAnswer();
};

function renderQuiz() {
  //calls the functions necessary to run the app
  startQuiz();
  generateQuestion();
  selectedAnswer();
};

$(renderQuiz);

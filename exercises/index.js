const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function quizTemplate(){

}

function viewResult(){

}

quizTemplate();

submitButton.addEventListener('click', showResults);

const exercises = [
   {
      question: "What is the sample space for choosing an odd number from 1 to 11 at random?",
      answers: {
         a: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11",
         b: "{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}",
         c: "{1, 3, 5, 7, 9 11}",
         d: "None of the above"
      },
      correctAnswer: "c"
   },
   {
      question: "What is the sample space for choosing a prime number less than 15 at random?",
      answers: {
         a: "{2, 3, 5, 7, 11, 13, 15}",
         b: "{2, 3, 5, 7, 11, 13}",
         c: "{2, 3, 5, 7, 9, 11, 13}",
         d: "All of the above"
      },
      correctAnswer: "c"
   },
   {
      question: "What is the sample space for choosing 1 jelly bean at random from a jar containing 5 red, 7 blue and 2 green jelly beans?",
      answers: {
         a: "{5, 7, 2}",
         b: "{5 red, 7 blue, 2 green}",
         c: "{red, blue, green}",
         d: "None of the above"
      },
      correctAnswer: "d"
   },
   {
      question: //continue

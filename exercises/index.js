const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");

let paginationSlide = 0;

const exercises = [
   {
      question: "1.  What is the sample space for choosing an odd number from 1 to 11 at random?",
      answers: {
         a: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11",
         b: "{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}",
         c: "{1, 3, 5, 7, 9 11}",
         d: "None of the above"
      },
      correctAnswer: "c"
   },
   {
      question: "2.  What is the sample space for choosing a prime number less than 15 at random?",
      answers: {
         a: "{2, 3, 5, 7, 11, 13, 15}",
         b: "{2, 3, 5, 7, 11, 13}",
         c: "{2, 3, 5, 7, 9, 11, 13}",
         d: "All of the above"
      },
      correctAnswer: "c"
   },
   {
      question: "3.  What is the sample space for choosing 1 jelly bean at random from a jar containing 5 red, 7 blue and 2 green jelly beans?",
      answers: {
         a: "{5, 7, 2}",
         b: "{5 red, 7 blue, 2 green}",
         c: "{red, blue, green}",
         d: "None of the above"
      },
      correctAnswer: "d"
   },
   {
      question: "4.  What is the sample space for choosing 1 letter at random from 5 vowels?",
      answers: {
         a: "{a, e, i, o, u}",
         b: "{v, o, w, e, l}",
         c: "{1, 2, 3, 4, 5}",
         d: "None of the above"
      },
      correctAnswer: "a"
   },
   {
      question: "5.  What is the sample space for choosing 1 letter at random from the word DIVIDE?",
      answers: {
         a: "{d, i, v, i, d, e}",
         b: "{1, 2, 3, 4, 5, 6}",
         c: "{d, i, v, e}",
         d: "None of the above",
      },
      correctAnswer: "a"
   }
   ]

function quizTemplate(){
   const output = [];
   
   exercises.forEach(
      (currentQuestion, questionNumber) => {
         
         const answers = [];
         
         for (letter in currentQuestion.answers) {
            
            answers.push (
               <label>
                  <input type = "radio" name = "question${questionNumber}" value = "${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
               </label>
            );
         }
         
       output.push(
        `<div class = "slide">
         <div class="question"> ${currentQuestion.question} </div>
         <div class="answers"> ${answers.join('')} </div>
         </div>`
       );
      }
     );
   
   quizContainer.innerHTML = output.join('');

}

function viewResult(){

   const answerContainers = quizContainer.querySelectorAll('.answers');
   
   let correctAns = 0;
   
   exercises.forEach( (currentQuestion, questionNumber) => {
      
      const answerContainer = answerContainers[questionNumber];
      const selector = 'input[name=question'+questionNumber+']:checked';
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
      if(userAnswer===currentQuestion.correctAnswer) {
         correctAns++;   
         
         answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else {
         answerContainers[questionNumber].style.color = 'red';
      } 
   }
  );
   
   resultsContainer.innerHTML = correctAns + ' out of ' + exercises.length;
}

function showSlide(n) {
   
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    paginationSlide = n;
   
    if(currentSlide===0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
   
    if(currentSlide===slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
}

function showNextSlide() {
   showSlide(currentSlide + 1);
}

function showPrevSlide() {
   showSlide(currentSlide - 1);
}

quizTemplate();
showSlide(0);
previousButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);
submitButton.addEventListener('click', showResults);

/* var exercisesPage = [
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
   ];
  
  
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('result');
var submitButton = document.getElementById('submit');

function generateQuiz (exercisesPage, quizContainer, resultsContainer, submitButton)
{
	function showQuestions (questions, quizContainer)
	{
		var output = []
		var answers;
		
		for (var i = 0; i < questions; i++)
		{
			answers = [];
			
			for (letter in questions[i].answers)
			{
				answers.push
				(
					'<label>' + '<input type = "radio" name = "question' + i + '" value = "' + letter + '">'
					+ letter + ': ' + questions[i].answers[letter] + '</label>'
					
				);
				
			}
			output.push
			(
				'<div class = "question">' + questions[i].question + '</div>' + '<div class = "answers">'
				+ answers.join('') + '</div>'
				
			);
			
		}
		quizContainer.innerHTML = output.join('');
		
	} // questions function
	
	function showResults (questions, quizContainer, resultsContainer)
	{
		var quizAnswers = quizContainer.querySelectorAll('.answers');
		var userAnswers = '';
		var correctAnswers = 0;
		
		for (var i = 0; i < questions.length; i++)
		{
			userAnswers = (quizAnswers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			if (userAnswers === questions[i].correctAnswers)
			{
				correctAnswers++;
				
				quizAnswers[i].style.color = 'lightgreen';
				
			}
			else
			{
				quizAnswers[i].style.color = 'red';
				
			}
			
		}
		showQuestions (questions, quizContainer);
		
		submitButton.onclick = function(){showResults(questions, quizContainer, resultsContainer);}
		
	} //results function
	
	
} */

var pos = 0, quiz, question, choice, choices, chA, chB, chC, chD, correctAns = 0;
var questions = [
	["what is 10 + 4?", "1", "2", "3", "14", "D"],
	["what is 5 + 1?", "14", "13", "6", "5", "C"],
	["what is 1 + 2?", "3", "5", "1", "2", "A"],
	["what is 5 + 5?", "9", "10", "11", "12", "B"],
	["what is 3 + 2?", "6", "4", "5", "1", "C"],
];

function _(x)
{
	return document.getElementById(x);
}

function renderQuestion()
{
	quiz = _("quiz");
	if(pos >= questions.length){
		quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		pos = 0;
		correct = 0;
		return false;
	}
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	quiz.innerHTML = "<h3>"+question+"</h3>";
	quiz.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	quiz.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	quiz.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
	
}

function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
	}
	pos++;
	renderQuestion();
}

window.addEventListener("load", renderQuestion, false);

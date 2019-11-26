var exercisesPage = [
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
	
	
}


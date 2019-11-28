//ginawa ko na lang array yung answers niyo since sure naman na 4 lang ang choices and mas madali kasi mag-iterate sa irray compared kung naka-object siya.
var exercisesPage = [
    {
      question: "1.  What is the sample space for choosing an odd number from 1 to 11 at random?",
      answers: [
         "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11",
         "{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}",
         "{1, 3, 5, 7, 9 11}",
         "None of the above"
      ],
      correctAnswer: "c"
   },
   {
      question: "2.  What is the sample space for choosing a prime number less than 15 at random?",
      answers: [
         "{2, 3, 5, 7, 11, 13, 15}",
         "{2, 3, 5, 7, 11, 13}",
         "{2, 3, 5, 7, 9, 11, 13}",
         "All of the above"
      ],
      correctAnswer: "c"
   },
   {
      question: "3.  What is the sample space for choosing 1 jelly bean at random from a jar containing 5 red, 7 blue and 2 green jelly beans?",
      answers: [
        "{5, 7, 2}",
        "{5 red, 7 blue, 2 green}",
        "{red, blue, green}",
        "None of the above"
      ],
      correctAnswer: "d"
   },
   {
      question: "4.  What is the sample space for choosing 1 letter at random from 5 vowels?",
      answers: [
        "{a, e, i, o, u}",
        "{v, o, w, e, l}",
        "{1, 2, 3, 4, 5}",
        "None of the above"
      ],
      correctAnswer: "a"
   },
   {
      question: "5.  What is the sample space for choosing 1 letter at random from the word DIVIDE?",
      answers: [
        "{d, i, v, i, d, e}",
        "{1, 2, 3, 4, 5, 6}",
        "{d, i, v, e}",
        "None of the above",
      ],
      correctAnswer: "a"
   } 
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('result');
var submitButton = document.getElementById('submit');

var questionNumber = 0;

function showQuestions(direction)
{
	var index;
	
	//inaalam niya lang kung ano sa previous or next button yung naclick
	//kung next, edi iterate tayo sa next element or index
	//kung previous, edi ataras lang tayo ng isang element or index
	if(direction === 'next') {
		index = this.questionNumber++;
	}
	else if(direction === 'previous'){
		index = this.questionNumber--;
	}
	else {
		index = this.questionNumber;
	}
	
	//error handling kapag nasa last question na siya. 
	//kung gusto mo na babalik siya from question 1, then equate om lang yung this.questionNumber to 0 uli
	if(index >= 5) {
		return;
	}
	
	//kunin mo sa exercisesPage array mo yung question
	var question = this.exercisesPage[index];
	
	var output = []
	var answers = [];
	
	//para lang to sa pagdidisplay nung question number
	var i = 0;
	
	for (letter of question.answers)
	{
		answers.push
		(
			'<label>' + '<input type = "radio" name = "question' + i++ + '" value = "' + letter + '">'
			+ letter + ' ' + '</label>'
			
		);
		
	}
	
	output.push
	(
		'<div class="question">' + question.question + '</div>'
		+ '<div class="answers">' + answers.join('') + '</div>'
		
	);
	
	
	quizContainer.innerHTML = output.join('');
	
} // questions function

function showResults()
{
	var questions = this.exercisesPage[this.questionNumber];
	
	var quizAnswers = this.quizContainer.querySelectorAll('.answers');
	
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
		this.resultsContainer.innerHTML = correctAnswers + ' out of ' + questions.length;
	}
	
	//submitButton.onclick = function(){showResults(questions, quizContainer, resultsContainer);}
	
} //results function

function generateQuiz (index)
{	
	showQuestions (questions);
}

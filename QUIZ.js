 

 const questions=[

  {
    question: "What is the Capital of Sri lanka ?",
    answers:[
      {text:"Kandy",correct:false},
      {text:"Colombo",correct:true},
      {text:"Jaffna",correct:false},
      {text:"Galle",correct:false},
    ] 
  },

  {
    question: "Which planet is known as the Red Planet ?",
    answers:[
      {text:"Jupiter",correct:false},
      {text:"Mars",correct:true},
      {text:"Venus",correct:false},
      {text:"Earth",correct:false},
    ]
  },

  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers:[
      {text:"Charles Dickens",correct:false},
      {text:"Mark Twain",correct:false},
      {text:"William Shakespeare",correct:true},
      {text:"Jane",correct:false},
    ]
  },

  {
    question: "What is the largest mammal on Earth?",
    answers:[
      {text:"Giraffe",correct:false},
      {text:"Hippopotamus",correct:false},
      {text:"Blue whale",correct:true},
      {text:"African Elephant",correct:false},
    ]
  },

  {
    question: "Which is the longest river in the world?",
    answers:[
      {text:"Amazon River",correct:false},
      {text:"Nile River",correct:true},
      {text:"Yangtze River",correct:false},
      {text:"Mississippi River",correct:false},
    ]
  },

  {
    question: "Who was the first person to step on the Moon?",
    answers:[
      {text:"Yuri Gagarin",correct:false},
      {text:"Neil Armstrong",correct:true},
      {text:"Michael Collins",correct:false},
      {text:"Buzz Aldrin",correct:false},
    ]
  },

  {
    question: "What is the chemical symbol for gold?",
    answers:[
      {text:"Ag",correct:false},
      {text:"Pb",correct:false},
      {text:"Fe",correct:false},
      {text:"Au",correct:true},
    ]
  },

  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers:[
      {text:"Japan",correct:true},
      {text:"China",correct:false},
      {text:"South Korea",correct:false},
      {text:"Thailand",correct:false},
    ]
  },

  {
    question: "What is the smallest unit of life?",
    answers:[
      {text:"Atom",correct:false},
      {text:"Cell",correct:true},
      {text:"Organ",correct:false},
      {text:"Molecule",correct:false},
    ]
  },

  {
    question: "Which gas do plants primarily use during photosynthesis?",
    answers:[
      {text:"Oxygen",correct:false},
      {text:"Carbon Dioxide",correct:true},
      {text:"Nitrogeb",correct:false},
      {text:"Hydrogen",correct:false},
    ]
  }

];

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1 ;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.
  question;



currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }


    button.addEventListener("click",selectAnswer)
});

}


function resetState(){
  nextButton.style.display = "none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild)
  }

}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";

}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";

}



function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}


nextButton.addEventListener("click",()=>{

  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }

});

startQuiz();


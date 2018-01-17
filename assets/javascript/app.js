// create variables for game
var position = 0;
var correctAnswer = 0;
var trivia;
var trivia_status;
var question;
var userSelectedChoice;
var choices;
var choiceA;
var choiceB;
var choiceC;
// create a multimentional array of ..questions [index:0] along with the Choice A[index:1], Choice B [index:2], Choice C [index:3] and answer [index:4] for game
var questions =[
  ["What two jersey numbers did Kobe Bryant wear?" , "8 & 24", "10 & 30", "34 & 23", "A" ],
  ["What number did Micheal Jordan wear?" , "37", "23", "45", "B"],
  ["Who is the NBA all time scoring leader?", "Kobe Bryant", "Micheal Jordan", "Karrem Abdual Jabar", "C"],
  ["Who won more MVP awards?", "Steve Nash", "Kobe Bryant", "Allen Iverson", "A"  ],
  ["What year did LeBron James win his first NBA title in Cleveland?", "2015", "2013", "2011", "A"]
];
function triviaReturn(x){
  return document.getElementById(x);
};
function formulateQuestion(){
        trivia = triviaReturn("trivia_question");
        if(position >= questions.length){
          trivia_question.innerHTML = "<h2> You got "+correctAnswer+" of "+ questions.length+" questions correct!</h2>";
          triviaReturn("trivia_progress").innerHTML= "Final Score!";
          position = 0;
          correctAnswer = 0;
          return false;
        }
        triviaReturn("trivia_progress").innerHTML = "Question " +(position+1)+" of "+questions.length;
        question = questions[position][0];
        choiceA = questions[position][1];
        choiceB = questions[position][2];
        choiceC = questions[position][3];
        trivia_question.innerHTML = "<h3>"+question+"</h3>";
        trivia_question.innerHTML += "<input type='radio' name ='choices' value = 'A'> "+choiceA+"<br>";
        trivia_question.innerHTML += "<input type='radio' name ='choices' value = 'B'> "+choiceB+"<br>";
        trivia_question.innerHTML += "<input type='radio' name ='choices' value = 'C'> "+choiceC+"<br>";
        trivia_question.innerHTML += "<button onclick= 'checkAnswer()'> Submit Answer </button>";
        if(position >= question.length){
          trivia_question.innerHTML = "<h2> You got "+correctAnswer+" of "+question.length+"question correct!</h2>"}
};
function checkAnswer(){
  choices = document.getElementsByName('choices');
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }
  if (choice == questions[position][4]){
    correctAnswer++;
  }
  position++;
  formulateQuestion();
};


//https://stackoverflow.com/questions/4435776/simple-clock-that-counts-down-from-30-seconds-and-executes-a-function-afterward?rq=1
var timeLeft = 30;
var elem = document.getElementById('trivia_timer');
var timerId = setInterval(countdown, 1000);
function countdown() {
  if (timeLeft == 0) {
    trivia_question.innerHTML = "<h2> You got "+correctAnswer+" of "+ questions.length+" questions correct!</h2>";
      triviaReturn("trivia_progress").innerHTML= "Final Score!";
      position = 0;
      correctAnswer = 0;
      return false;
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
    //alert("Hello! I am an alert box!!");
  }
};



window.addEventListener("load", formulateQuestion, false)

// variables
const start = document.querySelector('.start');
const answer = document.querySelectorAll('.answer');
const question = document.querySelector('.question');
const quiz = document.querySelectorAll('.quiz');
const timer = document.getElementById("timer");
const background = document.querySelector("body");
const final = document.getElementById("final");
const slow = document.getElementById("slow");
let j = 0;
let countdown = 10;
let correctAnswers = 0;
slow.classList.add("hidden");
check();

//start button hide
start.addEventListener('click', e => {
  start.classList.add("hidden");
  quiz[j].classList.remove("hidden");
  
  time(); 
})


// answer selection
function check() {for(let i = 0; i < answer.length; i++){
answer[i].addEventListener('click', e => {
    const element = e.target;
    
    if(element.classList.contains("right")) {
        element.style.backgroundColor = "lightgreen";
        correctAnswers += 1;
        console.log(correctAnswers)
        element.innerHTML = "Correct";
        setTimeout(hide, 1000);
        
        
    }  else if( element.classList.contains("wrong")){
        element.style.backgroundColor = "red";
        element.innerHTML = "Wrong";
        setTimeout(hide, 1000);;
    }
}) 
}
}
console.log(check)
// hides question after answering and shows next question.
function hide() {
  countdown = 10
  slow.classList.add("hidden");
  background.style.backgroundColor = "white";
  timer.innerHTML = countdown
  
    quiz[j].classList.add("hidden");
    j++;
    quiz[j].classList.remove("hidden"); 
    console.log(j)
    time();
 
}

//
let x;
function time() {
  countdown = 10;
  
  clearInterval(x);
   x = setInterval(function (){
    
    timer.innerHTML = countdown;
    countdown --;
    if(countdown < 0 ) {
      clearInterval(x);
      countdown = 10;
      background.style.backgroundColor = "red";
      
      timer.innerHTML = "Too Slow!";
      setTimeout(hide, 1000);
      
      
    }  else if (j == 10) {
        
      final.innerHTML = "You have " + correctAnswers + " correct";
      timer.classList.add("hidden");
      clearInterval(x);
    }
     
    

  }, 1000);
}
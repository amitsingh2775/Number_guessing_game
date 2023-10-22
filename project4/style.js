// guess a number game
// first gernate random number
// yah 1 se 100 tak random number dega isme hamne 100 se mulntiply
// kar diye hai taki do digit left jump kar jaye
// ex- random num-0.2434354 after * random  num ex=23.43435 
// or hame 1to 100 chahiye so +1 kar diya yah ab 1 to 100 dega
let randomNumber= parseInt(Math.random()*100+1);

// parseInt() yah value ko integer me convert karta hai
// ex- 26.3344  , parseInt(26.3344); => 26 Ansdega

// select kiya hu submit button ko becz operation lagana hai
const submit=document.querySelector('#subt');

// input field select kya taki user se input le sake
const userInput=document.querySelector('#guessField');

// guess slot hai jaha per user ko diplay hoga ki wah kitne number or kon kon se numbeer choose kuiya hai
const guessSlot=document.querySelector('.guesses');

// remaing kitna atemet bacha hai
const remaining=document.querySelector('.lastResult');

const lowOrHigh=document.querySelector('.lowOrHi');
// for message ke liye ki tumhara time over now start begingig
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

// isme ham user ka guesses ko store karenge or user ko 
// dikha denge 
let prevGuess=[];

// number of guesses jo batyaega ki user kitna time guess kiya hai

let numOfGuess=1;

let playGame=true;
 

 if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        vaildateGuess(guess);
    });
 }
// function for vailidetd guesses actualy value vaild hai ya na
function vaildateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a vaild number');
  }
  else if(guess<1){
    alert('please enter a grater then 1 number');
  }
  else if(guess>100){
    alert('please enter a less then equal 100 number');
  }
  else{
    prevGuess.push(guess);
    if(numOfGuess===11){
        displayguess(guess);
        displayMessage(`Game over!! Random number was  ${randomNumber}`);
        endGame();
    }
    else{
        displayguess(guess);
        checkGuess(guess);
    }
  }
}

// agar user value guess value ke equal hai to
// diplay message ke throwgh dikha denge ki user jit gya hai
function checkGuess(guess){
 if(guess===randomNumber){
    displayMessage(`you are correct`);
    endGame();
 }
 else if(guess<randomNumber){
    displayMessage(`number is TOOO.. Low!!..`);

 }
 else if(guessrandomNumber){
    displayMessage(`number is TOOO.. High!!..`);

 }
}

function displayguess(guess){
 userInput.value='';
 guessSlot.innerHTML+=`${guess}   `;
 numOfGuess++;
 remaining.innerHTML=`${10-numOfGuess}`;


}

function displayMessage(message){
  lowOrHigh.innerHTML=`<h2>${message}</h2>`;
}



function endGame(){
 userInput.value='';
 userInput.setAttribute('disabled','');
 p.classList.add('button');
 p.innerHTML=`<h2 id="newGame">Start new Game!</h2>`;

 startOver.appendChild(p);
 playGame=false;
 newGame();

}

function newGame(){
  const newButton=document.querySelector('#newGame');
  newButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1);
    prevGuess=[];
    numOfGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${10-numOfGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p); 
    playGame=true;
  });
}
// Initialize variables  
const letters = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];  
let shuffledCards = [];  
let firstCard = null;  
let secondCard = null;  
let lockBoard = false;  
let matchedPairs = 0;  

// Create game board  
const gameBoard = document.getElementById('gameBoard');  

function shuffle(array) {  
  for (let i = array.length - 1; i > 0; i--) {  
    const j = Math.floor(Math.random() * (i + 1));  
    [array[i], array[j]] = [array[j], array[i]];  
  }  
  return array;  
}  

function createCards() {  
  shuffledCards = shuffle([...letters]);  
  for (let i = 0; i < shuffledCards.length; i++) {  
    const cardDiv = document.createElement('div');  
    cardDiv.className = 'card';  
    cardDiv.dataset.value = shuffledCards[i];  
    cardDiv.dataset.index = i;  
    cardDiv.innerText = ''; // Face down  
    cardDiv.addEventListener('click', flipCard);  
    gameBoard.appendChild(cardDiv);  
  }  
}  

function flipCard() {  
  if (lockBoard) return;  
  if (this.classList.contains('flipped') || this.classList.contains('match')) return;  

  this.classList.add('flipped');  
  this.innerText = this.dataset.value;  

  if (!firstCard) {  
    firstCard = this;  
    return;  
  }  

  secondCard = this;  
  checkForMatch();  
}  

function checkForMatch() {  
  if (firstCard.dataset.value === secondCard.dataset.value) {  
    // Match  
    firstCard.classList.add('match');  
    secondCard.classList.add('match');  
    resetTurn();  
    matchedPairs++;  
    if (matchedPairs === 8) {  
      document.getElementById('status').innerText = 'Congratulations! You found all pairs!';  
    }  
  } else {  
    // Not a match: flip back after 1 second  
    lockBoard = true;  
    setTimeout(() => {  
      firstCard.classList.remove('flipped');  
      secondCard.classList.remove('flipped');  
      firstCard.innerText = '';  
      secondCard.innerText = '';  
      resetTurn();  
      lockBoard = false;  
    }, 1000);  
  }  
}  

function resetTurn() {  
  firstCard = null;  
  secondCard = null;  
}  

// Initialize game  
createCards();  

// Optional: To restart game, refresh page or add a button  
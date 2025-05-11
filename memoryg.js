const gameBoard = document.getElementById('gameBoard');
const cards = ['😉', '😋', '😒', '😤', '🤓', '🤫', '🤩', '😁'];
let cardValues = [...cards, ...cards]; // create pairs
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
}

function createBoard() {
    const shuffled = shuffle(cardValues);
    shuffled.forEach(letter => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.letter = letter;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard || this === firstCard) return;

    this.textContent = this.dataset.letter;
    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.letter === secondCard.dataset.letter;

    if (isMatch) {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    } else {
        setTimeout(() => {
            firstCard.textContent = '';
            secondCard.textContent = '';
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetBoard();
        }, 1000);
    }
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

createBoard();

let moves = 0;
const moveCounter = document.getElementById('moveCounter');

function flipCard() {
    if (lockBoard || this === firstCard) return;

    this.textContent = this.dataset.letter;
    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    moves++;
    moveCounter.textContent = moves;

    checkForMatch();
}


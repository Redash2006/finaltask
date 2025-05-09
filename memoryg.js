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
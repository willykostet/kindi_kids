let cards = document.querySelectorAll('.memory-card');
// console.log(cards)

// function getRandom(arr) {
//     const pairs = [
//         [arr[0], arr[1]],
//         [arr[2], arr[3]],
//         [arr[4], arr[5]],
//         [arr[6], arr[7]],
//     ]
//     // remove random
//     const toRemoveIndex = Math.floor(Math.random()*pairs.length)
//     return pairs.filter((_, i) => i !== toRemoveIndex).flat()
// }

// cards = getRandom(cards);
// document.getElementsByClassName('game') = cards;
// console.log(cards);

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

// Add class .flip to chosen card 
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    lockBoard = true;

    checkForMatch ();
}
// Check for cards match 
function checkForMatch () {
    if (firstCard.dataset.advantage === secondCard.dataset.advantage) {
        finalCut();
        disableCards();
        return;
    }
    unflipCards();
    counter();
    lifesLeft();
}
// Disable cards 
function disableCards() {
    firstCard.removeEventListener('click', flipCard); 
    secondCard.removeEventListener('click',flipCard);
    resetBoard();
}
// Function to unflip cards 
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}
// Resetting board 
function resetBoard () {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
// Shuffle cards 
(function shuffle () {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random()*6);
        card.style.order = randomPosition;
    });
})();

// Showing advantage at final cut 
function finalCut () {
        if (firstCard.dataset.advantage === document.getElementsByClassName('clock-left')[0].dataset.advantage) {
            document.getElementsByClassName('game')[0].classList.add('animated', 'fadeOut');
            document.getElementsByClassName('text')[0].classList.add('animated', 'fadeOut');
            document.getElementsByClassName('clock')[0].style.display = 'inherit';
            document.getElementsByClassName('offer')[0].style.display = 'inherit';
            document.getElementsByClassName('cta-btn')[0].style.display = 'inherit';

        }
        else if (firstCard.dataset.advantage === document.getElementsByClassName('couch-left')[0].dataset.advantage) {
            document.getElementsByClassName('game')[0].classList.add('animated', 'fadeOut');
            document.getElementsByClassName('text')[0].classList.add('animated', 'fadeOut');
            document.getElementsByClassName('couch')[0].style.display = 'inherit';
            document.getElementsByClassName('offer')[0].style.display = 'inherit';
            document.getElementsByClassName('cta-btn')[0].style.display = 'inherit';

        }
        else if ( firstCard.dataset.advantage === document.getElementsByClassName('bag-left')[0].dataset.advantage) {
            document.getElementsByClassName('game')[0].classList.add('animated', 'fadeOut');
            document.getElementsByClassName('text')[0].classList.add('animated', 'fadeOut');
            document.getElementsByClassName('bag')[0].style.display = 'inherit';
            document.getElementsByClassName('offer')[0].style.display = 'inherit';
            document.getElementsByClassName('cta-btn')[0].style.display = 'inherit';

        }
        else if ( firstCard.dataset.advantage === document.getElementsByClassName('marsha-left')[0].dataset.advantage) {
            document.getElementsByClassName('game')[0].classList.add('animated', 'fadeOut');
            document.getElementsByClassName('text')[0].classList.add('animated', 'fadeOut');
            document.getElementsByClassName('marsha')[0].style.display = 'inherit';
            document.getElementsByClassName('offer')[0].style.display = 'inherit';
            document.getElementsByClassName('cta-btn')[0].style.display = 'inherit';

        }
}
// Counter 
function counter() {
    if (document.getElementsByClassName('counter')[0].innerHTML > 1){
        document.getElementsByClassName('counter')[0].innerHTML--;
    }

    else {
        document.getElementsByClassName('game')[0].classList.add('animated', 'fadeOut');
            document.getElementsByClassName('text')[0].classList.add('animated', 'fadeOut');
            document.getElementsByClassName('couch')[0].style.display = 'inherit';
            document.getElementsByClassName('offer')[0].style.display = 'inherit';
            document.getElementsByClassName('cta-btn')[0].style.display = 'inherit';

    }
}
// Changing попытки to  попытка
function lifesLeft() {
    if (document.getElementsByClassName('counter')[0].innerHTML === '1') {
        document.getElementsByClassName('multi')[0].style.display = 'none';
        document.getElementsByClassName('solo')[0].style.display = 'inherit';

    }
}

cards.forEach(card => card.addEventListener('click', flipCard));


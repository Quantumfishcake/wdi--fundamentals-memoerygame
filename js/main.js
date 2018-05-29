var cards = [
    {
        rank: 'queen',
        suit: 'hearts',
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: "images/king-of-diamonds.png"
    }
]
var cardsInPlay = []
var userScore = 0
var gamesPlayed = 0
//var shuffledArray = shuffle(cards)
function checkForMatch() {
    
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log('you found a match')
            alert('you found a match');
            userScore++
            gamesPlayed++
            document.getElementById("p1").innerHTML = 'User Score = ' + userScore + ' Games Played = ' + gamesPlayed;
            console.log(userScore)
        } else {
            console.log('sorry try again')
            alert('sorry try again')
            gamesPlayed++
            document.getElementById("p1").innerHTML = 'User Score = ' + userScore + ' Games Played = ' + gamesPlayed;
        }
    }
}

function flipCard() {
    var cardId = this.getAttribute('data-id')
    console.log('user flipped' + cards[cardId].rank)
    cardsInPlay.push(cards[cardId].rank)
    this.setAttribute('src', cards[cardId].cardImage)
    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].suit)
    checkForMatch()
}

function shuffle(cards) {
    for (var i = 0; i < cards.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (cards.length - i));

        var temp = cards[j];
        cards[j] = cards[i];
        cards[i] = temp;
    }
    return cards;
}

function createBoard() {

    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img')
        cardElement.setAttribute('src', 'images/back.png')
        cardElement.setAttribute('data-id', i)
        cardElement.addEventListener('click', flipCard)
        document.getElementById('game-board').appendChild(cardElement)
    }

}
function gameReset() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement2 = document.getElementsByTagName('img')[i]
        cardElement2.setAttribute('src', 'images/back.png')
        cardsInPlay = []
    }
    shuffle(cards)
}

createBoard()





console.log("Up and running!");


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
function checkForMatch() {
    
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log('you found a match')
            alert('you found a match');
            userScore++
            document.getElementById("p1").innerHTML = 'User Score = ' + userScore;
            console.log(userScore)
        } else {
            console.log('sorry try again')
            alert('sorry try again')
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
}




createBoard()


console.log(cardsInPlay)

/*var cardOne = cards[0]
var cardTwo = cards[2]
cardsInPlay.push(cardOne)
cardsInPlay.push(cardTwo)*/
/*if (cardsInPlay.length === 2) {
        if (cards[cardId].rank === cards[cardId].rank) {
            alert('you found a match');
        }
        else {
            alert('sorry try again')
        }
    }*/
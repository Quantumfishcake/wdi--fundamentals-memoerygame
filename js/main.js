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

function checkForMatch() {
    if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log('you found a match')
        alert('you found a match');
    } else {
        console.log('sorry try again')
        alert('sorry try again')
    }
}
}



function flipCard(cardId) {
    /*if (cardsInPlay.length === 2) {
        if (cards[cardId].rank === cards[cardId].rank) {
            alert('you found a match');
        }
        else {
            alert('sorry try again')
        }
    }*/
    console.log('user flipped' + cards[cardId].rank)
    cardsInPlay.push(cards[cardId].rank)
    
    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].suit)
    checkForMatch()
}
flipCard(0)
flipCard(1)




console.log(cardsInPlay)

/*var cardOne = cards[0]
var cardTwo = cards[2]
cardsInPlay.push(cardOne)
cardsInPlay.push(cardTwo)*/
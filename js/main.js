console.log("Up and running!");


var cards = ['queen', 'king', 'queen', 'king']
var cardsInPlay = []
var cardOne = cards[0]
var cardTwo = cards[2]
cardsInPlay.push(cardOne)
cardsInPlay.push(cardTwo)

if (cardsInPlay.length === 2) {
    if (cardOne === cardTwo) {
        alert('you found a match');
    }
    else {
            alert('sorry try again')
        }
    }


console.log(cardsInPlay)


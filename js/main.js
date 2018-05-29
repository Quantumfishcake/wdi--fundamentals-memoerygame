console.log("Up and running!");


var cards = ['queen', 'king', 'queen', 'king']
var cardsInPlay = []

function checkForMatch() {
    if(cardsInPlay[0]=== cardsInPlay[1]) {
        console.log('you found a match')
    } else {
        console.log('sorry try again')
    }
}



function flipCard(cardId) {
     if (cardsInPlay.length === 2) {
        if (cardOne === cardTwo) {
            alert('you found a match');
        }
        else {
            alert('sorry try again')
        }
    }
    console.log('user flipped' + cards[cardId])
    cardsInPlay.push(cards[cardId])
    checkForMatch()
}
flipCard(0)
flipCard(2)




console.log(cardsInPlay)

/*var cardOne = cards[0]
var cardTwo = cards[2]
cardsInPlay.push(cardOne)
cardsInPlay.push(cardTwo)*/
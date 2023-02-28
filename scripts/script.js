const FRONT = 'card-front'
const BACK = 'card-back'
const CARD = 'card'
const ICON = 'icon'

let techs = ['bootstrap',
             'css3',
             'docker',
             'git',
             'github',
             'html5',
             'javascript',
             'postgres',
             'rails',
             'rspec',
             'ruby',
             'sqlite']

let cards = null
startGame()

function startGame(){
  let cards = createCardsFromTechs(techs)
  shuffleCards(cards)
  initializeCards(cards)
}

function createCardsFromTechs(techs){
  let cards = []
  techs.forEach((tech) => {
    cards.push(createPairFromTech(tech))
  })
  return cards.flatMap(pair => pair)
}

function createPairFromTech(tech){
  return [
          {id: createIdForTech(tech),
           icon: tech,
           flipped: false},
          {id: createIdForTech(tech),
           icon: tech,
           flipped: false}
         ]
}

function createIdForTech(tech){
  return tech + parseInt(Math.random() * 1000)
}

function shuffleCards(cards){
  let currentIndex = cards.length
  let randomIndex = 0
  while(currentIndex !== 0){
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
  }
}

function initializeCards(cards){
  let gameBoard = document.querySelector('#game-board')
  cards.forEach((card) => {
    let cardElement = document.createElement('div')
    cardElement.id = card.id
    cardElement.classList.add(CARD)
    cardElement.dataset.icon = card.icon
    createCardContent(card, cardElement)
    cardElement.addEventListener('click', flipCard)
    gameBoard.appendChild(cardElement)
  })
}

function createCardContent(card, cardElement){
  createCardFace(FRONT, card, cardElement)
  createCardFace(BACK, card, cardElement)
}

function createCardFace(face, card, element){
  let cardElementFace = document.createElement('div')
  cardElementFace.classList.add(face)
  if(face === FRONT){
    let iconElement = document.createElement('img')
    iconElement.classList.add(ICON)
    iconElement.src = `./assets/images/${card.icon}.svg`
    cardElementFace.appendChild(iconElement)
  }else{
    cardElementFace.innerHTML = '&lt/&gt'
  }
  element.appendChild(cardElementFace)
}

function flipCard(){
  this.classList.add('flip')
}
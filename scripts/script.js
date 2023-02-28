const FRONT = 'card-front'
const BACK = 'card-back'

let techs = ['bootstrap',
             'css',
             'docker',
             'git',
             'github',
             'html',
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
  console.log(cards)
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

function createCardsFromTechs(techs){
  let cards = []
  for(let tech of techs){
    cards.push(createPairFromTech(tech))
  }
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
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

createCardsFromTechs(techs)
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
//DATA & VARIABLES
let rollResult;
//CACHE THE DOM
const display = document.querySelector('.display');
const roll = display.querySelector('.roll');
const diceAmount = display.querySelector('.amount');
const dice = document.querySelector('.dice');
const d100Button = dice.querySelector('.d100');
const d20Button = dice.querySelector('.d20');
const d12Button = dice.querySelector('.d12');
const d10Button = dice.querySelector('.d10');
const d8Button = dice.querySelector('.d8');
const d6Button = dice.querySelector('.d6');
const d4Button = dice.querySelector('.d4');
const d3Button = dice.querySelector('.d3');
const d2Button = dice.querySelector('.d2');
//ADD LISTENERS
window.addEventListener('keydown', enterKey)
d100Button.addEventListener('click', () => {randomRoll(100)});
d20Button.addEventListener('click', () => {randomRoll(20)});
d12Button.addEventListener('click', () => {randomRoll(12)});
d10Button.addEventListener('click', () => {randomRoll(10)});
d8Button.addEventListener('click', () => {randomRoll(8)});
d6Button.addEventListener('click', () => {randomRoll(6)});
d4Button.addEventListener('click', () => {randomRoll(4)});
d3Button.addEventListener('click', () => {randomRoll(3)});
d2Button.addEventListener('click', () => {randomRoll(2)});
//INITIALIZATION
render();
//FUNCTIONS
function randomRoll(sides) {
  rollResult = Math.floor(Math.random() * sides) + 1;
  render();
}

function render() {
  roll.textContent = rollResult;
}

function diceMultiplier() {
  let numberOfDice = input.diceAmount;
  if (numberOfDice > 1) {
    for (i = 0; i < numberOfDice; randomRoll()) {
      rollResult = rollResult + i;
      render();
    }
  } else {
    randomRoll();
    return
  }
}

function enterKey(event){
  if(event.keydown === 13){
    diceMultiplier()
  }
}

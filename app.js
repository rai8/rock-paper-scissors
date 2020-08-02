const gameChoices = ["rock", "paper", "scissors"]

function userPlay() {
  let input = prompt(`Rock, paper, or scissors`)
  let selection = input.trim().toLowerCase()
  return selection
}
//console.log(userPlay())

function computerPlay() {
  let compChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)]
  return compChoice
}
//console.log(computerPlay())

function singleGamePlay(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection === "scissors") ||
    (playerSelection == "paper" && computerSelection === "rock") ||
    (playerSelection == "scissors" && computerSelection === "paper")
  ) {
    return "win"
  } else if (
    (playerSelection == "rock" && computerSelection === "paper") ||
    (playerSelection == "paper" && computerSelection === "scissors") ||
    (playerSelection == "scissors" && computerSelection === "rock")
  ) {
    return "lose"
  } else {
    return "tie"
  }
}

function game() {
  let playerScore = 0
  let computerScore = 0

  for (let i = 0; i <= 4; i++) {
    let playerSelection = userPlay()
    let computerSelection = computerPlay()
    console.log(`You selected: ${playerSelection}`)
    console.log(`Computer selected: ${computerSelection}`)

    let resultOutput = singleGamePlay(playerSelection, computerSelection)

    if (resultOutput.includes("win", 3)) {
      playScore++
    } else {
      computerScore++
    }
  }

  if (playerScore < computerScore) {
    console.log("Ooopss !!! You have lost the game!!!")
  } else if (playerScore > computerScore) {
    console.log("Hurray !!! You have won the game !!!")
  } else {
    console.log("There has been a tie")
  }
}
game()

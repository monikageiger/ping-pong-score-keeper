let playerOne = document.querySelector("#playerOneScore")
let playerTwo = document.querySelector("#playerTwoScore")
console.log(playerOne)

// add one to player1 button
let buttonOne = document.querySelector("#plus1")
let score1 = 0
buttonOne.addEventListener("click", function () {
    score1 += 1;
    playerOne.innerHTML = score1;
    if (winnerCounter(score1)) {
        playerOne.style.color = "green";
        playerTwo.style.color = "red";
        buttonOne.disabled = true;
        buttonTwo.disabled = true;
    }
})

// add one to player2 button
let buttonTwo = document.querySelector("#plus2")
let score2 = 0
buttonTwo.addEventListener("click", function () {
    score2 += 1;
    playerTwo.innerHTML = score2;
    if (winnerCounter(score2)) {
        playerOne.style.color = "red";
        playerTwo.style.color = "green";
        buttonOne.disabled = true;
        buttonTwo.disabled = true;
    }

})

// reset button
let buttonThree = document.querySelector("#reset")
buttonThree.addEventListener("click", function () {
    score1 *= 0;
    score2 *= 0;
    playerOne.innerHTML = score1;
    playerTwo.innerHTML = score2;
    playerOne.style.color = "black";
    playerTwo.style.color = "black";
    buttonOne.disabled = false;
    buttonTwo.disabled = false;
})

// up to how many selector
let selector = document.querySelector("#selector")
console.log(selector.value)

function winnerCounter(score) {
    if (score == selector.value) {
        return true;

    }
}
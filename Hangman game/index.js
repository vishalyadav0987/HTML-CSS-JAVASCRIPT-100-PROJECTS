const keyBoard = document.querySelector(".keyboard");
const wordBox = document.querySelector(".word-box");
const hintElm = document.querySelector(".hint-text");
const hangmanImg = document.querySelector(".hangman");
const count = document.querySelector(".count");
const totalCount = document.querySelector(".total-count");
const sectionTwo = document.querySelector(".section-two");
const tag = document.querySelector(".tag");
const tag2 = document.querySelector(".tag2");
const points = document.querySelector(".points");
const winOrLossImg = document.querySelector(".container-game-over-card img");

let WrongCurrentScore = 0;
let totalScore = 6;
let currentWord;
let correctWordData = [];

for (let i = 97; i < 122; i++) {
    let button = document.createElement("button");
    button.innerHTML = String.fromCharCode(i);
    keyBoard.appendChild(button);

}
const getRandomQuestion = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word, hint);
    currentWord = word;
    hintElm.innerHTML = hint;
    wordBox.innerHTML = word.split("").map(() => ` <span></span>`).join("");
}

getRandomQuestion();
// console.log(currentWord);
console.log(totalScore);


const gameOver = (checkWinOrLoss) => {
    setTimeout(() => {
        tag.innerHTML = checkWinOrLoss ? "You win !! 🎉🎉" : "You Lost, Better Luck Next Time 😔";
        winOrLossImg.src = checkWinOrLoss ?  "images/victory.gif" : "images/lost.gif";
        tag2.innerHTML = checkWinOrLoss ? `<b>The correct word is: </b>${currentWord}`
            : `<b>The correct word is: </b>${currentWord}`
        points.innerHTML = `<b>Points: </b>${totalScore - WrongCurrentScore}`
        sectionTwo.classList.add("show");
        sectionTwo.classList.remove("hide");
    }, 300)
}




totalCount.innerHTML = totalScore;
const buttonPress = document.querySelectorAll("button");
buttonPress.forEach((curBtn) => {
    curBtn.addEventListener("click", (e) => {
        let pressData = e.target.textContent;
        if (currentWord.includes(pressData)) {
            [...currentWord].forEach((curWord, index) => {
                if (curWord === pressData) {
                    correctWordData.push(curWord);
                    wordBox.querySelectorAll("span")[index].innerHTML = curWord;
                }
            });
        }
        else {
            WrongCurrentScore++;
            hangmanImg.src = `images/hangman-${WrongCurrentScore}.svg`;
        }
        e.target.disabled = true;
        count.innerHTML = `${WrongCurrentScore}/`;

        if (WrongCurrentScore === totalScore) return gameOver(false);
        if (correctWordData.length === currentWord.length) return gameOver(true);

    });
});

document.querySelector(".play").addEventListener("click",()=>{
    location.reload();
})
const targetElement = document.querySelector(".container-1");
const bodyHeader = document.querySelector('.body-header');
const sectionOne = document.querySelector('.section-one');
const sectionTwo = document.querySelector('.section-two');
const continueBtn = document.querySelector('.continue-btn');
const arrCardLevel = [
    ["💦", "❤️", "❤️", "💦", "💧", "💧", "🍑", "🍑", "💰", "💰", "💀", "💀"],
    ["💦", "💦", "💧", "💧", "🍑", "🍑", "💀", "💀", "☠️", "☠️", "👻", "🤖", "💩", "🤢", "👻", "🤖", "💩", "🤢"],
    ["💦", "❤️", "❤️", "💦", "💧", "💧", "🍑", "🍑", "💰", "💰", "💀", "💀", "😎", "😎", "👽", "👽", "☠️", "☠️", "😈", "⭐", "🤌", "😈", "⭐", "🤌"],
];


const levelsArr = [
    { txt: "Level 3", card: "24 Cards", id: 3 },
    { txt: "Level 2", card: "18 Cards", id: 2 },
    { txt: "Level 1", card: "12 Cards", id: 1 },
];
const targetLevelElement = document.querySelector(".level-section");
targetLevelElement.innerHTML = "";
levelsArr.forEach((curElm) => {
    const html = `
    <div id="${curElm.id}" class="levels">
    <span class="level-text">${curElm.txt}</span>
    <span>${curElm.card}</span>
    </div>
    `;
    targetLevelElement.insertAdjacentHTML("afterbegin", html);
})
let arr = [];
const levels = document.querySelectorAll(".levels");
levels.forEach((curLevel) => {
    curLevel.addEventListener("click", (e) => {
        const levelId = event.target.id;
        if (+levelId === 1) {
            arr = arrCardLevel[0];
            bodyHeader.style.display = "";
            sectionOne.style.display = "";
            bodyHeader.style.display = "block";
            targetLevelElement.style.display = "none"
        }
        else if (+levelId === 2) {
            arr = arrCardLevel[1];
            bodyHeader.style.display = "";
            sectionOne.style.display = "";
            bodyHeader.style.display = "block";
            targetLevelElement.style.display = "none"
        }
        else if (+levelId === 3) {
            arr = arrCardLevel[2];
            bodyHeader.style.display = "";
            sectionOne.style.display = "";
            bodyHeader.style.display = "block";
            targetLevelElement.style.display = "none"
        }

        for (let i = arr.length - 1; i >= 0; i--) {
            let randomNo = Math.floor(Math.random() * (i + 1));
            // console.log(randomNo);
            [arr[i], arr[randomNo]] = [arr[randomNo], arr[i]];

        };
        console.log(arr);

        targetElement.innerHTML = "";
        arr.forEach((curElm) => {
            const html = `
    <div class="card"><span class="dummy-txt">M</span><span class="card-text hide">${curElm}</span><div class="card-overlay hide"></div></div>
    `
            targetElement.insertAdjacentHTML("afterbegin", html)
        });

        const flipedCard = document.querySelectorAll(".card");
        const dummyTxt = document.querySelectorAll(".dummy-txt");
        const cardTxt = document.querySelectorAll(".card-text");
        let clickCount = 0;
        let cardFirst;
        let cardSecond;
        let j, k;
        let score = 0;
        let totalTry = 0;
        let arrMatch = [];
        const resetGame = () => {
            cardFirst = "";
            cardSecond = "";
            clickCount = 0
        }


        const gamePlayFun = () => {
            flipedCard.forEach((curElm, i) => {
                curElm.addEventListener("click", (e) => {
                    let currentCard = event.target;
                    if (clickCount < 2) {
                        clickCount++;
                        if (clickCount === 1) {
                            j = i;
                            cardFirst = currentCard.children[1].textContent;
                            console.log(cardFirst);
                            curElm.style.transform = "rotateY(180deg)"
                            dummyTxt[i].innerHTML = "";
                            cardTxt[i].classList.remove("hide");
                            cardTxt[i].classList.add("show");
                            // console.log(clickCount);   
                        }
                        else {
                            k = i;
                            if (cardTxt[i].classList[1] === "show") {
                                clickCount = 1;
                            }
                            else {
                                cardSecond = currentCard.children[1].textContent;
                                console.log(cardSecond);
                                curElm.style.transform = "rotateY(180deg)"
                                dummyTxt[i].innerHTML = "";
                                cardTxt[i].classList.remove("hide");
                                cardTxt[i].classList.add("show");
                                console.log(clickCount);
                            }

                        }
                        if (cardFirst !== undefined && cardSecond !== undefined) {
                            if (cardFirst === cardSecond) {
                                score += 2;
                                totalTry++;
                                document.querySelector(".time-count").innerHTML = totalTry;
                                document.querySelector(".score-count").innerHTML = score;
                                console.log("yes");
                                flipedCard[j].style.visibility = "hidden";
                                flipedCard[k].style.visibility = "hidden";
                                arrMatch.push(flipedCard[j]);
                                arrMatch.push(flipedCard[k]);
                                checkAllCardFliped(arrMatch);
                                cardTxt.forEach((cur) => {
                                    if (cur.classList[1] === "show") {
                                        cur.parentElement.style.background = "rgba(0, 0, 0, 0.1)";
                                        cur.parentElement.style.opacity = "0.5"
                                    }
                                })
                                resetGame();
                            }
                            else {
                                if (cardFirst !== "" && cardSecond !== "") {
                                    console.log(cardFirst, cardSecond);
                                    if (cardFirst !== cardSecond) {
                                        totalTry++;
                                        document.querySelector(".time-count").innerHTML = totalTry;
                                        setTimeout(() => {
                                            curElm.style.transform = "rotateY(-180deg)"
                                            dummyTxt[j].innerHTML = "M";
                                            cardTxt[j].classList.add("hide");
                                            cardTxt[j].classList.remove("show");
                                            // curElm.style.transform = "rotateY(-180deg)"
                                            dummyTxt[k].innerHTML = "M";
                                            cardTxt[k].classList.add("hide");
                                            cardTxt[k].classList.remove("show");
                                            resetGame();
                                        }, 1000)
                                    }

                                }

                            }
                        }

                    }
                })
            })
        }
        gamePlayFun();


        const scoreText = document.querySelector('.score-text');
        const moves = document.querySelector('.moves');
        const grade = document.querySelector('.grade');
        const overlay = document.querySelector('.overlay');
        const checkAllCardFliped = (arrMatch) => {
            if (arr.length === arrMatch.length) {
                setTimeout(() => {
                    sectionTwo.style.display = "block";
                    sectionOne.style.display = "none";
                    bodyHeader.style.visibility = "hidden";
                    scoreText.innerHTML = score;
                    moves.innerHTML = totalTry;
                    if (totalTry <= 15) {
                        grade.innerHTML = "Brilliant!";
                        grade.style.background = "#FF8E8F";
                        showHide();
                    }
                    else if (totalTry > 15 && totalTry <= 20) {
                        grade.innerHTML = "Super!";
                        grade.style.background = "#5F5D9C";
                        showHide();
                    }
                    else if (totalTry > 20 && totalTry <= 25) {
                        grade.innerHTML = "Excellent!";
                        grade.style.background = "#F7418F";
                        showHide();
                    }
                    else {
                        grade.innerHTML = "Good";
                        grade.style.background = "#6196A6";
                        showHide();
                    }
                }, 1000)
            }
        }

        const showHide = () => {
            overlay.classList.remove("hide");
            overlay.classList.add("show");
        }


        continueBtn.addEventListener("click",()=>{
            location.reload();
            
        })

    })
})







let rock = document.getElementById("rock");
let scissor = document.getElementById("scissor");
let paper = document.getElementById("paper");
let gameImg = document.getElementById("game-img");
let gameImg2 = document.getElementById("game-img-2");
let gameImg2A = document.querySelector(".random-player img")
let mainPlayer = document.querySelector(".main-player");
let randomPlayer = document.querySelector(".random-player");
let handsImgsBox = document.querySelector(".hands-imgs-box");
// console.log(gameImg.scr);

let shakeFunc = () => {
    handsImgsBox.style.animation = "shake 0.5s cubic-bezier(.36,.07,.19,.97) infinite";
}

let shakeFuncUpper = () => {
    handsImgsBox.style.animation = "shakeUpper 2s cubic-bezier(.36,.07,.19,.97) infinite";
} 
let randomNumber = () => {
    return (Math.round((Math.random() * 2)) + 1);

}
let randomNo = randomNumber();
console.log(randomNo);

let timmer = document.querySelector(".timmer");
let num = 3;
console.log(timmer);

let randomPlayerFunc = () => {

    gameImg2.src = `/JavaScriptProjects/Rock Paper Scissors/game-${randomNo}.png`;
    randomPlayer.classList.toggle("show-left");
}

let timer;
let ok;

let btn = document.querySelector(".btn");
timmer.innerHTML = "Let's Go...";
btn.disabled = true;

rock.addEventListener("click", () => {
    console.log("ok");
    btn.disabled = false;
    mainPlayer.classList.toggle("show-right");
    gameImg.src = `/JavaScriptProjects/Rock Paper Scissors/game-1.png`;
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
    randomPlayerFunc();
    if (randomNo === 1) {
        timmer.innerHTML = "Match Tied";
        shakeFuncUpper(); 
    }
    else if (randomNo === 3) {
        timmer.innerHTML = "Loading.."
        timer = setInterval(() => {
            timmer.innerHTML = "You Won";
            gameImg.style.width = "200%";
            gameImg.style.height = "600px";
            mainPlayer.style.zIndex = "7";
            randomPlayer.style.zIndex = "5";
            shakeFunc();
        }, 500)

    }
    else {
        timmer.innerHTML = "Loading.."
        timer = setInterval(() => {
            timmer.innerHTML = "You loose";
            gameImg2.style.width = "200%";
            gameImg2.style.height = "600px";
            mainPlayer.style.zIndex = "5";
            randomPlayer.style.zIndex = "7";
            shakeFunc();
        }, 500)
    }
});

scissor.addEventListener("click", () => {
    btn.disabled = false;
    console.log("ok");
    mainPlayer.classList.toggle("show-right");
    gameImg.src = `/JavaScriptProjects/Rock Paper Scissors/game-3.png`;
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
    randomPlayerFunc();
    if (randomNo === 3) {
        timmer.innerHTML = "Match Tied";
        shakeFuncUpper(); 
    }
    else if (randomNo === 2) {
        timmer.innerHTML = "Loading..";
        timer = setInterval(() => {
            timmer.innerHTML = "You Won";
            gameImg.style.width = "200%";
            gameImg.style.height = "600px";
            mainPlayer.style.zIndex = "7";
            randomPlayer.style.zIndex = "5";
            shakeFunc();
        }, 500)
    }
    else {
        timmer.innerHTML = "Loading..";
        timer = setInterval(() => {
            timmer.innerHTML = "You loose";
            gameImg2.style.width = "200%";
            gameImg2.style.height = "600px";
            mainPlayer.style.zIndex = "5";
            randomPlayer.style.zIndex = "7";
            shakeFunc();
        }, 500)
    }
});
paper.addEventListener("click", () => {
    btn.disabled = false;
    console.log("ok");
    mainPlayer.classList.toggle("show-right");
    gameImg.src = `/JavaScriptProjects/Rock Paper Scissors/game-2.png`;
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
    randomPlayerFunc();
    if (randomNo === 2) {
        timmer.innerHTML = "Match Tied";
        shakeFuncUpper(); 
    }
    else if (randomNo === 1) {
        timmer.innerHTML = "Loading..";
        timer = setInterval(() => {
            timmer.innerHTML = "You Won";
            gameImg.style.width = "200%";
            gameImg.style.height = "600px";
            mainPlayer.style.zIndex = "7";
            randomPlayer.style.zIndex = "5";
            shakeFunc();
        }, 500)
    }
    else {
        timmer.innerHTML = "Loading..";
        timer = setInterval(() => {
            timmer.innerHTML = "You loose";
            gameImg2.style.width = "200%";
            gameImg2.style.height = "600px";
            mainPlayer.style.zIndex = "5";
            randomPlayer.style.zIndex = "7";
            shakeFunc();
        }, 500)
    }
});


btn.addEventListener("click", () => {
    timmer.innerHTML = "Let's Go...";
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
    randomNo = randomNumber();
    mainPlayer.classList.toggle("show-right");
    randomPlayer.classList.toggle("show-left");
    clearInterval(timer);
    gameImg2.style.width = "95%";
    gameImg2.style.height = "438px";
    gameImg.style.width = "90%";
    gameImg.style.height = "438px";
    mainPlayer.style.zIndex = "7";
    randomPlayer.style.zIndex = "5";
    btn.disabled = true;
})




const boxes = document.querySelectorAll(".boxes");
const line = document.querySelectorAll(".line");



const sectionTwo = document.querySelector(".section-two");
const tag = document.querySelector(".tag");
const tag2 = document.querySelector(".tag2");
const points = document.querySelector(".points");
const winOrLossImg = document.querySelector(".container-game-over-card img");


console.log(line[0]);


let you = true;
let computer = false;
let temp;
let count = 0;

const winningConditions = [
    // Rows
    [0, 1, 2],  // 18% top
    [3, 4, 5],   // top 49%
    [6, 7, 8],  // top 80%
    // Columns
    [0, 3, 6],  //     top: 50%; left: 31%  rotee 90deg
    [1, 4, 7],   //  rotate 90   top: 50%; left: -31%;
    [2, 5, 8],  // rotate 90deg top 50%
    // Diagonals
    [0, 4, 8],   //     transform: rotate(45deg); top: 50%; left: -53px; width : 137%
    [2, 4, 6]
];
let a = 0;
let b = 0;
boxes.forEach((curBox) => {
    curBox.addEventListener("click", () => {
        if (you) {
            curBox.innerHTML = "X";
            curBox.style.color = "#fff";
            boxes.forEach((curBorder) => {
                curBorder.classList.remove("border");
            });
            curBox.classList.add("border");
            temp = computer;
            computer = you;
            you = temp;
            a++;
            curBox.style.pointerEvents = "none";
            // curBox.style.opacity = "0.6"
            // checkDraw();
            count++;

        }
        else if (computer) {
            curBox.innerHTML = "0";
            curBox.style.color = "#1777ff";
            boxes.forEach((curBorder) => {
                curBorder.classList.remove("border");
            });
            curBox.classList.add("border");
            temp = computer;
            computer = you;
            you = temp;
            b++;
            curBox.style.pointerEvents = "none";
            // checkDraw();
            count++;
        }
        console.log(event.target.id, event.target.textContent);
        checkWin();

    });

});

const checkWin = () => {
    for (let condn of winningConditions) {
        // console.log(condn);
        // console.log(boxes[condn[0]],boxes[condn[1]],boxes[condn[2]]);
        let firstVal = boxes[condn[0]].textContent;
        let secondVal = boxes[condn[1]].textContent;
        let thirdVal = boxes[condn[2]].textContent;
        if (firstVal !== "" && secondVal !== "" && thirdVal !== "") {
            if (firstVal === secondVal && secondVal === thirdVal) {
                console.log("Winner", secondVal);
                boxes.forEach((allBox) => {
                    allBox.style.pointerEvents = "none";
                    sectionTwo.classList.remove("show");
                    sectionTwo.classList.add("hide");
                    setTimeout(() => {
                        points.innerHTML = `<b>${secondVal}</b>`
                        sectionTwo.classList.remove("hide");
                        sectionTwo.classList.add("show");
                        tag.innerHTML = `<b>${"Congrulation!!! you win 🎉🎉"}</b>`
                        tag2.innerHTML = `<b>${secondVal}</b> is win :)`;
                       
                    }, 500);
                })
                lineThrough(condn[0], condn[1], condn[2]);
                break;
            }


        }
        for (let cod of winningConditions) {
            let firstVal = boxes[condn[0]].textContent;
            let secondVal = boxes[condn[1]].textContent;
            let thirdVal = boxes[condn[2]].textContent;
            if (firstVal !== "" && secondVal !== "" && thirdVal !== "") {
               if(count === 9){
                if ((firstVal !== secondVal && secondVal !== thirdVal)) {
                    points.innerHTML = `<b>${"Draw"}</b>`
                    sectionTwo.classList.remove("hide");
                    sectionTwo.classList.add("show");
                    tag.innerHTML = `<b>${"Computer === You"}</b>`
                    tag2.innerHTML = `<b>${"Try again!! game is draw 🤌"}</b>`

                }
               }
            }
        }
    }

}

const lineFun = (a, b, c, t, l, r, h, w) => {
    for (let condn of winningConditions) {
        if (condn[0] === a && condn[1] === b && condn[2] === c) {
            line[0].classList.remove("hide");
            line[0].classList.add("show");
            line[0].style.top = `${t}`;
            line[0].style.left = `${l}`;
            line[0].style.transform = `rotate(${r}deg)`;
            line[0].style.height = `${h}px`;
            line[0].style.width = `${w}`;
        }
    }
}
const lineThrough = (a, b, c) => {

    if (a === 0 && b === 1 && c === 2) {
        lineFun(a, b, c, "18%", "0%", "0", "2", "100%");
    }
    else if (a === 3 && b === 4 && c === 5) {
        lineFun(a, b, c, "49%", "0%", "0", "2", "100%");
    }
    else if (a === 6 && b === 7 && c === 8) {
        lineFun(a, b, c, "80%", "0%", "0", "2", "100%");
    }
    // colos
    else if (a === 0 && b === 3 && c === 6) {
        lineFun(a, b, c, "50%", "-31%", "90", "2", "100%");
    }
    else if (a === 1 && b === 4 && c === 7) {
        lineFun(a, b, c, "50%", "0%", "90", "2", "100%");
    }
    else if (a === 2 && b === 5 && c === 8) {
        lineFun(a, b, c, "50%", "31%", "90", "2", "100%");
    }
    // digonal
    else if (a === 0 && b === 4 && c === 8) {
        lineFun(a, b, c, "50%", "-53px", "45", "2", "137%");
    }
    else if (a === 2 && b === 4 && c === 6) {
        lineFun(a, b, c, "50%", "-19%", "-45", "2", "138%");
    }

}

// const checkDraw = () => {
//     count++;
//     if (count === 9) {
//         console.log("draw");
//         // points.innerHTML = `<b>${"Draw"}</b>`
//         // sectionTwo.classList.remove("hide");
//         // sectionTwo.classList.add("show");
//         // tag.innerHTML = `<b>${"Computer === You"}</b>`
//         // tag2.innerHTML = `<b>${"Try again!! game is draw 🤌"}</b>`
//     }
// }


document.querySelector(".play").addEventListener("click", () => {
    location.reload();
});
document.querySelector("#reset").addEventListener("click", () => {
    location.reload();
});




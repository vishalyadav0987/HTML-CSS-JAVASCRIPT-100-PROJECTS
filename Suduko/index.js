function generateUniqueRandomNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    return numbers;
}

const uniqueNumbers = generateUniqueRandomNumbers();

const randomNo = (randomNumber, id) => {
    const usedNumbers = new Set();
    for (let i = 0; i < randomNumber; i++) {
        let randomNumberCol;
        do {
            randomNumberCol = Math.floor(Math.random() * 9) + 1;
        } while (usedNumbers.has(randomNumberCol));
        usedNumbers.add(randomNumberCol);
        document.querySelector(`#${id + randomNumberCol}`).innerHTML = uniqueNumbers[i];

    }
}

randomNo(4, "r900");
randomNo(3, "r800");
randomNo(6, "r700");
randomNo(3, "r600");
randomNo(7, "r500");
randomNo(2, "r400");
randomNo(3, "r300");
randomNo(3, "r200");
randomNo(4, "r100");



for (let i = 1; i < 10; i++) {
    let usedNumbers = new Set();
    for (let j = 1; j < 10; j++) {
        let cellContent = document.querySelector(`#r${j}00${i}`).textContent;
        if (cellContent !== "") {
            if (usedNumbers.has(cellContent)) {
                let uniqueNumber;
                do {

                } while (usedNumbers.has(uniqueNumber));
                document.querySelector(`#r${j}00${i}`).textContent = uniqueNumber;

            } else {
                usedNumbers.add(cellContent);

            }
        }
    }
}
let allArr = [];
const checkAllRowAndCol = () => {
    for (let i = 9; i > 0; i--) {
        let arr = [];
        for (let j = 9; j > 0; j--) {
            let cellId = `r${i}00${j}`;
            let cellContent = document.getElementById(cellId).textContent.trim();
            if (cellContent !== "") {
                arr.push(+cellContent);
            }
            else {
                arr.push(0)
            }
        }
        // console.log(arr);
        allArr.push(arr);
    }
}
checkAllRowAndCol();

// console.log(allArr);

// Define the validation function
function isSudokuValid(grid) {
    for (let i = 0; i < 9; i++) {
        let rowSet = new Set();
        let colSet = new Set();
        for (let j = 0; j < 9; j++) {
            if (rowSet.has(grid[i][j]) || colSet.has(grid[j][i])) {
                return false;
            }
            if (grid[i][j] !== 0) rowSet.add(grid[i][j]);
            if (grid[j][i] !== 0) colSet.add(grid[j][i]);
        }
    }
    return true;
}

console.log(isSudokuValid(allArr));
let check;
let boxP;
// Check if Sudoku grid is valid
document.querySelectorAll(".box").forEach((curBox) => {
    allArr = [];
    curBox.addEventListener("click", () => {
        // console.log(curBox);
        boxP = curBox;
        curBox.contentEditable = true;
        curBox.focus();

    })
})
document.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (!clickedElement.classList.contains('box') && !clickedElement.closest('.box')) {
        // If the click occurred outside of any box, make all boxes non-editable
        document.querySelectorAll(".box").forEach(box => {
            box.contentEditable = false;
            allArr = [];
        });

        console.log(Number.isInteger(+boxP.textContent));

        if (!Number.isInteger(+boxP.textContent) || (+boxP.textContent < 1 || +boxP.textContent > 10)) {
            boxP.innerHTML = "";
        }
        checkAllRowAndCol();
        // console.log(allArr);
        check = isSudokuValid(allArr);
        console.log(check);
        highlightInvalidBoxes(check, boxP.id);
    }
});


const highlightInvalidBoxes = (isValid, id) => {
    document.querySelectorAll(".box").forEach((box) => {
        if (!isValid) {
            document.getElementById(`${id}`).style.background = "red";

        } else {
            document.getElementById(`${id}`).style.background = "aqua";
        }
    });
};

let count1 = 0;
let count2 = 0;
let count3 = 0;

const coloring = (count, col1, col2, col3, id) => {
    if (count < 10) {
        document.getElementById(`${id}`).style.background = col1;
    }
    else if (count > 9 && count < 19) {
        document.getElementById(`${id}`).style.background = col2;
    }
    else {
        document.getElementById(`${id}`).style.background = col3;
    }
}
document.querySelectorAll(".box").forEach((curBox) => {

    if (+curBox.id[4] === 1 || +curBox.id[4] === 2 || +curBox.id[4] === 3) {
        // console.log(curBox.id);
        count1++;
        coloring(count1, "yellow", "blue", "green", curBox.id);
    }
    if (+curBox.id[4] === 4 || +curBox.id[4] === 5 || +curBox.id[4] === 6) {
        // console.log(curBox.id);
        count2++;
        coloring(count2, "green", "yellow", "blue", curBox.id);
    }
    if (+curBox.id[4] === 7 || +curBox.id[4] === 8 || +curBox.id[4] === 9) {
        // console.log(curBox.id);
        count3++;
        coloring(count3, "yellow", "blue", "green", curBox.id);
    }

});
// let count4 = 0;
// let count5 = 0;
// let count6 = 0;
// let usedNumbers1 = new Set();
// let usedNumbers2 = new Set();
// let usedNumbers3 = new Set();
// let usedNumbers4 = new Set();
// let usedNumbers5 = new Set();
// let usedNumbers6 = new Set();
// let usedNumbers7 = new Set();
// let usedNumbers8 = new Set();
// let usedNumbers9 = new Set();


// const checkAndUpdateCell = (setA, id) => {
//     let cellContent1 = document.getElementById(`${id}`).textContent;
//     if (cellContent1 !== "") {
//         if (!setA.has(cellContent1)) {
//             setA.add(cellContent1);

//         }
//         else {
//             let uniqueNumber1;
//             do {
//                 // uniqueNumber1 = Math.floor(Math.random() * 9) + 1;
//             } while (setA.has(uniqueNumber1));
//             document.getElementById(`${id}`).textContent = uniqueNumber1;
//             setA.add(uniqueNumber1);
//             //  document.querySelector(`${id}`).style.pointerEvents = "none";
//             // document.querySelector(`${id}`).style.background = "blueviolet";
//         }
//     }
// }

// // // Loop through .box elements
// document.querySelectorAll(".box").forEach((curBox) => {
//     const lastDigit = +curBox.id[4];
//     if (lastDigit >= 1 && lastDigit <= 3) {
//         count4++;
//         if (count4 < 10) {
//             checkAndUpdateCell(usedNumbers1, curBox.id);
//         } else if (count4 < 19) {
//             checkAndUpdateCell(usedNumbers2, curBox.id);
//         } else {
//             checkAndUpdateCell(usedNumbers3, curBox.id);
//         }
//     } else if (lastDigit >= 4 && lastDigit <= 6) {
//         count5++;
//         if (count5 < 10) {
//             checkAndUpdateCell(usedNumbers4, curBox.id);
//         } else if (count5 < 19) {
//             checkAndUpdateCell(usedNumbers5, curBox.id);
//         } else {
//             checkAndUpdateCell(usedNumbers6, curBox.id);
//         }
//     } else if (lastDigit >= 7 && lastDigit <= 9) {
//         count6++;
//         if (count6 < 10) {
//             checkAndUpdateCell(usedNumbers7, curBox.id);
//         } else if (count6 < 19) {
//             checkAndUpdateCell(usedNumbers8, curBox.id);
//         } else {
//             checkAndUpdateCell(usedNumbers9, curBox.id);
//         }
//     }
// });  


let usedNumbers = Array.from({ length: 9 }, () => new Set());
let count = Array.from({ length: 9 }, () => 0);

const checkAndUpdateCell = (set, id) => {
    let cellContent = document.getElementById(id).textContent;
        if (cellContent !== "") {
            if (set.has(cellContent)) {
                let uniqueNumber;
                do {

                } while (set.has(uniqueNumber));
                document.getElementById(id).textContent = uniqueNumber;

            } else {
                set.add(cellContent);
                document.getElementById(id).style.background = "blueviolet" 
                document.getElementById(id).style.pointerEvents = "none" 

            }
        }
}

document.querySelectorAll(".box").forEach((curBox) => {
    const lastDigit = +curBox.id[4];
    const index = Math.floor((lastDigit - 1) / 3);
    count[index]++;
    const setIndex = count[index] <= 9 ? index * 3 : (index * 3) + 1;
    checkAndUpdateCell(usedNumbers[setIndex], curBox.id);
});

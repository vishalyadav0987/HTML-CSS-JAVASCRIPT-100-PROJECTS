const allowDrop = (event) => {
    event.preventDefault();
}

const drag = (event) => {
    event.dataTransfer.setData("text/plain", "insider");
}
const drag2 = (event) => {
    event.dataTransfer.setData("text/plain", "insider2");
}
const drag3 = (event) => {
    event.dataTransfer.setData("text/plain", "insider3");
}
const drag4 = (event) => {
    event.dataTransfer.setData("text/plain", "insider4");
}
const drag5 = (event) => {
    event.dataTransfer.setData("text/plain", "insider5");
}
const drag6 = (event) => {
    event.dataTransfer.setData("text/plain", "insider6");
}
const drag7 = (event) => {
    event.dataTransfer.setData("text/plain", "insider7");
}
const drag8 = (event) => {
    event.dataTransfer.setData("text/plain", "insider8");
}
const drag9 = (event) => {
    event.dataTransfer.setData("text/plain", "insider9");
}
const drag10 = (event) => {
    event.dataTransfer.setData("text/plain", "insider10");
}
const drag11 = (event) => {
    event.dataTransfer.setData("text/plain", "insider11");
}
const drag12 = (event) => {
    event.dataTransfer.setData("text/plain", "insider12");
}
const drag13 = (event) => {
    event.dataTransfer.setData("text/plain", "insider13");
}
const drag14 = (event) => {
    event.dataTransfer.setData("text/plain", "insider14");
}
const drag15 = (event) => {
    event.dataTransfer.setData("text/plain", "insider15");
}

const drop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.querySelector(`.${data}`);
    const dropArea = event.target;

    dropArea.appendChild(draggedElement);
}

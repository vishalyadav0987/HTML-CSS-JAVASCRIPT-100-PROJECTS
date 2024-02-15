const hsl = document.querySelectorAll(".value");
// console.log(hsl[0]);
const range = document.querySelectorAll("input");
console.log(range[0].value);
let box = document.getElementById("box");
console.log(box);

const shadowValue = document.querySelectorAll(".value-of-shadow p");
console.log(shadowValue);

range.forEach((curElm, i) => {
    curElm.addEventListener("input", (e) => {
        document.querySelector(".copied-text").innerHTML = "Copy";
        let color = range[4].value;
        let hslValue = e.target.value;
        let hslValue1 = Number(hslValue);
        hsl[i].innerHTML = `${hslValue1}px`;
        box.style.boxShadow = `${hsl[0].textContent} ${hsl[1].textContent} ${hsl[2].textContent} ${hsl[3].textContent} ${color}`;
        shadowValue[0].innerHTML = `box-shadow:${hsl[0].textContent} ${hsl[1].textContent} ${hsl[2].textContent} ${hsl[3].textContent} ${range[4].value}`;
        shadowValue[1].innerHTML = `-webkit-box-shadow:${hsl[0].textContent} ${hsl[1].textContent} ${hsl[2].textContent} ${hsl[3].textContent} ${range[4].value}`;
        shadowValue[2].innerHTML = `-moz-box-shadow:${hsl[0].textContent} ${hsl[1].textContent} ${hsl[2].textContent} ${hsl[3].textContent} ${range[4].value}`;
        // console.log(`${range[4].value}`);

    });
});

document.querySelector(".copied-text").addEventListener("click", () => {
    let copyText = document.querySelector(".value-of-shadow").innerHTML;
    var textarea = document.createElement('textarea');
    textarea.value = copyText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    document.querySelector(".copied-text").innerHTML = "copied"
})



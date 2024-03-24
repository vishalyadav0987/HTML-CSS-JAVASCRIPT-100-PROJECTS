const colorPickerBtn = document.getElementById('color-picker-btn');
const pickedColorDb = JSON.parse(localStorage.getItem("pickedColorArr") || "[]");
const targetElment = document.querySelector(".color-box");
const containData = document.querySelector(".contain-data");
const clearColorData = document.querySelector(".clear-color");
const hr = document.querySelector("hr");

const showPickedColor = () => {
    targetElment.innerHTML = "";
    colorPickerBtn.style.marginBottom = "1.6rem";
    containData.classList.remove("hide");
    containData.classList.add("show");
    hr.classList.remove("hide");
    hr.classList.add("show");
    pickedColorDb.forEach(element => {
        const html = ` <span class="color-1" style="background-color: ${element};" data-content="${element}">${element}</span>`
        targetElment.insertAdjacentHTML("afterbegin", html);
    });
    addCopyEventListeners();

}

if (pickedColorDb.length > 0) {
    showPickedColor();
}


const activateColorPicker =  () => {
    document.body.style.display = "none";
    setTimeout(async ()=>{
        try {
            const colorDropper = new EyeDropper();
            const response = await colorDropper.open();
            const { sRGBHex } = response;
            console.log(sRGBHex);
            
            
            if (!pickedColorDb.includes(sRGBHex)) {
                pickedColorDb.push(sRGBHex);
                localStorage.setItem("pickedColorArr", JSON.stringify(pickedColorDb));
                showPickedColor();
            }
    
        }
        catch (err) {
            console.error(err);
        }
        document.body.style.display = "block";
    },10)
}





const clearData = () => {
    clearColorData.addEventListener("click", () => {
        localStorage.clear();
        location.reload();
        !containData.classList.add("hide");
        !containData.classList.remove("show");
    })
}
clearData();


function copyColor() {
    const contentToCopy = this.getAttribute('data-content');
    const textarea = document.createElement('textarea');
    textarea.value = contentToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    this.innerHTML = "Copied!";
    const self = this;
    setTimeout(() => {
        self.innerHTML = contentToCopy;
    }, 1000);
}

function addCopyEventListeners() {
    const colorCode = document.querySelectorAll(".color-1");
    colorCode.forEach((curCode) => {
        curCode.addEventListener("click", copyColor);
    });
}


colorPickerBtn.addEventListener('click', activateColorPicker);
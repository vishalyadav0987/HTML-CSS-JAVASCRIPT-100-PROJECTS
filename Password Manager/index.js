const addBtn = document.querySelector('.add-btn');
const cancelBtn = document.querySelector('#cancel-btn');
const saveBtn = document.querySelector('#save-btn');
const deleteBtn = document.querySelector('#Delete');
const editBtn = document.querySelector('#edit');
const cancelBtnEdit = document.querySelector('#cancel-btn-edit');
const sectionOne = document.querySelector('.section-one');
const sectionTwo = document.querySelector('.section-two');
const sectionThree = document.querySelector(".section-three");
const sectionFour = document.querySelector(".section-four");
const siteId = document.getElementById("siteId");
const usernameDoc = document.getElementById("username");
const passwordDoc = document.getElementById("password");
const textarea = document.getElementById("desc");
const containerThreeArrow = document.querySelector(".container-three h1 i");
const usernameValue = document.getElementById("username-value");
const siteValue = document.getElementById("site-value");
const passwordValue = document.getElementById("password-value");
const noteValue = document.getElementById("note-value");
let targetContainer = document.querySelector('.container');
let containerThreeHeading = document.querySelector('.container-three h1 span');
const saveBtnEdit = document.getElementById('save-btn-edit');
let siteName;
let password;
let username;
let note;
let tappData;
let id2;
let isEditPassword = false;
let isEditId;
let dataForEdit;
console.log(addBtn);

let passwordData = [
   
];


let arrayForLocalStarage = [];

document.addEventListener("DOMContentLoaded", () => {
    const storedData = localStorage.getItem("passwordData");
    if (storedData) {
        passwordData = JSON.parse(storedData);
        addData(passwordData);
    }
});
const randomId = () => {
    return Math.floor(Math.random() * 10000);
}
const addData = (passwordData) => {
    targetContainer.innerHTML = "";
    passwordData.forEach((curPass) => {
        const html = `
        <div class="password-details" id="${curPass.id}">
                <span class="site-name">${curPass.siteName}</span>
                <span class="more-info-icon" onclick="showPassWordDetails(${curPass.id})"><i class="fa-solid fa-caret-down"></i></span>
        </div>
        <div class="line"></div>
        `
        targetContainer.insertAdjacentHTML("afterbegin", html);
    });

}
addBtn.addEventListener("click", () => {
    sectionTwo.style.display = "";
    // sectionOne.style.display = "none";
});

const addPasswordDetails = () => {
    saveBtn.disabled = true;
    saveBtn.style.filter = "brightness(0.5)";
    saveBtn.style.cursor = "not-allowed";
    passwordDoc.addEventListener('keydown', (e) => {
        password = passwordDoc.value;
        saveBtn.disabled = false;
        saveBtn.style.filter = "brightness(1)";
        saveBtn.style.cursor = "pointer";

    });

    saveBtn.addEventListener("click", () => {
        siteName = siteId.value;
        username = usernameDoc.value;
        password = passwordDoc.value;
        note = textarea.value === "" ? "This is google password" : textarea.value;
        sectionTwo.style.display = "none";
        sectionOne.style.display = "";
        let newPasswordData = {
            id: randomId(),
            siteName: siteName,
            password: password,
            username: username,
            note: note,
        }

        passwordData.push(newPasswordData);

        localStorage.setItem('passwordData', JSON.stringify(passwordData));
        addData(passwordData);
        // siteId.value = "";
        // usernameDoc.value = "";
        // passwordDoc.value = "";
        // textarea.value = "";

    });
    cancelBtn.addEventListener("click", () => {
        sectionTwo.style.display = "none";
        sectionOne.style.display = "";

    });

};
addPasswordDetails();

const moreInfoIcon = document.querySelectorAll('.more-info-icon');
const showPassWordDetails = (id) => {
    id2 = id;
    console.log(id2);

    tappData = passwordData.filter((curId) => curId.id === +id);
    containerThreeHeading.innerHTML = `${tappData[0].siteName}`
    usernameValue.value = tappData[0].username;
    passwordValue.value = tappData[0].password;
    noteValue.value = tappData[0].note;
    siteValue.href = tappData[0].siteName;
    siteValue.innerHTML = tappData[0].siteName;
    usernameValue.readOnly = true;
    passwordValue.readOnly = true;
    noteValue.readOnly = true;
    sectionOne.style.display = "none";
    sectionThree.style.display = "";
    handeletePassword();
    handleEditPassword();
}

containerThreeArrow.addEventListener("click", () => {
    sectionThree.style.display = "none";
    sectionOne.style.display = "";

});
const usernameValueEdit = document.getElementById("username-edit");
const siteValueEdit = document.getElementById("edit-site");
const passwordValueEdit = document.getElementById("password-edit");
const noteValueEdit = document.getElementById("desc-edit");



saveBtnEdit.addEventListener("click", () => {
    const newPasswordData = {
        id: isEditPassword ? isEditId : randomId(),
        siteName: siteValueEdit.textContent,
        password: passwordValueEdit.value,
        username: usernameValueEdit.value,
        note: noteValueEdit.value,
    }
    if (isEditPassword) {
        const EditDataIndex = passwordData.findIndex((curElmId) => curElmId.id === isEditId);
        if (EditDataIndex !== -1) {
            passwordData[EditDataIndex] = newPasswordData;
            localStorage.setItem('passwordData', JSON.stringify(passwordData));
            tappData = passwordData[EditDataIndex];
            addData(passwordData);
            sectionFour.style.display = "none";
            showPassWordDetails(passwordData[EditDataIndex].id)
            // sectionThree.style.display = "";
        } else {
            console.error("Item not found for editing");
        }
        isEditPassword = false;
        isEditId = null;
    }
    else {
        passwordData.push(newPasswordData);
        localStorage.setItem('passwordData', JSON.stringify(passwordData));

        addData(passwordData);
        sectionFour.style.display = "none";
    }
    addData(passwordData);


})


const handleEditPassword = () => {
    editBtn.addEventListener('click', () => {
        console.log(id2);
        dataForEdit = passwordData.find((curElmEdit) => curElmEdit.id === id2);
        // console.log(dataForEdit);
        usernameValueEdit.value = dataForEdit.username;
        siteValueEdit.innerHTML = dataForEdit.siteName;
        passwordValueEdit.value = dataForEdit.password;
        noteValueEdit.value = dataForEdit.note;
        sectionFour.style.display = "";
        isEditPassword = true;
        isEditId = dataForEdit.id;
    });
}

const handeletePassword = () => {
    deleteBtn.addEventListener('click', () => {
        const indexToDelete = passwordData.findIndex((curId) => curId.id === +id2);
        if (indexToDelete !== -1) {
            const afterDeleteArray = [
                ...passwordData.slice(0, indexToDelete),  // Elements before the indexToDelete (index 0)
                ...passwordData.slice(indexToDelete + 1)  // Elements after the indexToDelete (index 2)
            ];

            /*
[
{ id: 1, siteName: "google.com", password: "123456", username: "exampleUser", note: "Google password" },
{ id: 3, siteName: "twitter.com", password: "qwerty", username: "twitterUser", note: "Twitter password" }
]
             */
            localStorage.setItem('passwordData', JSON.stringify(afterDeleteArray));
            passwordData = afterDeleteArray;
            addData(passwordData);
            sectionThree.style.display = "none";
            sectionOne.style.display = "";

        }
        else {
            console.error("Item not found for deletion");
        }
    });
}

const usernameCopy = document.querySelector('#username-copy');
const passwordCopy = document.querySelector('#password-copy');
const copyToClipBoard = (a,b) => {
    b.addEventListener('click', () => {
        a.select();
        document.execCommand('copy');
    });
}


let inputElement = document.querySelector("#password-value");

let eyeImg = document.querySelector('.hide');
// let type = document.querySelector('.Password')

eyeImg.addEventListener('click',()=>{
    console.log('clicked');
    if(inputElement.type == "text"){
        inputElement.type = "password";
        eyeImg.src = "hide.png";
    }
    else if( inputElement.type == "password"){
        inputElement.type = "text";
        eyeImg.src = "show.png";
    }
})

cancelBtnEdit.addEventListener('click',()=>{
    sectionFour.style.display = "none"
})

copyToClipBoard(usernameValue,usernameCopy);
copyToClipBoard(passwordValue,passwordCopy);
console.log(passwordData);
addData(passwordData);








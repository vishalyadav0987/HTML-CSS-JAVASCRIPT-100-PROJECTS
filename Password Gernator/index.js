let passwordField = document.getElementById("Password");
let lengthP = document.getElementById("length");
let Uppercase = document.getElementById("Uppercase");
let Lowercase = document.getElementById("Lowercase");
let number = document.getElementById("number");
let Symbols = document.getElementById("Symbols");
let Gerenate = document.querySelector("button");


const patternA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const patternB = "abcdefghijklmnopqrstuvwxyz";
const patternC = "1234567890";
const patternD = "@#$!%&^*(";

const getRandomGerenate = (pattern) => {
    return pattern[Math.floor(Math.random() * +lengthP.value)]
}


const getRandomPasswordGerenator = (password = "") => {
    if (Uppercase.checked) {
        password += getRandomGerenate(patternA);
    }
    if (Lowercase.checked) {
        password += getRandomGerenate(patternB);
    }
    if (number.checked) {
        password += getRandomGerenate(patternC);
    }
    if (Symbols.checked) {
        password += getRandomGerenate(patternD);
    }
    if (password.length < +lengthP.value) {
        return getRandomPasswordGerenator(password);

    }

    return password;
}

Gerenate.addEventListener('click', () => {
    passwordField.value =  getRandomPasswordGerenator();
    passwordField.select();
    document.execCommand('copy');
})
console.log(typeof (+lengthP.value));





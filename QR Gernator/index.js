let API = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;


let inputs = document.querySelector("input");
let btn = document.querySelector("button");
let QrCode = document.querySelector(".QRCode");
let QrCodeimg = document.querySelector("#Qrimg");
btn.addEventListener('click', () => {
    // console.log(API);
    let inputValue = inputs.value;
    
   if(inputValue.length <= 0){
   
       QrCode.innerHTML = `<h2> error 404 </h2>`
   }
   else{
    QrCodeimg.src = `${API}${inputValue}`;
    QrCode.classList.add("show-img");
    // console.log(inputValue);
   inputs.value = "";

   }
    
});
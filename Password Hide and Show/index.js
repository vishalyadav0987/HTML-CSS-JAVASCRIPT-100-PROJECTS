let eyeImg = document.querySelector('.show');
let type = document.querySelector('.Password')

eyeImg.addEventListener('click',()=>{
    console.log('clicked');
    if(type.type == "text"){
        type.type = "password";
        eyeImg.src = "hide.png";
    }
    else if( type.type == "password"){
        type.type = "text";
        eyeImg.src = "show.png";
    }
})
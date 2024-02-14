let releaseDate = document.querySelector(".release-date");
releaseDate.innerHTML = "1 Aug 2025 10:00 PM";

let inputs = document.querySelectorAll('input');
// console.log(typeof (releaseDate));

let clock = () => {
    const endTime = new Date(releaseDate.innerHTML);
    const presentDate = new Date();
    // console.log(endTime);
    // console.log(presentDate);
    let diffTime = endTime - presentDate;
    // console.log(diffTime);

   if (diffTime < 0){
    return;
   }
    // in days    
    inputs[0].value = Math.floor(diffTime / (24 * 60 * 60 * 1000));
    // in hr
    inputs[1].value = Math.floor((diffTime % (24 * 60 * 60 * 1000))/(60 * 60 * 1000));
    // in min 
    inputs[2].value = Math.floor((diffTime % (60 * 60 * 1000))/(60 * 1000));
    // in sec
    inputs[3].value = Math.floor((diffTime % (60 * 1000))/(1000))


}
setInterval(()=>{
    clock();
},1000)



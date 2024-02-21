const SecondsPin = document.getElementById("Seconds-Pin");
const MintuesPin = document.getElementById("Mintues-Pin");
const HoursPin = document.getElementById("Hours-Pin");
console.log(SecondsPin,MintuesPin,HoursPin);


const timeFun = () => {
    // const presentDate = new Date('19 February 2024 5:55:15');
    const presentDate = new Date();
    const hr = presentDate.getHours();
    const min = presentDate.getMinutes();
    const sec = presentDate.getSeconds();
    // document.getElementById("id").innerHTML = `${hr}:${min}:${sec}`;
    // console.log(`${hr}:${min}:${sec}`);
    
    SecondsPin.style.transform = `rotate(${Number(((sec)*6)+91)}deg)`;
    MintuesPin.style.transform = `rotate(${Number(((min)*6)+88)}deg)`;
    HoursPin.style.transform = `rotate(${Number(hr*30)+90}deg)`;
}

setInterval(timeFun, 1000);
// timeFun()





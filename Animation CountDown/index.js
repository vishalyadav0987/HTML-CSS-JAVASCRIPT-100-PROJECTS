const contentMin1 = document.querySelector('.content-1');
const content = document.querySelector('.content');
const content2 = document.querySelector('.content2');
const content0 = document.querySelector('.content0');
const inputs = document.querySelectorAll("h1 input");

const time = document.querySelectorAll('.time');

const createCircle = (container, rotation) => {
    var circle = document.createElement('li');
    circle.style.transform = `rotate(${rotation}deg) translate(100px) rotate(-${rotation}deg)`
    container.appendChild(circle);
}


const decreasingCircleAccordingToTheirTime = (container) => {
    // container == contennt
    // containerBox == element
    const ContainerBox = container.querySelectorAll('li');

    var currentIndex = ContainerBox.length - 1;
    var interValToRemove = setInterval(() => {
        if (currentIndex >= 0 && ContainerBox[currentIndex].parentNode) {
            ContainerBox[currentIndex].parentNode.removeChild(ContainerBox[currentIndex]);
            currentIndex--;
            // clock();
        }
        else {
            clearInterval(interValToRemove);
        }
    }, 1000)



}


const timeDisplayWithCircle = (day, hr, min, sec) => {
    for (let index = 0; index < day; index++) {
        createCircle(contentMin1, 6 * index);

    }
    for (let index = 0; index < hr; index++) {
        // var circle = document.createElement('li');
        // circle.style.transform = `rotate(${15 * index}deg) translate(100px) rotate(-${15 * index}deg)`
        // // circle.innerHTML = index+1;
        // circle.style.width = "23px";
        // circle.style.height = "23px"
        // content0.appendChild(circle)
        createCircle(content0, 15 * index);
    }
    for (let index = 0; index < min; index++) {
        // var circle = document.createElement('li');
        // // circle.innerHTML = index+1;
        // circle.style.transform = `rotate(${6 * index}deg) translate(100px) rotate(-${6 * index}deg)`
        // content.appendChild(circle);
        createCircle(content, 6 * index);

    }
    for (let index = 0; index < sec; index++) {
        // var circle = document.createElement('li');
        // // circle.innerHTML = index+1;
        // circle.style.transform = `rotate(${6 * index}deg) translate(100px) rotate(-${6 * index}deg)`
        // content2.appendChild(circle)
        createCircle(content2, 6 * index);
    }
    decreasingCircleAccordingToTheirTime(contentMin1);
    decreasingCircleAccordingToTheirTime(content0);
    decreasingCircleAccordingToTheirTime(content);
    decreasingCircleAccordingToTheirTime(content2);
}







/*🤌 Logic implementation*/

// Demo time = 18 Feb,2024



const clock = () => {
    /***********************************HIT AND RTAIL****************************************/
    let defalutEndtime = {
        date: 28,
        month: "July",
        year: 2026,
        hours: 5,
        minutes: 30,
        meridian: "PM"
    }
 
    inputs[0].value = defalutEndtime.date;
    inputs[1].value = defalutEndtime.month;
    inputs[2].value = defalutEndtime.year;
    inputs[3].value = defalutEndtime.hours;
    inputs[4].value = defalutEndtime.minutes;
    inputs[5].value = defalutEndtime.meridian;
   

   

    
    let endTime = new Date(`${defalutEndtime.date} ${defalutEndtime.month} ${defalutEndtime.year} ${defalutEndtime.hours}:${defalutEndtime.minutes} ${defalutEndtime.meridian}`);
    
   
    // console.log(endTime);
    const presentTime = new Date();
    // console.log(presentTime);

    const timeDifference = endTime - presentTime;
    const hr = ((((timeDifference) / 1000) / 60) / 60);

    const min = hr - Math.floor(hr);

    const sec = min - Math.floor(min);
    // console.log(Math.floor(hr), Math.floor(min / 60), Math.floor(sec));

    /***********************************HIT AND RTAIL***************************************/
    if (timeDifference < 0) {
        return;
    }
    let day = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    time[0].innerHTML = day;
    // time[0].innerHTML = Math.floor(timeDifference / (1000 * 60 * 60));
    let hr1 = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    time[1].innerHTML = hr1;
    // time[1].innerHTML = Math.floor(min / (60 * 1000));
    let min1 = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
    time[2].innerHTML = min1;
    // time[2].innerHTML = Math.floor(sec / 1000);
    let sec1 = Math.floor((timeDifference % (60 * 1000)) / (1000));
    time[3].innerHTML = sec1;

    // console.log(timeDifference);

    // console.log(hr1,min1,sec1);

    timeDisplayWithCircle(day, hr1, min1, sec1);



}
// CircleDecresing(60,content2);
setInterval(() => {
    clock();
}, 1000)






// const milliSeconds = Endtime.getTime();
// console.log(milliSeconds/1000);








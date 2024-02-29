let tapppingDateTxt;
let defaultDate;
const edited = document.querySelectorAll(".edited");
function generateCalendar(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const presentDate = new Date().toLocaleDateString();
    const todaysDate = +(presentDate.split('/')[1]);

    const calendar = document.getElementById('calendar');
    const table = document.createElement('table');
    const row = table.insertRow();
    let cell;

    // Fill in the row with days
    for (let day = 1; day <= daysInMonth; day++) {
        cell = row.insertCell();
        cell.textContent = day;

        if (todaysDate === day) {
            cell.classList.add("back");
        }
    }

    calendar.innerHTML = '';
    calendar.appendChild(table);
}

// Example: Get calendar for February 2024
generateCalendar(2024, 1);

const toHome = document.getElementById("to-home");
const toAdd = document.querySelector(".controller-container span");
const toData = document.getElementById("to-data");
const bodySection = document.querySelector(".body-section");
const body2Section = document.querySelector(".body-2-section");
const body3Section = document.querySelector(".body-3-section");
const goToNext = document.getElementById("go-to-next");

const showSection = (section) => {
    setTimeout(() => {
        bodySection.style.display = (section === bodySection) ? "" : "none";
        body2Section.style.display = (section === body2Section) ? "" : "none";
        body3Section.style.display = (section === body3Section) ? "" : "none";
    }, 300);
};

toHome.addEventListener('click', () => {
    showSection(bodySection);
});

goToNext.addEventListener('click', () => {
    showSection(body2Section);
});

toData.addEventListener('click', () => {
    showSection(body3Section);
});

const getGreetingTxt = document.querySelector('.salutation-day');
const currentDateTxt = document.getElementById("current-date");
const currentDateTxt2 = document.querySelector(".home-r #present-time");
const currentDateTxt3 = document.querySelector(".home-r #present-time-2");
const now = new Date();

const getGreeting = () => {
    const hours = now.getHours();

    if (hours >= 5 && hours < 12) {
        getGreetingTxt.innerHTML = 'Good Morning Ji!';
    } else if (hours >= 12 && hours < 17) {
        getGreetingTxt.innerHTML = 'Good Afternoon Ji!';
    } else if (hours >= 17 && hours < 20) {
        getGreetingTxt.innerHTML = 'Good Evening Ji!';
    } else {
        getGreetingTxt.innerHTML = 'Good Night Ji!';
    }
};
getGreeting();

const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const currentDate = () => {
    currentDateTxt.innerHTML = `${now.getDate()} ${monthNames[now.getMonth()]},${now.getFullYear()}`;
    currentDateTxt2.innerHTML = `${now.getDate()} ${monthNames[now.getMonth()]},${now.getFullYear()}`;
    currentDateTxt3.innerHTML = `${now.getDate()} ${monthNames[now.getMonth()]},${now.getFullYear()}`;
};
currentDate();

const currentLocationTxt = document.getElementById("current-location");
let latitude;
let longitude;

const currentLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
                currentLocationTxt.innerHTML = `Latitude: ${latitude.toFixed(2)}, Longitude: ${longitude.toFixed(2)}`;
            },
            (error) => {
                console.error(`Error getting location: ${error.message}`);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
};
currentLocation();

const apiKey = '';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

const getCurrentTemp = () => {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            const currentTemperature = data.main.temp;
            const cityName = data.name;
            console.log(`Current Temperature in ${cityName}: ${currentTemperature}°C`);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
};
// getCurrentTemp();

const emojiFeeling = document.querySelectorAll(".down span");

emojiFeeling.forEach((curElm) => {
    curElm.addEventListener('click', (e) => {
        const id = e.target.id;
        const innerTxt = document.getElementById(`${id}`);
        const Feeling = document.querySelector('.feeling');
        Feeling.innerHTML = innerTxt.textContent;
        Feeling.style.fontSize = "30px";
        popUp(`Your feeling is ${innerTxt.textContent} Added`);
    });
});

let obj = { imgUrl: "" };
let arr = [];
const imgSrc = document.getElementById("img-src");
const imgPut = document.getElementById("useri-img");

document.addEventListener("DOMContentLoaded", () => {
    const storedData = localStorage.getItem("arr");
    if (storedData) {
        const data = JSON.parse(storedData);
        imgPut.src = data[0].imgUrl;
        document.getElementById("take-img").style.display = "none";
    }
});

const imgSetter = () => {
    const url = URL.createObjectURL(imgSrc.files[0]);
    obj.imgUrl = url;
    arr.push(obj);
    imgPut.src = url;
    console.log(url);
    document.getElementById("take-img").style.display = "none";
    localStorage.setItem('arr', JSON.stringify(arr));
};

let body4Section = document.querySelector(".body-4-section");

const showingController = () => {
    body4Section.classList.toggle("hide");
};

let activityData = [

];
let isEdit;
let EditId;

const targetElement = document.querySelector(".list-of-works");
const tapppingDate = document.querySelectorAll("td");

const showingData = (activityData, todaysDate) => {
    targetElement.innerHTML = "";

    const dateWiseArray = activityData.filter((curElm) => {
        const date2 = new Date(curElm.whichdate);

        // Compare the date values
        return date2.getDate() === todaysDate.getDate() &&
            date2.getMonth() === todaysDate.getMonth() &&
            date2.getFullYear() === todaysDate.getFullYear();
    });

    dateWiseArray.forEach((curElm) => {
        const html = `
            <div class="work-1" onclick="handleUpadteActivity(${curElm.id})">
                <div class="work-name">
                    <input type="checkbox" class="checkbox" onchange="handleDeleteActivity(${curElm.id})" onchange="deleteItemById(${curElm.id})">
                    <span class="work-text">${curElm.taskName}</span>
                    <span class="edited"></span>
                </div>
                <div class="work-information">
                    <span class="alram-box">
                        <span><i class="fa-solid fa-bell"></i></span>
                        <span class="time-stamp">${curElm.setAlarm}</span>
                    </span>
                    <span class="information-box">
                        <span><i class="fa-solid fa-suitcase"></i></span>
                        <span class="work-type">${curElm.taskType}</span>
                    </span>
                </div>
            </div>
        `;
        targetElement.insertAdjacentHTML("afterbegin", html);
    });
};

// showingData(activityData, now);

const taskName = document.getElementById("task-name");
const alaramTiming = document.getElementById("alaram-timing");
const taskDate = document.getElementById("task-date");
const taskType = document.querySelectorAll(".task-type");
const submitBtn = document.querySelector(".submit-btn");

let taskTypedata;

taskType.forEach((curElm) => {
    curElm.addEventListener("click", (e) => {
        taskTypedata = e.target.value;
        // console.log(taskTypedata);
        // Do something with taskTypedata, if needed
    });
});

submitBtn.addEventListener("click", () => {
    let date3 = new Date();
    const newActivity = {
        id: isEdit ? EditId : generateUniqueId(),
        taskName: taskName.value,
        setAlarm: alaramTiming.value,
        whichdate: taskDate.value === "" ? `${now.getFullYear()}-${now.getMonth() + 1}-${date3.getDate()}` : taskDate.value,
        taskType: taskTypedata
    };
    if (isEdit) {
        const EditIndex = activityData.findIndex((Editid) => (Editid.id === EditId));
        activityData[EditIndex] = newActivity;
        isEdit = false;
        EditId = null;
    }
    else {
        activityData.push(newActivity);
        taskName.value = "";
        alaramTiming.value = ""
        popUp(`Your feeling is ${innerTxt.textContent} Added`);
    }
    showingData(activityData, now);
    localStorage.setItem("activityArray", JSON.stringify(activityData));
    filterFunction(tapppingDateTxt, activityData);
    showingController();

});


// Function to generate unique IDs
function generateUniqueId() {
    return Math.floor(Math.random() * 10000);
}

const checkbox = document.querySelectorAll(".checkbox");
const radioBtn = document.querySelectorAll(".task-type");
const handleUpadteActivity = (id) => {
    console.log(id);
    const elementToUpdate = activityData.find(curElm => curElm.id === id);
    console.log(elementToUpdate);
    taskName.value = elementToUpdate.taskName;
    document.querySelector("#alaram-timing").value = elementToUpdate.setAlarm;;
    taskDate.value = elementToUpdate.whichdate;
    radioBtn.forEach((radioBtnCur) => {
        radioBtnCur.checked = radioBtnCur.value === elementToUpdate.taskType ? true : false;
        taskType.value = elementToUpdate.taskType;
    });
    document.querySelector(".submit-btn").innerHTML = "Saved Task"
    isEdit = true;
    EditId = id;
    showingController();
}

// const handleDeleteActivity = (id) => {
//     showingController();
//     const afterDelete = activityData.filter((curElm) => curElm.id !== id);
//     console.log(afterDelete, id);
//     console.log(activityData)

//     // activityData = 
//     console.log(activityData)
//     setTimeout(() => {

//         showingData(afterDelete, now)
//     }, 300);



// };
// Function to delete data from localStorage based on ID
const handleDeleteActivity = (id) => {
    // Retrieve the data from localStorage
    showingController();

    const storedData = localStorage.getItem("activityArray");

    if (storedData) {
        // Parse the stored data
        activityData = JSON.parse(storedData);

        // Find the index of the item with the specified ID
        const indexToDelete = activityData.findIndex(item => item.id === id);

        // If the item with the specified ID is found, remove it
        if (indexToDelete !== -1) {
            activityData.splice(indexToDelete, 1);

            // Update localStorage with the modified data
            localStorage.setItem("activityArray", JSON.stringify(activityData));
            setTimeout(() => {

                showingData(activityData, now);
                filterFunction(tapppingDateTxt, activityData);
            }, 300);
        }
    }
};

//Page -3
console.log(tapppingDate);
const targetElement2 = document.querySelector(".list-of-works-All");
const filterFunction = (pDATE, newArr) => {
    console.log(pDATE);

    // const dateGiven = pDATE.toString();
    let wholeDate = "2024" + "-" + "02" + "-" + pDATE;
    const filterByDate = newArr.filter((curElm) => {
        const date2 = new Date(curElm.whichdate);
        console.log(date2);

        const todaysDate = new Date(wholeDate);
        console.log(todaysDate);

        // Compare the date values
        return date2.getDate() === todaysDate.getDate() &&
            date2.getMonth() === todaysDate.getMonth() &&
            date2.getFullYear() === todaysDate.getFullYear();
    });
    console.log(filterByDate);

    // if (filterByDate.length > 0) {
    targetElement2.innerHTML = "";
    filterByDate.forEach((curElm) => {
        const html = `
            <div class="work-All">
                <div class="work-name-All">
                    <span class="work-text-All">${curElm.taskName}</span>
                    <span class="edited"></span>
                </div>
                <div class="work-information-All">
                    <span class="alram-box-All">
                        <span><i class="fa-solid fa-bell"></i></span>
                        <span class="time-stamp-All">${curElm.setAlarm}</span>
                    </span>
                    <span class="information-box-All">
                        <span><i class="fa-solid fa-suitcase"></i></span>
                        <span class="work-type-All">${curElm.taskType}</span>
                    </span>
                </div>
            </div>
        `;
        targetElement2.insertAdjacentHTML("afterbegin", html);
    });
}

// }

const AllActivityPage = () => {
    const storedData = localStorage.getItem("activityArray");
    activityData = JSON.parse(storedData);

    // let newArr = [...activityData];
    // console.log(newArr);
    // tapppingDateTxt = new Date().getDate();
    // console.log(tapppingDate);
    defaultDate = now;
    tapppingDateTxt = defaultDate.getDate().toString();

    tapppingDate.forEach((curElm) => {
        curElm.addEventListener("click", () => {
            tapppingDateTxt = event.target.textContent;
            console.log(tapppingDateTxt);

            tapppingDate.forEach((elm) => {
                elm.classList.remove("back1");
            });
            curElm.classList.add("back1");
            filterFunction(tapppingDateTxt, activityData);
        })
    })

    filterFunction(tapppingDateTxt, activityData);
    console.log(activityData);

}

AllActivityPage();
console.log(tapppingDateTxt);


showingData(activityData, now);

document.addEventListener("DOMContentLoaded", () => {
    const storedData = localStorage.getItem("activityArray");
    if (storedData) {
        activityData = JSON.parse(storedData);
        showingData(activityData, now);
    }
});

let x = 349.5;
const popUp = (text) => {

    document.querySelector(".cart-added-text").innerHTML = text;
    document.querySelector(".box").style.transform = "translateX(1400px)";
    setInterval(() => {
        document.querySelector(".box .line2").style.width = `${x--}px`;
        if (x <= 0) {
            document.querySelector(".box").style.transform = "translateX(-1400px)";
        }

    }, 10)

    console.log(x);

}


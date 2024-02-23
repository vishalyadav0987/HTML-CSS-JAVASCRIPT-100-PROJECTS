const expanseTracker = {
    netValue: 0,
    totalEarn: 0,
    totalLost: 0,
    transactionDetail: [
        // {
        //     // id: 4,
        //     // expanseName: "Example",
        //     // expanseValue: 500,
        //     // expenseType: "credit"
        // }
    ]
};

let isUpdate = false;
let EditId;
const key = document.getElementById("expanse-name-input");
const value = document.getElementById("expanse-value-input");
const netEarningVal = document.querySelector(".net");
const earnBtn = document.getElementById("earning-btn");
const lostBtn = document.getElementById("lost-btn");
const totEarningValue = document.querySelector(".earning-value-tot");
const totLostValue = document.querySelector(".lost-value");
const deleteIconClass = "delete-icon";
const editIcon = "fa-pen-to-square";
const targetElement = document.querySelector(".dashboard-list");


// let localDataSave = JSON.parse(localStorage.getItem('localDataSave')) || [];

document.addEventListener("DOMContentLoaded", () => {
    const storedData = localStorage.getItem("expanseTracker");
    if (storedData) {
        expanseTracker.transactionDetail = JSON.parse(storedData);
        UpadateUI();
    }
});

earnBtn.addEventListener("click", () => {
    handleTransaction("credit");
});

lostBtn.addEventListener("click", () => {
    handleTransaction("debit");
});

// window.onload =()=>{
//     localDataSave.forEach((curElm)=>{
//         targetElement.insertAdjacentHTML("afterbegin", curElm);
//     })
// }
const handleTransaction = (type) => {
    const newTransaction = {
        id:isUpdate ? EditId: Math.floor(Math.random() * 10000),
        expanseName: key.value,
        expanseValue: type === "credit" ? +value.value : -(+value.value),
        expenseType: type,
    };
    
    
    if(isUpdate){
        const EditIndex = expanseTracker.transactionDetail.findIndex((Editid) =>(Editid.id === EditId));
        console.log(EditIndex);
        
        expanseTracker.transactionDetail[EditIndex] = newTransaction;
        isUpdate = false;
        EditId = null;
    }
    else{

        expanseTracker.transactionDetail.push(newTransaction);
        localStorage.setItem("expanseTracker", JSON.stringify(expanseTracker.transactionDetail));
    }
    UpadateUI();





};

const netSum = () => {
    let sum = 0;

    if (expanseTracker.transactionDetail.length === 0) {
        netEarningVal.innerHTML = `&#8377;${sum.toFixed(2)}`;
    } else {
        expanseTracker.transactionDetail.forEach((curElm) => {
            sum += curElm.expanseValue;
        });
        netEarningVal.innerHTML = `&#8377;${sum.toFixed(2)}`;
    }
};

const totalEarn = () => {
    let sumCredit = 0;
    let sumDebit = 0;

    expanseTracker.transactionDetail.forEach((curElm) => {
        if (curElm.expenseType === "credit") {
            sumCredit += curElm.expanseValue;
        }
        if (curElm.expenseType === "debit") {
            sumDebit += curElm.expanseValue;
        }
    });

    totEarningValue.innerHTML = `&#8377;${sumCredit.toFixed(2)}`;
    totLostValue.innerHTML = `&#8377;${Math.abs(sumDebit.toFixed(2))}`;
};

const UpadateUI = () => {
    targetElement.innerHTML = "";
    netSum();
    const singleItem = document.querySelectorAll(".dashbord-item");  
   

    expanseTracker.transactionDetail.forEach((curElm) => {
        const html = `
            <div class="dashbord-item" id="${curElm.id}">
                <div class="expanse-value-name">
                    <div class="expanse-name">${curElm.expanseName}</div>
                    <div class="expanse-value">&#8377;${Math.abs(curElm.expanseValue)}</div>
                </div>
                <div class="expanse-type ${curElm.expenseType === "credit" ? "credit" : "debit"}">
                    ${curElm.expenseType === "credit" ? "C" : "D"}
                </div>
                <div class="icon-box">
                    <span class="${deleteIconClass}" onclick="handleDeleteTransaction(${curElm.id})">🚮</span>
                    <i class="fa-regular ${editIcon}" onclick="handleUpadteTransaction(${curElm.id})"></i>
                </div>
            </div>
        `;
        targetElement.insertAdjacentHTML("afterbegin", html);
    });
    totalEarn();

};
const handleUpadteTransaction = (id) => {
    console.log(id, "clicked");
    const editTransactionData = expanseTracker.transactionDetail.find(curElm => curElm.id === id);
    console.log(editTransactionData);
    key.value = editTransactionData.expanseName;
    value.value = editTransactionData.expenseType === "credit"? editTransactionData.expanseValue : -(editTransactionData.expanseValue);
    isUpdate = true;
    EditId = id;
}

const handleDeleteTransaction = (id) => {
    console.log("clicked", id);
    const newTransactionDetails = expanseTracker.transactionDetail.filter(curElm => curElm.id !== id);
    console.log(newTransactionDetails);
    expanseTracker.transactionDetail = newTransactionDetails;
    UpadateUI();

}

UpadateUI();


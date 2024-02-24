let AddNote = document.getElementById("AddNote");
let container = document.querySelector(".note-container");



/*🤌 Store Data in local storage */
const upDateUI = () =>{
    let textAreaData = document.querySelectorAll("textarea");
    let arrayOfData = [];
    // console.log(textAreaData);
    textAreaData.forEach((TextData)=>{
       return arrayOfData.push(TextData.value);
    });
    // console.log(arrayOfData);
    localStorage.setItem('arrayOfData',JSON.stringify(arrayOfData));
    
    

}

const AddNewNote = (text = '') => {
    const noteDiv = document.createElement("div")
    noteDiv.classList.add("main-note-conntainer");



    let htmlData = `<div class="box">
    <div class="header header-trash">
    <i style="font-size:24px" class="fa" id="SaveNote">&#xf0c7;</i>
    <i style="font-size:24px" class="fa" id="delteNote">&#xf014;</i>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea id="textarea" class="${text ? "hidden" : ""}"></textarea>
    </div>`;

    noteDiv.insertAdjacentHTML('afterbegin', htmlData);

    const saveNote = noteDiv.querySelector("#SaveNote");
    const delteNote = noteDiv.querySelector("#delteNote");
    const mainDiv = noteDiv.querySelector('.main');
    const textArea = noteDiv.querySelector("textarea");


    delteNote.addEventListener('click', () => {
        noteDiv.remove();
        upDateUI();
    });



    textArea.value = text;
    mainDiv.innerHTML = text;

    
    saveNote.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');

    });

    textArea.addEventListener('change',(event)=>{
        const value = event.target.value;
       mainDiv.innerHTML = value;

       upDateUI();
        
    })
    container.appendChild(noteDiv);
}


/*🤌 get Data from local storage */

const notesData = JSON.parse(localStorage.getItem('arrayOfData'));

if(notesData){
    notesData.forEach((noteData)=>{
        AddNewNote(noteData)
    });
}


// AddNote.addEventListener('click', AddNewNote);

AddNote.addEventListener('click', () => {
    // Preventing the default behavior of the click event
    
    AddNewNote();
});






const Button = document.querySelector('.btn');
const notesContainer = document.querySelector('.note-container');
const save = document.querySelector('.save');
Button.addEventListener(
    'click', function () {
        makeNotes()
    }
)

let makeNotes = () => {

    let Div = document.createElement('div');
    let area = document.createElement('textarea');
    let trans = document.createElement('i');
    Div.className = "note";
    trans.className = " fas fa-trash trans ";
    Div.appendChild(area);
    // Append 
    notesContainer.appendChild(Div).appendChild(trans);

    // Remove
    Div.querySelector('.trans').addEventListener('click',
        () => {
            Div.remove();
        }
    )
}

// Save(Not Working Properly)
save.addEventListener('click', () => {
    saveNotes();
})

function saveNotes(){

    const notes = document.querySelectorAll("div textarea");
    const data = [];
    notes.forEach((Div)=>{
        data.push(Div.value);
      
    })
    console.log(data);
    localStorage.setItem("notes", JSON.stringify(data));
}



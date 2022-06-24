const notes = document.getElementById("notes");
const title = document.getElementById('title');
const selector = document.getElementById("nbsel");
const buttons = document.getElementsByClassName("notebook-select");
const dltg = document.getElementById("dltoggle");
const r = document.querySelector(':root');

class notebookclass {
    constructor(name,content) {
        this.name = name;
        this.content = content;
    }
}

let mode = 1; //set mode to 1 (darkmode)
window.onload=function onLoad() {
    /*if (localStorage.getItem(title.value) !== null) {
        notes.textContent = localStorage.getItem(title.value);
    }*/
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        i = new notebookclass(key,value);
        let button = document.createElement("div");
        button.className = "notebooks";
        button.id = key;
        button.textContent = key;
        selector.appendChild(button);
    }
}

setInterval(
function setTitle() {
    document.getElementById("base").textContent = title.value;
    return true;
},5);



let notebook = new notebookclass(document.getElementById("base").textContent,notes.value);
notes.addEventListener("input",updateNotebook);

function updateNotebook(e) {
    notebook.name = title.value;
    notebook.content = e.target.value;
    console.log("Note " +notebook.name +" value updated to " + notebook.content);
}

setInterval(
    function save() {
        localStorage.setItem(notebook.name,notebook.content);
        console.log("saved " + notebook.name);
    }, 5000)
for (let i = 0 ; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonclick);
}
function buttonclick(e){
    title.value = e.target.textContent;
    notes.textContent = localStorage.getItem(e.target.textContent)
}

dltg.addEventListener("click",dltoggle);

function dltoggle() {
    if (mode === 1) { // if darkmode is enabled
        r.style.setProperty('--text', '#2E3440');
        r.style.setProperty('--background', '#ECEFF4');
        r.style.setProperty('--foreground', '#D8DEE9');
        r.style.setProperty('--midground', '#E5E9F0');
        mode = 0;
    } else if (mode === 0){ //if lightmode is enabled
        r.style.setProperty('--text', '#ECEFF4');
        r.style.setProperty('--background', '#2E3440');
        r.style.setProperty('--foreground', '#4C566A');
        r.style.setProperty('--midground', '#434C5E');
        mode = 1;
    }
}
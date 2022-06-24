const notes = document.getElementById("notes");
const title = document.getElementById('title');
window.onload=function onLoad() {
    if (localStorage.getItem(title.value) !== null) {
        notes.textContent = localStorage.getItem(title.value);
    }
}
setInterval(
function setTitle() {
    document.getElementById("base").textContent = title.value;
    return true
},5)
setInterval(
    function save() {
        localStorage.setItem(notebook.name,notebook.content)
    }, 5000
)
class notebookclass {
    constructor(name,content) {
        this.name = name;
        this.content = content;
    }
}

let notebook = new notebookclass(document.getElementById("base").textContent,notes.value)
notes.addEventListener("input",updateNotebook)

function updateNotebook(e) {
    notebook.content = e.target.value;
    console.log("Note " +notebook.name +" value updated to " + notebook.content)
}


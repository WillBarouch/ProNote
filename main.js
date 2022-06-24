const notes = document.getElementById("notes");
setInterval(
function setTitle() {
    document.getElementById("base").textContent = document.getElementById('title').value;
    return true
},5)

class notebook {
    constructor(name,content) {
        this.name = name;
        this.content = content;
    }
}

let x = new notebook(document.getElementById("base").textContent,notes.value)
notes.addEventListener("input",updateNotebook)

function updateNotebook(e) {
    x.content = e.target.value;
    console.log("Note " + x.name +" value updated to " + x.content)
}

function logValue() {
    console.log(x.content)
}

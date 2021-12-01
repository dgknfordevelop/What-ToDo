let userInput = document.querySelector(".note-input");
let addButton = document.querySelector(".note-add-button");
let noteSection = document.querySelector(".main-note-section");
let deleteAllButton = document.querySelector(".delete-all-button");
let checkNote = document.queryCommandIndeterm(".note-control");

addButton.addEventListener("click", addNote);
noteSection.addEventListener("click", deleteSingleNote);
deleteAllButton.addEventListener("click", deleteAll);
checkNote.addEventListener("click", noteControl);

function addNote() {

    if (userInput.value.length == 0) {
        alert("Please write something to add a note")

    } else {
        noteSection.innerHTML += `<div class="note-line">
        <div class="note-item">${userInput.value}</div>
        <input type="checkbox" class="note-control">
        <div class="note-delete">x</div></div>`
        userInput.value = "";

    }
}

function deleteSingleNote(e) {
    if (e.target.className === "note-delete") {

        if (confirm("Do you ant to delete this note?")) {
            e.target.parentElement.remove();
        }
    }
}

function deleteAll() {
    if (confirm("Do you want to delete all notes?")) {
        noteSection.innerHTML = "";
    }
}


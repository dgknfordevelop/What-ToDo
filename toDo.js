let userInput = document.querySelector(".note-input");
let addButton = document.querySelector(".note-add-button");
let noteSection = document.querySelector(".main-note-section");

addButton.addEventListener("click", addNote);

function addNote() {

    if (userInput.value.length == 0) {
        alert("Please write something to add a note")
        
    } else {
        let newNoteLine = document.createElement("div");
        newNoteLine.className = "note-line";

        noteSection.innerHTML += `<div class="note-line">
        <div class="note-item">${userInput.value}</div>
        <input type="checkbox" class="note-control">
        <div class="note-delete">x</div></div>`
    }

}
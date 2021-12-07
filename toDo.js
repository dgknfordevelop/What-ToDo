let userInput = document.querySelector(".note-input");
let addButton = document.querySelector(".note-add-button");
let noteSection = document.querySelector(".main-note-section");
let deleteAllButton = document.querySelector(".delete-all-button");
// let checkItem = document.getElementsByClassName(".note-check");

addButton.addEventListener("click", addNote);
noteSection.addEventListener("click", deleteSingleNote);
deleteAllButton.addEventListener("click", deleteAll);

function addNote() {

    if (userInput.value.length == 0) {
        alert("Please write something to add a note")

    } else {
        noteSection.innerHTML += `<div class="note-line">
        <div class="note-item-toggleNo">${userInput.value}</div>
        <div class="note-check">
        <input type="checkbox"></div>
        <div class="note-delete"><i class="far fa-trash-alt"></i></div></div>`
        userInput.value = "";

        let noteItem = document.querySelector(".note-item-toggleNo");
        let checkItem = document.querySelector(".note-check");
        checkItem.addEventListener("click", checkIt);

        function checkIt() {

            if (noteItem.className == "note-item-toggleNo") {
                noteItem.className = "note-item-toggleYes";
            } else {
                noteItem.className = "note-item-toggleNo";
            }
        }

    }
}

function deleteSingleNote(e) {
    if (e.target.className === "far fa-trash-alt") {

        if (confirm("Do you ant to delete this note?")) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

function deleteAll() {
    if (confirm("Do you want to delete all notes?")) {
        noteSection.innerHTML = "";
    }
}
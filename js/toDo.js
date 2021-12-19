let userInput = document.querySelector(".note-input");
let addButton = document.querySelector(".note-add-button");
let noteSection = document.querySelector(".main-note-section");
let deleteAllButton = document.querySelector(".delete-all-button");
let clockButton = document.querySelector(".clock-button");
let clockContainerMobile = document.querySelector(".digital-clock-container-mobile");
let counterContainer = document.querySelector(".counter-container");


addButton.addEventListener("click", addNote);
noteSection.addEventListener("click", deleteSingleNote);
deleteAllButton.addEventListener("click", deleteAll);
clockButton.addEventListener("click", openClock);
window.addEventListener("resize", clockDisplayNone);

function addNote() {

    if (userInput.value.length == 0) {
        alert("Please write something to add a note.")

    } else {

        noteSection.innerHTML += `<div class="note-line">
        <div class="note-item-toggleNo">${userInput.value}</div>
        <div class="note-check">
        <input type="checkbox"></div>
        <div class="note-delete"></div></div>`;
        userInput.value = "";

        let checkItem = document.querySelectorAll(".note-check");

        for (let i = 0; i < checkItem.length; i++) {
            checkItem[i].addEventListener("click", checkIt);
        }

        function checkIt(e) {

            let noteItem = e.target.parentElement.previousElementSibling;

            if (noteItem.className == "note-item-toggleNo") {

                noteItem.className = "note-item-toggleYes";
                
            } else {
                noteItem.className = "note-item-toggleNo";
            }
        }

    }

}

function deleteSingleNote(e) {
    if (e.target.className === "note-delete") {

        if (confirm("Do you ant to delete this note?")) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

function deleteAll() {
    if (noteSection.children.length == 0) {
        alert("There is nothing to delete.")

    } else {
        if (confirm("Do you want to delete all notes?")) {
            noteSection.innerHTML = "";
        }
    }

}

function openClock() {
    if (clockContainerMobile.style.display == "flex") {

        clockContainerMobile.style.display = "none";
        counterContainer.style.display = "flex"

    } else {

        clockContainerMobile.style.display = "flex";
        counterContainer.style.display = "none";
    };

}


function clockDisplayNone() {

    if (window.innerWidth > 615) {

        clockContainerMobile.style.display = "none";
        counterContainer.style.display = "flex";
    }

}
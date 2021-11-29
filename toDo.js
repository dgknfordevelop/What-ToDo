let userInput = document.querySelector(".note-input");
let addButton = document.querySelector(".note-add-button");
let noteSection = document.querySelector(".main-note-section");
let deleteSingleNote = document.querySelector(".note-delete");
let deleteAll = document.querySelector(".delete-all-container");

addButton.addEventListener("click", addNote)

function addNote(){

    let newNoteLine = document.createElement("div");
    let newLineAttribute = document.createAttribute("class");
    newLineAttribute.value = "note-line";
    newNoteLine.setAttributeNode(newLineAttribute)


    let newListItem = document.createElement("div");
    newListItem.textContent = userInput.value;
    let newItemAttribute = document.createAttribute("class");
    newItemAttribute.value = "note-item";
    newListItem.setAttributeNode(newItemAttribute)

    newNoteLine.append(newListItem);
    noteSection.append(newNoteLine);



}


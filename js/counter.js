let counterNumber = document.querySelector(".counter-number");
let plusMinus = document.querySelector(".plus-minus-container");
let resetButton = document.querySelector(".reset-button");

plusMinus.addEventListener("click", changeNumber);
resetButton.addEventListener("click", resetNumber);

function changeNumber(plusButton){
    if(plusButton.target.className == "far fa-plus-square"){

        let IncrementNum = Number(counterNumber.textContent) + 1;
        counterNumber.textContent = IncrementNum;

    } else if(plusButton.target.className == "far fa-minus-square"){

        let IncrementNum = Number(counterNumber.textContent) - 1;
        counterNumber.textContent = IncrementNum;
    }
}

function resetNumber(){
    counterNumber.textContent = 0;
}
let hoursBox = document.querySelector(".hours");
let minutesBox = document.querySelector(".minutes");
let secondsBox = document.querySelector(".seconds");

function timeSet(){
    
let digitalDate = new Date();
let digitalHours = digitalDate.getHours();
let digitalMinutes = digitalDate.getMinutes();
let digitalSeconds = digitalDate.getSeconds();

    if (digitalHours > 0 && digitalHours < 10) {
        hoursBox.textContent = `0${digitalSeconds}`;
    } else {
        hoursBox.textContent = digitalHours;
    };

    if (digitalMinutes > 0 && digitalMinutes < 10) {
        minutesBox.textContent = `0${digitalSeconds}`;
    } else {
        minutesBox.textContent = digitalMinutes;
    };

    if (digitalSeconds > 0 && digitalSeconds < 10) {
        secondsBox.textContent = `0${digitalSeconds}`;
    } else {
        secondsBox.textContent = digitalSeconds;
    }

}

setInterval(timeSet, 1000);

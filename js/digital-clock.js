let hoursBox = document.querySelectorAll(".hours");
let minutesBox = document.querySelectorAll(".minutes");
let secondsBox = document.querySelectorAll(".seconds");

function timeSet() {

    let digitalDate = new Date();
    let digitalHours = digitalDate.getHours();
    let digitalMinutes = digitalDate.getMinutes();
    let digitalSeconds = digitalDate.getSeconds();

    for (let i = 0; i < hoursBox.length; i++) {

        if (digitalHours >= 0 && digitalHours < 10) {
            hoursBox[i].textContent = `0${digitalHours} :`;
        } else {
            hoursBox[i].textContent = `${digitalHours} :`;
        };

        if (digitalMinutes >= 0 && digitalMinutes < 10) {
            minutesBox[i].textContent = `0${digitalMinutes} :`;
        } else {
            minutesBox[i].textContent = `${digitalMinutes} :`;
        };

        if (digitalSeconds >= 0 && digitalSeconds < 10) {
            secondsBox[i].textContent = `0${digitalSeconds}`;
        } else {
            secondsBox[i].textContent = `${digitalSeconds}`;
        };
    }


}

setInterval(timeSet, 1000);
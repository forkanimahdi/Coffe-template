//* declaration de variables
let hours = document.querySelector(".hours");
let minuts = document.querySelector(".minuts");
let openText = document.querySelector(".open-text");







const timing = () => {
    let currentHour = new Date().getHours();
    let currentMinut = new Date().getMinutes();


    if (currentMinut < 10) {
        currentMinut = "0" + currentMinut
    }else if (currentHour < 10) {
        currentHour = "0" + currentHour
    }else if (currentHour < 08) {
        openText.textContent = "Closed"
    }

    hours.textContent = currentHour;
    minuts.textContent = currentMinut
}

setInterval(() => {
    timing()
}, 1000);
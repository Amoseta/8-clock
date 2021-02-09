/*
reikalavimai:
- rasti vieta/elementa;
- istraukti skaiciu;
- kas sekunde ta skaiciu mazinti iki nulio;
- pasiekus nuli - parasyti FINITO
*/

/*let number = 0; - global JS

function counter(selector) {
    const DOM = document.querySelector(selector);
    const number = parseFloat(DOM.innerText);

    setTimeout(showMeNumber, 3000);
}
function showMeNumber() {
    console.log(number);
}


export { counter }*/

/* function counter(selector) {
    const DOM = document.querySelector(selector);
    const number = parseInt(DOM.innerText);

    setTimeout(function () {
        showMeNumber(number);
    },3000);
}
function showMeNumber(num) {
    console.log(num);
}


export { counter }*/

function counter(selector) {
    const DOM = document.querySelector(selector);
    let number = parseInt(DOM.innerText);

    const timer = setInterval(function () {
        DOM.innerText = number;
        number--;
        if (number < 0) {
            clearInterval(timer);
            DOM.innerText = 'FINITO';
        }
    }, 500);
}

export { counter }
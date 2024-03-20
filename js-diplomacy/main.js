'use strict';

// create a color change function
function changeColor() {
    const colorChangeElements = document.querySelectorAll('.color-change');

    // loop through all elements and change color
    for (const element of colorChangeElements) {
        element.classList.add('red');
    }
}

// prevent default form behavior with a function
function validateNumber(event) {
    // prevent default behavior until input checks below have run
    event.preventDefault();

    // check user number input and if a number and less than 10, allow submission
    const numberInput = document.querySelector('#number-input');
    const userNumber = Number(numberInput.value);

    const formFeedback = document.querySelector('#formFeedback');
    if (isNaN(userNumber) || userNumber >= 10) {
        formFeedback.innerText = 'Please enter a smaller number.';
    } else {
        formFeedback.innerText = 'You are good to go!';
    }

// add event handlers
document.querySelector('.color-changer').addEventListener('click', changeColor);
document.querySelector('.number-form').addEventListener('submit', validateNumber);

}
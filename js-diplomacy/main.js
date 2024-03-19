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
function validateNumber() {
    
}
"use strict";


/* ---SIDE-MENU--- */

document.querySelector('.burger').addEventListener('click', function (event) {
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    event.stopPropagation();
})

let click = new Event("click");
document.documentElement.addEventListener("click", function (e) {
    const sidebar = document.querySelector('.header__menu');
    if (sidebar.classList.contains('active')) {
        document.querySelector('.burger span').classList.toggle('active');
        document.querySelector('.header__menu').classList.toggle('active');
    }
})





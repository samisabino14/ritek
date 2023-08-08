let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

let menuService = document.querySelector("#menu-iconService");
let navlistService = document.querySelector(".navlistService");

let eyeOn = document.querySelector("#eyeOn");
let eyeOff = document.querySelector("#eyeOff");

eyeOn.style.display = 'none';

menu.onclick = () => {

    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

menuService.onclick = () => {

    menuService.classList.toggle('bx-x');
    navlistService.classList.toggle('open');
}

eyeOn.onclick = () => {

    eyeOn.style.display = 'none';
    eyeOff.style.display = 'block';
}

eyeOff.onclick = () => {

    eyeOn.style.display = 'block';
    eyeOff.style.display = 'none';}

const sr = ScrollReveal({

    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('content-text', {
    delay: 200,
    origin: 'top'
});
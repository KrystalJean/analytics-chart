const usHover = document.getElementById('us');
const usBars = document.querySelectorAll('.us');

const canadaHover = document.getElementById('canada');
const canadaBars = document.querySelectorAll('.canada');

const australiaHover = document.getElementById('australia');
const australiaBars = document.querySelectorAll('.australia');

const chinaHover = document.getElementById('china');
const chinaBars = document.querySelectorAll('.china');

// UNITED STATES
function highlightUS() {
    canadaBars.forEach(canadaBar => {
        canadaBar.classList.add('transparent');
    });
    australiaBars.forEach(australiaBar => {
        australiaBar.classList.add('transparent');
    });
    chinaBars.forEach(chinaBar => {
        chinaBar.classList.add('transparent');
    });
}

function unhighlightUS() {
    canadaBars.forEach(canadaBar => {
        canadaBar.classList.remove('transparent');
    });
    australiaBars.forEach(australiaBar => {
        australiaBar.classList.remove('transparent');
    });
    chinaBars.forEach(chinaBar => {
        chinaBar.classList.remove('transparent');
    });
}

usHover.addEventListener('mouseover', highlightUS);
usHover.addEventListener('mouseout', unhighlightUS);


// CANADA
function highlightCanada() {
    usBars.forEach(usBar => {
        usBar.classList.add('transparent');
    });
    australiaBars.forEach(australiaBar => {
        australiaBar.classList.add('transparent');
    });
    chinaBars.forEach(chinaBar => {
        chinaBar.classList.add('transparent');
    });
}

function unhighlightCanada() {
    usBars.forEach(usBar => {
        usBar.classList.remove('transparent');
    });
    australiaBars.forEach(australiaBar => {
        australiaBar.classList.remove('transparent');
    });
    chinaBars.forEach(chinaBar => {
        chinaBar.classList.remove('transparent');
    });
}
canadaHover.addEventListener('mouseover', highlightCanada);
canadaHover.addEventListener('mouseout', unhighlightCanada);

// AUSTRALIA
function highlightAustralia() {
    canadaBars.forEach(canadaBar => {
        canadaBar.classList.add('transparent');
    });
    usBars.forEach(usBar => {
        usBar.classList.add('transparent');
    });
    chinaBars.forEach(chinaBar => {
        chinaBar.classList.add('transparent');
    });
}

function unhighlightAustralia() {
    canadaBars.forEach(canadaBar => {
        canadaBar.classList.remove('transparent');
    });
    usBars.forEach(usBar => {
        usBar.classList.remove('transparent');
    });
    chinaBars.forEach(chinaBar => {
        chinaBar.classList.remove('transparent');
    });
}

australiaHover.addEventListener('mouseover', highlightAustralia);
australiaHover.addEventListener('mouseout', unhighlightAustralia);

// CHINA
function highlightChina() {
    canadaBars.forEach(canadaBar => {
        canadaBar.classList.add('transparent');
    });
    australiaBars.forEach(australiaBar => {
        australiaBar.classList.add('transparent');
    });
    usBars.forEach(usBar => {
        usBar.classList.add('transparent');
    });
}

function unhighlightChina() {
    canadaBars.forEach(canadaBar => {
        canadaBar.classList.remove('transparent');
    });
    australiaBars.forEach(australiaBar => {
        australiaBar.classList.remove('transparent');
    });
    usBars.forEach(usBar => {
        usBar.classList.remove('transparent');
    });
}

chinaHover.addEventListener('mouseover', highlightChina);
chinaHover.addEventListener('mouseout', unhighlightChina);

let body = document.querySelector('body');
let button = document.querySelector('button');

button.addEventListener('click', ()=> {
    let hexCode = '#' + Math.floor(Math.random() * 16777200).toString(16)
    body.style.background = hexCode;
})


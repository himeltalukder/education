
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = function(){
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

menu.onscroll = function(){
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}
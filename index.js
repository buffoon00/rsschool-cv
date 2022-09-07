const navMenu = document.querySelector('.nav');
const burger = document.querySelector('.header_burger');
const navClose = document.querySelector('.header_nav_close');
const navItem = document.querySelectorAll('.nav-item');
//console.log(navItem);

burger.addEventListener('click', () =>{
    navMenu.classList.add('nav_active');
})
navClose.addEventListener('click', () => {
    navMenu.classList.remove('nav_active');
})
navItem.forEach((navItem) => {
    navItem.addEventListener('click', () =>{
        navMenu.classList.remove('nav_active');
    })
})  

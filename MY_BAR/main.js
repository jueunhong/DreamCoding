const toggleBtn = document.querySelector('.navbar_toggle');
const navbarMenu = document.querySelector('.navbar_menu');
const navbarIcons = document.querySelector('.navbar_icons');


function openToggle() {
    navbarMenu.classList.toggle('active');
    navbarIcons.classList.toggle('active');
   
};

toggleBtn.addEventListener('click', openToggle);
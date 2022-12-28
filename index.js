burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navlist = document.querySelector('.navlist')


burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-bar-resp');
    navlist.classList.toggle('v-bar-resp');
    navbar.classList.toggle('h-nav-resp')

})
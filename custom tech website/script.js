const menu = document.querySelector('#mobileMenu')
const menuLinks = document.querySelector ('.navbarMenu')

menu.addEventListener("click", function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}) 
const Logo = document.querySelector('.navbarLogo');
anime({
    targets: '.navbarLogo', strokeDashoffset[anime.strokeDashoffset, 0],
    easing: 'easeInOutSine', 
    duration:1500,
    direction: 'alternate',
    loop: true
})
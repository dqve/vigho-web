var myNav = document.getElementById('nav')
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.navContents')

hamburger.addEventListener('click', mobileMenu)

function mobileMenu() {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('activate')
}
const navLink = document.querySelectorAll('.mobile-list')

navLink.forEach((n) => n.addEventListener('click', closeMenu))

function closeMenu() {
  hamburger.classList.remove('active')
  navMenu.classList.remove('activate')
}

window.onscroll = function (e) {
  if (this.scrollY >= 700) {
    myNav.classList.add('scroll')
  } else {
    myNav.classList.remove('scroll')
  }
}

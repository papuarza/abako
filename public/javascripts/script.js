document.addEventListener('DOMContentLoaded', () => {

  let links = document.getElementsByClassName('header-link');
  let url = window.location.href;
  if (links) {
    for (i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
      if (links[i].href == url) links[i].classList.add("active");
    }
  }

  let openMenu = document.getElementById('openMenu');
  let menuMobile = document.getElementById('menuMobile');
  let closeMenu = document.getElementById('closeMenu');
  if(openMenu) {
    openMenu.addEventListener('click', () => {
      menuMobile.classList.remove('animate__fadeOutLeft');
      menuMobile.classList.add('animate__fadeInRight');
      menuMobile.style.display = 'flex';
    })
  }
  
  if(closeMenu) {
    closeMenu.addEventListener('click', () => {
      menuMobile.classList.remove('animate__fadeInRight');
      menuMobile.classList.add('animate__fadeOutLeft');
    })
  }

}, false);

document.addEventListener('DOMContentLoaded', () => {

  let links = document.getElementsByClassName('header-link');
  let url = window.location.href;
  if (links) {
    for (i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
      if (links[i].href == url) links[i].classList.add("active");
    }
  }

}, false);

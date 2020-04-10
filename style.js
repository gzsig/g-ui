window.onscroll = () => {
  stickNavbar();
};

const stickNavbar = () => {
  if (document.getElementById("navbar-sticky")) {
    let navbar = document.getElementById("navbar-sticky");
    let type = navbar.getAttribute('data-sticky')
    let sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
      navbar.classList.add(type);
    } else {
      navbar.classList.remove(type);
    }
  }
};

const openModal = (event) => {
  event.nextSibling.classList.remove("g-fade-out");
  document.querySelector("body").classList.add("g-hide-overflow");
};

const closeModal = (event) => {
  event.parentNode.parentNode.classList.add("g-fade-out");
  document.querySelector("body").classList.remove("g-hide-overflow");
};

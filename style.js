const openModal = (event) => {
  event.nextSibling.classList.remove("g-fade-out");
  document.querySelector("body").classList.add("g-hide-overflow");
};

const closeModal = (event) => {
  event.parentNode.parentNode.classList.add("g-fade-out");
  document.querySelector("body").classList.remove("g-hide-overflow");
};

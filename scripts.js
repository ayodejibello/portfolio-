let myDate = new Date();
myDate.getFullYear;
let dt = document.querySelector("#date");
dt.innerText = myDate.getFullYear();

let hamIcon = document.querySelector(".hmb-icon");
let mobileNav = document.querySelector(".mobile-nav");
hamIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

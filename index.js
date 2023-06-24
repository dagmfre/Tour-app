var navbar = document.querySelector(".navbar");
var login = document.querySelector(".login");
var logo = document.querySelector(".logo");

window.addEventListener("scroll", function() {
  if (window.scrollY > 40) {
    navbar.classList.add("visible");
    login.classList.add("visible");
    logo.classList.add("visible");
  } else {
    navbar.classList.remove("visible");
    login.classList.remove("visible");
    logo.classList.remove("visible");
  }
});

function scrollToContacts() {
  var contactsSection = document.getElementById("Service");
  contactsSection.scrollIntoView({ behavior: "smooth" });
}

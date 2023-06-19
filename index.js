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



/* http://www.addisababa.travel/images/yootheme/abuneb.jpg
                  src="https://img.sewasew.com/definitions/aa75b7b94ea54a18b6662433b9073f2e_689_442"
 */
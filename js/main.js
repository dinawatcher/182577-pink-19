// МЕНЮ

var body = document.body;
var nav = document.querySelector(".main-nav");
var toggle = document.querySelector(".main-nav__toggle");

body.classList.remove("no-js");

toggle.addEventListener("click", function() {
  nav.classList.toggle("main-nav--opened");
})

// ПОПАПЫ

var form = document.querySelector(".contest-form");
var popupError = document.querySelector(".popup--error");

if (form) {
  var input = form.getElementsByTagName("input");
  var firstName = form.querySelector("[name=first-name]");
  var lastName = form.querySelector("[name=last-name]");
  var email = form.querySelector("[name=email]");

  for (var i = 0; i < input.length; i++) {
    input[i].removeAttribute("required");
  }

  form.addEventListener("submit", function (evt) {
    if (!firstName.value || !lastName.value || !email.value) {
      evt.preventDefault();
      popupError.classList.add("popup--show");
    }
  });
}

if(popupError) {
  var popupErrorButton = popupError.querySelector(".popup__error-btn");

  popupErrorButton.addEventListener("click", function() {
    popupError.classList.remove("popup--show");
  })
}

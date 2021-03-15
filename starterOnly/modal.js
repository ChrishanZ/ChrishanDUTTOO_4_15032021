function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalExitBtn = document.querySelector(".close");
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// quit modal event
modalExitBtn.addEventListener("click", closeModal);

// quit modal form
function closeModal() {
  modalbg.style.display = "none";
}

const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const nombreConcours = document.getElementById("quantity");
const cgu = document.getElementById("checkbox1");
// const notifications = document.getElementById("checkbox2");

const emailRegex = (input) => {
  const regexEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  if (regexEmail.test(input)) {
    return true;
  } else {
    return false;
  }
};
let ville = "";
var radios = document.querySelectorAll('input[type=radio][name="location"]');
radios.forEach((radio) =>
  radio.addEventListener("change", () => (ville = radio.value))
);

console.log(document.querySelector("#first ~ span.errorForm"));

const formReady = (e) => {
  if (prenom.value.length === 0) {
    e.preventDefault();
    document
      .querySelector("#first ~ span.errorForm")
      .classList.replace("errorForm", "errorFormVisible");
  }
  if (nom.value.length === 0) {
    e.preventDefault();
    document
      .querySelector("#last ~ span.errorForm")
      .classList.replace("errorForm", "errorFormVisible");
  }
  if (emailRegex(email.value) === false) {
    e.preventDefault();
    document
      .querySelector("#email ~ span.errorForm")
      .classList.replace("errorForm", "errorFormVisible");
  }
  if (nombreConcours.value === "") {
    e.preventDefault();
    document
      .querySelector("#quantity ~ span.errorForm")
      .classList.replace("errorForm", "errorFormVisible");
  }
  if (ville === "") {
    e.preventDefault();
    document
      .querySelector("#location6 ~ span.errorForm")
      .classList.replace("errorForm", "errorFormVisible");
  }
  if (cgu.checked === false) {
    e.preventDefault();
    document
      .querySelector("#first ~ span.errorForm")
      .classList.replace("errorForm", "errorFormVisible");
  }
  if (
    prenom.value.length > 1 &&
    nom.value.length > 1 &&
    emailRegex(email.value) === true &&
    nombreConcours.value !== "" &&
    ville === "" &&
    cgu.checked === true
  ) {
    alert("All datas are valid!, send it to the server!");
    return true;
  }
};
const submitBtn = document.getElementsByClassName("btn-submit")[0];
submitBtn.addEventListener("click", formReady);

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
const radioButton1 = document.getElementById("location1");
const radioButton2 = document.getElementById("location2");
const radioButton3 = document.getElementById("location3");
const radioButton4 = document.getElementById("location4");
const radioButton5 = document.getElementById("location5");
const radioButton6 = document.getElementById("location6");
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

const formReady = (e) => {
  if (prenom.value.length === 0) {
    e.preventDefault();
    console.log(cgu.checked);
    alert("Veuillez entrer votre prénom");
    return false;
  }
  if (nom.value.length === 0) {
    e.preventDefault();
    alert("Veuillez entrer votre nom");
    return false;
  }
  if (emailRegex(email.value) === false) {
    e.preventDefault();
    alert("Veuillez entrer une adresse email correcte");
    return false;
  }
  if (nombreConcours.value === "") {
    e.preventDefault();
    alert("Veuillez entrer un nombre de concours");
    return false;
  }
  if (ville === "") {
    e.preventDefault();
    alert("Veuillez entrer une ville");
    return false;
  }
  if (cgu.checked === false) {
    e.preventDefault();
    alert("Veuillez accepter les CGU");
    return false;
  }
  alert("All datas are valid!, send it to the server!");
  return true;
};
const submitBtn = document.getElementsByClassName("btn-submit")[0];
submitBtn.addEventListener("click", formReady);

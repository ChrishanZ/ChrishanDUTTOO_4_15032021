function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// -------------------------------------- DOM ELEMENTS --------------------------------------
const modalbg = document.querySelector(".bground");
const modalSuccess = document.querySelector(".bground2");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalExitBtn = document.querySelector(".close");
const modalSuccessExitBtn = document.querySelector(".close2");

const quitSuccessBtn = document.getElementById("closeDivSuccess");

const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const nombreConcours = document.getElementById("quantity");
const cgu = document.getElementById("checkbox1");

console.log(prenom.value);

// -------------------------------------- MODAL --------------------------------------

const launchModal = () => {
  modalbg.style.display = "block";
};

const launchModalSuccess = () => {
  modalSuccess.style.display = "block";
};
const closeModalSucess = () => {
  modalSuccess.style.display = "none";
};

const closeModalSucessBtn = () => {
  modalSuccess.style.display = "none";
};

const closeModal = () => {
  modalbg.style.display = "none";
};

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalExitBtn.addEventListener("click", closeModal);
modalSuccessExitBtn.addEventListener("click", closeModalSucess);
quitSuccessBtn.addEventListener("click", closeModalSucessBtn);

// -------------------------------------- VALIDATION FORMULAIRE --------------------------------------

const checkTwoChar = (word, errorMsg, selector) => {
  if (word.value.length > 1) {
    document
      .getElementById(selector)
      .classList.replace("errorFormVisible", "errorForm");
    return true;
  } else {
    document.getElementById(selector).innerHTML = errorMsg;
    document
      .getElementById(selector)
      .classList.replace("errorForm", "errorFormVisible");
    return false;
  }
};

const emailRegex = (input) => {
  const regexEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  if (regexEmail.test(input)) {
    return true;
  } else {
    return false;
  }
};

const checkEmail = (word, errorMsg, selector) => {
  if (emailRegex(word.value)) {
    document
      .getElementById(selector)
      .classList.replace("errorFormVisible", "errorForm");
    return true;
  } else {
    document.getElementById(selector).innerHTML = errorMsg;
    document
      .getElementById(selector)
      .classList.replace("errorForm", "errorFormVisible");
    return false;
  }
};
const checkBirthdate = (word, errorMsg, selector) => {
  if (word.value !== "") {
    document
      .getElementById(selector)
      .classList.replace("errorFormVisible", "errorForm");
    return true;
  } else {
    document.getElementById(selector).innerHTML = errorMsg;
    document
      .getElementById(selector)
      .classList.replace("errorForm", "errorFormVisible");
    return false;
  }
};
const checkTournoi = (word, errorMsg, selector) => {
  if (word.value > 0 && word.value < 100) {
    document
      .getElementById(selector)
      .classList.replace("errorFormVisible", "errorForm");
    return true;
  } else {
    document.getElementById(selector).innerHTML = errorMsg;
    document
      .getElementById(selector)
      .classList.replace("errorForm", "errorFormVisible");
    return false;
  }
};
let ville = "";
var radios = document.querySelectorAll('input[type=radio][name="location"]');
radios.forEach((radio) =>
  radio.addEventListener("change", () => (ville = radio.value))
);
const checkVille = (errorMsg, selector) => {
  if (ville !== "") {
    document
      .getElementById(selector)
      .classList.replace("errorFormVisible", "errorForm");
    return true;
  } else {
    document.getElementById(selector).innerHTML = errorMsg;
    document
      .getElementById(selector)
      .classList.replace("errorForm", "errorFormVisible");
    return false;
  }
};
const checkCGU = (word, errorMsg, selector) => {
  if (word.checked) {
    document
      .getElementById(selector)
      .classList.replace("errorFormVisible", "errorForm");
    return true;
  } else {
    document.getElementById(selector).innerHTML = errorMsg;
    document
      .getElementById(selector)
      .classList.replace("errorForm", "errorFormVisible");
    return false;
  }
};
const formReady = (e) => {
  e.preventDefault();
  if (
    checkTwoChar(
      prenom,
      "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.",
      "prenom"
    ) &&
    checkTwoChar(
      nom,
      "Veuillez entrer 2 caractères ou plus pour le champ du Nom.",
      "nom"
    ) &&
    checkEmail(email, "Veuillez entrer un email correct.", "emailSpan") &&
    checkBirthdate(
      birthDate,
      "Veuillez entrer une date de naissance.",
      "birthdateSpan"
    ) &&
    checkTournoi(
      nombreConcours,
      "Veuillez entrer un nombre",
      "tournoiNumber"
    ) &&
    checkVille("Veuillez entrer une ville.", "villeTournoi") &&
    checkCGU(cgu, "Veuillez accepter les CGU", "cguSpan")
  ) {
    // return true;
    closeModal();
    launchModalSuccess();
  } else {
    return false;
  }
};
const submitBtn = document.getElementsByClassName("btn-submit")[0];
submitBtn.addEventListener("click", formReady);

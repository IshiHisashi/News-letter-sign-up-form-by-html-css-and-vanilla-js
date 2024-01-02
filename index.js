"use strict";
const container = document.querySelector(".container");
const success = document.querySelector(".success");
const btnSubsctibe = document.getElementById("btn-subscribe");
const btnDismiss = document.getElementById("btn-dismiss");
// variables for val
const val = document.getElementById("validationForm");
const label = document.getElementById("label");
const email = document.getElementById("email");
const pattern =
  /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/iu;
const errorDiv = document.getElementById("error");

// fnc for error
const createError = (el, errorMsg) => {
  const errorEl = document.createElement("span");
  errorEl.classList.add("error");
  errorEl.textContent = errorMsg;
  errorDiv.appendChild(errorEl);
};

btnSubsctibe.addEventListener("click", function (e) {
  e.preventDefault();

  //   email validation
  console.log(pattern.test(email.value));
  if (!pattern.test(email.value)) {
    email.style.border = "1px solid red";
    createError(email, "invalid email");
    e.preventDefault();
  } else {
    success.classList.remove("hidden");
    container.classList.add("hidden");
  }
});

btnDismiss.addEventListener("click", function (e) {
  e.preventDefault();
  container.classList.remove("hidden");
  success.classList.add("hidden");
});

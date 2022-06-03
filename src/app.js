const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");
const error = document.getElementById("error");
const form = document.getElementById("form");
const formWrapper = document.querySelector(".form-wrapper");
const submitBtn = document.getElementById("submit-btn");
const success = document.getElementById("success");
const successBtn = document.getElementById("success-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nameInput.value === "" || passwordInput.value === "") {
    error.innerHTML = "Fields are required!";
    setTimeout(() => error.remove(), 2000);
  } else {
    success.style.display = "block";
    formWrapper.style.display = "none";
    successBtn.addEventListener("click", (e) => {
      e.preventDefault();
      success.style.display = "none";
      formWrapper.style.display = "flex";
      nameInput.value = "";
      passwordInput.value = "";
    });
  }
});

console.log(passwordInput.length);

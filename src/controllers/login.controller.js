import Swal from "sweetalert2";
// ==========================================
// 🔑 LOGIN
// ==========================================

export function loginController() {
  loginListeners();
}

function loginListeners() {
  const formRegister = document.getElementById("register-form");
  const container = document.querySelector(".container");

  document
    .getElementById("btn-sign-in")
    .addEventListener("click", () => container.classList.remove("toggle"));

  document
    .getElementById("btn-sign-up")
    .addEventListener("click", () => container.classList.add("toggle"));

  document.querySelector("#formData").addEventListener("submit", (e) => {
    e.preventDefault();

    validateLogin();
  });

  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    createUser();
  });
}

async function validateLogin() {
  const { userName, passUser } = getLoginData();
  const hasErrors = validateEmptyFields(userName, passUser);

  if (hasErrors) return;

  const userFound = await loginFunction(userName, passUser);
  if (userFound.length > 0) {
    loginSuccess(userFound[0]);
  } else {
    loginError();
  }
}

function getLoginData() {
  const userName = document.getElementById("username");
  const passUser = document.getElementById("password");

  return {
    userName: userName.value.trim(),
    passUser: passUser.value.trim(),
  };
}

function validateEmptyFields(userField, passField) {
  const errorUsername = document.getElementById("errorUsername");
  const errorPassword = document.getElementById("errorPassword");
  errorUsername.classList.add("hidden");
  errorPassword.classList.add("hidden");

  let errorFound = false;
  if (!userField) {
    errorUsername.classList.remove("hidden");
    errorFound = true;
  }
  if (!passField) {
    errorPassword.classList.remove("hidden");
    errorFound = true;
  }
  return errorFound;
}

// function findUser(user, userName, passUser) {
//   return user.find((u) => u.userName === userName && u.userPass === passUser);
// }

function loginSuccess(userFound) {
  localStorage.setItem("user", JSON.stringify(userFound));
  
  Swal.fire({
    icon: "success",
    title: "Welcome!",
    text: `Bienvenido ${userFound.full_name}`,
    timer: 1500,
    showConfirmButton: false,
  }).then(() => {
    window.location.hash = "#home";
  });
}

function loginError() {
  Swal.fire({
    icon: "error",
    title: "Login failed",
    text: "User or password doesn't match",
  });
}

async function loginFunction(username, password) {
  const response = await fetch(
    `http://localhost:3000/users?username=${username}&password=${password}`,
  ); //Query params
  const data = await response.json();
  return data;
}

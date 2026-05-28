import Swal from "sweetalert2";

// ==========================================
// 🔑 LOGIN
// ==========================================
expo  rt function loginController() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const errorUsername = document.getElementById("errorUsername");
  const errorPassword = document.getElementById("errorPassword");
  loginListeners();
  errorUsername.classList.add("hidden");
  errorPassword.classList.add("hidden");

  let hayError = false;
  if (!username.value) {
    errorUsername.classList.remove("hidden");
    hayError = true;
  }
  if (!password.value) {
    errorPassword.classList.remove("hidden");
    hayError = true;
  }
  if (hayError) return;

  const userFound = userLogged.find(
    (u) => u.userName === username.value && u.userPass === password.value,
  );

  if (userFound) {
    localStorage.setItem("loggedUser", JSON.stringify(userFound));
    Swal.fire({
      icon: "success",
      title: "Welcome!",
      text: `Bienvenido ${userFound.userName}`,
      timer: 1500,
      showConfirmButton: false,
    }).then(() => navigate("home"));
  } else {
    Swal.fire({
      icon: "error",
      title: "Login failed",
      text: "User or password doesn't match",
    });
  }
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
    validarLogin();
  });
  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    createUser();
  });
}

// ==========================================
// 👤 REGISTER
// ==========================================
export function getFormData() {
  const formRegister = document.getElementById("register-form");
  const [name, email, pass] = Object.values(formRegister);
  return {
    cleanName: name.value.trim().toLowerCase(),
    cleanEmail: email.value.trim().toLowerCase(),
    passUser: pass.value,
  };
}

export function createUser() {
  const { cleanName, cleanEmail, passUser } = getFormData();

  const errorUserName = document.getElementById("errorUserName");
  const errorEmail = document.getElementById("errorEmail");
  const errorPassword = document.getElementById("errorPasswordUser");

  [errorUserName, errorEmail, errorPassword].forEach((el) =>
    el.classList.add("hidden"),
  );

  let hasError = false;
  if (!cleanName) {
    errorUserName.classList.remove("hidden");
    hasError = true;
  }
  if (!cleanEmail) {
    errorEmail.classList.remove("hidden");
    hasError = true;
  }
  if (!passUser) {
    errorPassword.classList.remove("hidden");
    hasError = true;
  }
  if (hasError) return;

  const nameExists = userLogged.find((u) => u.userName === cleanName);
  const emailExists = userLogged.find((u) => u.userEmail === cleanEmail);

  if (nameExists) {
    Swal.fire({
      icon: "error",
      title: "Username is already in use",
      text: "Enter another user name!",
    });
    return;
  }
  if (emailExists) {
    Swal.fire({
      icon: "error",
      title: "Email is already in use",
      text: "Enter another Email!",
    });
    return;
  }

  const newUser = {
    userName: cleanName,
    userEmail: cleanEmail,
    userPass: passUser,
    photoUser: "",
    descriptionUser: "",
    birthDate: "",
  };
  userLogged.push(newUser);
  localStorage.setItem("users", JSON.stringify(userLogged));
  Swal.fire({ title: "User successfully created!", icon: "success" });
}

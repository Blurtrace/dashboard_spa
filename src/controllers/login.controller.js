import Swal from "sweetalert2";
// ==========================================
// 🔑 LOGIN
// ==========================================

export function loginController(user) {
  loginListeners(user);
}

function loginListeners(user) {
  const formRegister = document.getElementById("register-form");
  const container = document.querySelector(".container");

  document.getElementById("btn-sign-in").addEventListener("click", () => container.classList.remove("toggle"));
    
  document.getElementById("btn-sign-up").addEventListener("click", () => container.classList.add("toggle"));
    
  document.querySelector("#formData").addEventListener("submit", (e) => {
    e.preventDefault();
    
    validateLogin(user);
  });

  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    createUser();

  });
}

function validateLogin(user) {
  const { userName, passUser } = getLoginData();
  const hasErrors = validateEmptyFields(userName, passUser);
  
  if (hasErrors) return;

  const userFound = findUser(user, userName, passUser);
  if(userFound){
    loginSuccess(userFound);
  } else{
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

function findUser(user, userName, passUser) {
    return user.find(
        (u) =>
            u.userName === userName &&
            u.userPass === passUser

    );
}

function loginSuccess(userFound) {
  if (userFound) {
    localStorage.setItem("user", JSON.stringify(userFound));
    Swal.fire({
      icon: "success",
      title: "Welcome!",
      text: `Bienvenido ${userFound.userName}`,
      timer: 1500,
      showConfirmButton: false,
    }).then(() => navigate("home"));
  }
}

function loginError() {
    Swal.fire({
      icon: "error",
      title: "Login failed",
      text: "User or password doesn't match",
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

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
import "./style.css";
import notFoundView from './views/notFoundView.js'
import homeView from './views/loginView.js'
import { loginController } from './controllers/login.controller.js'
import { userView } from './views/userView.js'
import renderLogin from "./views/loginView.js";

const appContainer = document.getElementById('app');

const router = {
  home: {
    view: homeView,
  },

  login: {
    view: renderLogin,
    controller: loginController
  },

  users: {
    view: userView
  }
}




// ==========================================
// 🚀 INICIAR LA APP
// ==========================================

async function renderRoute() {
  const user = JSON.parse(localStorage.getItem("user"))
  const path = window.location.hash.replace("#", "") || ""

  const route = router[path?path:"home"]

  if (!route) {
    appContainer.innerHTML = notFoundView()
    return
  }

  // LOGIN sin layout
  if (path === "login") {
    appContainer.innerHTML = route.view()

    if (route.controller) {
      await route.controller(user)
    }

    return
  }

  
  if(!user && path !== "login"){

    appContainer.innerHTML = router.login.view()
    await router.login.controller(user)

    return
  }

  // resto con layout
  appContainer.innerHTML = layout()

  document.getElementById("principal_content").innerHTML =
    route.view()

  if (route.controller) {
    await route.controller()
  }
}

document.addEventListener("DOMContentLoaded", renderRoute)

window.addEventListener("hashchange", renderRoute)
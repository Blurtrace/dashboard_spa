import "./style.css";
import notFoundView from './views/notFoundView.js'
import renderHome from './views/loginView.js'
import { loginController } from './controllers/login.controller.js'
import { userView } from './views/userView.js'
import renderLogin from "./views/loginView.js";
import homeView from './views/homeView.js'
import { homeController } from './controllers/home.controller.js'
import layout from "./components/layout.js";


const appContainer = document.getElementById('app');

const router = {
  home: {
    view: homeView,
    controller: homeController
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
      await route.controller()
    }

    return
  }

  
  if(!user && path !== "login"){

    appContainer.innerHTML = router.login.view()
    await router.login.controller()

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
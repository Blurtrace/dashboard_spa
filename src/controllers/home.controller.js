import Swal from "sweetalert2";
// ===================================
// 🏠 HOME 
// ===================================

export function homeController(user){
    const user = JSON.parse(localStorage.getItem("user"));

    const userInfo = document.getElementById("spanUserName");
    userInfo.innerText = user.full_name;
    homeListeners(user);
}
                       

function homeListeners(user) {  
    const hamburger = document.getElementById("menu-btn");

    hamburger.addEventListener("click", () => {

        const sidebar = document.getElementById("sidebar");

        sidebar.classList.toggle("hidden");

    });

    const cardContainer = document.getElementById("homeCard");

    user.forEach((user) => {
        

    })
}                          
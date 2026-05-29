export function homeController(){
    const user = JSON.parse(localStorage.getItem("user"));

    const userInfo = document.getElementById("spanUserName");
    userInfo.innerText = user.full_name;
}
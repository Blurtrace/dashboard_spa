
const views = [
  {
    name: "home",
    route: "#home",
    role: ["admin", "user"],
    icon: `<ion-icon name="home-outline"></ion-icon>`
  },
  {
    name: "users",
    route: "#users",
    role: ["admin"],
    icon: `<ion-icon name="people-outline"></ion-icon>`
  }
]

function renderRoute() {
  const user = JSON.parse(localStorage.getItem("user"));

  return views.filter(view =>
    view.role.includes(user.role)
  );
}

export default function layout() {
    const routes = renderRoute()
    return `<nav class="bg-blue-400/90 backdrop-blur-lg border-b border-blue-300 shadow-md h-20 px-6 flex items-center justify-between">
    <div class="flex items-center gap-4 cursor-pointer group">
        <button id="hamburger-btn" class="lg:hidden">
            <ion-icon name="menu-outline" class="text-2xl text-blue-100"></ion-icon>
        </button>
        <div class="w-14 h-14 rounded-2xl overflow-hidden shadow-lg border border-white/40 bg-white p-1">
            <img
                src="https://i.ibb.co/rRD3t6h1/logo.png"alt="Logo"
                class="w-full h-full object-cover rounded-xl group-hover:scale-110 transition duration-500">
        </div>
        <div>
            <h1 class="text-2xl font-extrabold text-white tracking-wide">
                Micaela
            </h1>
            <p class="text-sm text-blue-100 -mt-1">
                Admin Dashboard
            </p>
        </div>
    </div>
    <button class="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-2xl font-semibold shadow-md hover:scale-105 transition duration-300">
        <ion-icon name="log-out-outline" class="text-xl"></ion-icon>
        Sign out
    </button>
</nav>
<div class="flex  min-h-screen">
    <aside class="bg-white w-72 min-h-screen shadow-2xl border-r border-gray-200 p-6 flex flex-col justify-between hidden lg:flex">
        <div>
            <div class="flex flex-col items-center mb-10">
                <div>
                    <img
                        src="https://i.ibb.co/G4S14VBK/micaela.png"
                        alt="Profile"
                        class="w-full h-full object-cover">
                </div>
                <h2 class="mt-4 text-2xl font-bold text-gray-700">
                    Welcome
                </h2>
            </div>
            <div class="flex flex-col gap-4">
                ${routes.map((item) => {
                    return `
                    <a 
                        href="${item.route}" 
                        class="
                        flex items-center gap-3
                        px-4 py-3
                        rounded-2xl
                        text-gray-600
                        font-semibold
                        tracking-wide
                        hover:bg-blue-100
                        hover:text-blue-600
                        transition-all duration-300
                        hover:translate-x-1
                        group
                        "
                    >
                        <span class="text-xl group-hover:scale-110 transition duration-300">
                        ${item.icon}
                        </span>

                        <span>
                        ${item.name}
                        </span>
                    </a>
                    `
                }).join("")}
            </div>
        </div>
        <div class="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-center">
            <h3 class="text-blue-600 font-bold">
                Micaela Panel
            </h3>
            <p class="text-sm text-gray-500 mt-1">
                
            </p>
        </div>
    </aside>
    <main id="principal_content" class="flex-1 w-full p-8 bg-white-500 ">    
    </main>
</div>
`;
}

// export default function layout() {
//   const routes = renderRoute()
//   return `
//     <header class="flex flex-row bg-teal-500 justify-between w-full px-2 py-3">
//         <button class="bg-orange-200 p-2 rounded-full cursor-pointer">
//           User
//         </button>
//         <button class="bg-cyan-200 p-2 rounded-full cursor-pointer">Logout</button>
//       </header>
//       <section class="grid grid-cols-8">
//         <sidebar class="bg-sky-600 min-h-screen col-span-1">
//           <div class="flex flex-col ml-6">
//             ${routes.map((item) => {
//                 return item
//               }).join("")
//                 }
//             </div>
//         </sidebar>
//         <main 
//         id="principal_content" 
//         class="bg-gray-500 col-span-7 p-5">
//         </main>
//       </section>`
// }
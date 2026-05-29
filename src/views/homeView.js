export default function renderHome() {
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
                <a href="#"
                    class="flex items-center gap-4 bg-blue-500 text-white p-4 rounded-2xl shadow-md hover:scale-105 transition duration-300">
                    <ion-icon name="home-outline" class="text-2xl"></ion-icon>
                    <span class="font-semibold">
                        Home
                    </span>
                </a>
                <a href="#"
                    class="flex items-center gap-4 text-gray-600 hover:bg-blue-500 hover:text-white p-4 rounded-2xl transition duration-300">
                    <ion-icon name="people-outline" class="text-2xl"></ion-icon>
                    <span class="font-semibold">
                        Users
                    </span>
                </a>
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
    <main class="flex-1 w-full p-8 bg-white-500 ">
        <div class="bg-white rounded-2xl p-6 shadow-sm mb-8 border border-gray-200">
            <h2 class="text-3xl font-bold text-gray-800">Clan Micaela</h2>
            <p class="text-gray-500 mt-1">Welcome back! 🌟</p>
        </div>
    
    </main>
</div>
`;
}
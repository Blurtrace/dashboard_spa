export function userView() {
  const user = JSON.parse(localStorage.getItem("user"));

  return `
    <section class="w-full">

      <!-- HEADER -->
      <div class="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 mb-8">
        <div class="flex items-center justify-between flex-wrap gap-6">

          <div>
            <h1 class="text-4xl font-extrabold text-gray-800 tracking-tight">
              Tasks Panel
            </h1>

            <p class="text-gray-500 mt-2 flex items-center gap-2">
              Manage your Tasks

              <span class="text-blue-500 flex items-center text-lg">
                <ion-icon name="people-outline"></ion-icon>
              </span>
            </p>
          </div>

          <button
            class="
              flex items-center gap-2
              bg-blue-500 hover:bg-blue-600
              text-white
              px-5 py-3
              rounded-2xl
              font-semibold
              shadow-md
              hover:scale-105
              transition duration-300
            "
          >
            <ion-icon name="add-outline" class="text-xl"></ion-icon>
            Add new taks
          </button>

        </div>
      </div>

      <!-- USER CARD -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <div
          class="
            bg-white
            rounded-3xl
            border border-gray-200
            shadow-sm
            hover:shadow-xl
            transition-all duration-300
            p-6
          "
        >

          <div class="flex items-center gap-4">

            <div
              class="
                w-16 h-16
                rounded-2xl
                bg-blue-100
                flex items-center justify-center
                text-blue-500
                text-3xl
              "
            >
              <ion-icon name="person-outline"></ion-icon>
            </div>

            <div>
              <h2 class="text-xl font-bold text-gray-800">
                ${user.username}
              </h2>

              <p class="text-sm text-gray-500">
                ${user.email}
              </p>
            </div>

          </div>

          <div class="mt-6 flex items-center justify-between">

            <span
              class="
                px-4 py-1
                rounded-full
                bg-blue-100
                text-blue-600
                text-sm
                font-semibold
              "
            >
              ${user.role}
            </span>

            <button
              class="
                text-gray-500
                hover:text-blue-500
                text-2xl
                transition
              "
            >
              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </button>

          </div>

        </div>

      </div>

    </section>
  `;
}
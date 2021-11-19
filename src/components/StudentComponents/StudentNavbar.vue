<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-left space-x-1 w-full">
            <a
              href=""
              class="
                py-4
                px-2
                text-gray-900
                font-semibold
                hover:text-purple-900
                transition
                duration-300
              "
              >Archived Students</a
            >
            <a
              href=""
              class="
                py-4
                px-2
                text-gray-900
                font-semibold
                hover:text-purple-900
                transition
                duration-300
              "
              >Download Data</a
            >
          </div>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button">
            <svg
              class="w-6 h-6 text-purple-900 hover:text-purple-900"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="hidden mobile-menu">
      <ul class="">
        <li class="active">
          <a
            href=""
            class="
              block
              text-sm
              px-2
              py-4
              hover:bg-purple-900
              transition
              duration-300
            "
            >Attendance</a
          >
        </li>
        <li class="active">
          <a
            href=""
            class="
              block
              text-sm
              px-2
              py-4
              hover:bg-purple-900
              transition
              duration-300
            "
            >Download Data</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Batchnavbar",
};
</script>

<style>
</style>

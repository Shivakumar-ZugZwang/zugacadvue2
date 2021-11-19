<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-left space-x-1">
                <a
                    href=""
                    class="
                       py-4
                       px-2
                       text-green-500
                       border-b-4 border-green-500
                       font-semibold
                       "
                       >Home</a
                        >
            <!--<router-link to="/vue/viewlead" class="link" :class="{active: isActive}">-->
            <a
              href=""
              class="
                py-4
                px-2
                text-gray-500
                font-semibold
                hover:text-green-500
                transition
                duration-300
              "
              >
              <router-link to="/vue/viewlead" class="link" :class="{active: isActive}">
              View lead
               <slot />
              </router-link>
              </a
            >
            <!--  <slot />-->
            <!--</router-link>-->
            <router-link to="/vue/viewsegments" class="link" :class="{active: isActive}">
            <a
              href=""
              class="
                block
                py-4
                px-2
                text-gray-500
                font-semibold
                hover:text-green-500
                transition
                duration-300
              "
              >View segments</a
            >
              <slot />
            </router-link>
            <router-link to="/vue/viewtags" class="link" :class="{active: isActive}">
            <a
              href=""
              class="
                block
                py-4
                px-2
                text-gray-500
                font-semibold
                hover:text-green-500
                transition
                duration-300
              "
              >View tags</a
            >
              <slot />
            </router-link>
          </div>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button">
            <svg
              class="w-6 h-6 text-gray-500 hover:text-green-500"
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
            href="index.html"
            class="
              block
              text-sm
              px-2
              py-4
              text-white
              bg-green-500
              font-semibold
            "
            >Home</a
          >
        </li>
        <li>
          <a
            href="#services"
            class="
              block
              text-sm
              px-2
              py-4
              hover:bg-green-500
              transition
              duration-300
            "
            >View leads</a
          >
        </li>
        <li>
          <a
            href="#about"
            class="
              block
              text-sm
              px-2
              py-4
              hover:bg-green-500
              transition
              duration-300
            "
            >View segments</a
          >
        </li>
        <li>
          <a
            href="#contact"
            class="
              block
              text-sm
              px-2
              py-4
              hover:bg-green-500
              transition
              duration-300
            "
            >View tags</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Leadnavbar'
}
</script>

<style>
</style>

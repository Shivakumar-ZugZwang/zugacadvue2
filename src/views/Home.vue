<template>
  <div class="flex h-screen w-full bg-white" x-data="{openMenu:1}">
    <section
      class="
        h-screen
        w-screen
        bg-white
        flex flex-col-reverse
        sm:flex-row
        min-h-0 min-w-0
        overflow-hidden
      "
    >
      <sidebar />
      <Sidebar2 />

      <main
        class="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto"
      >
        <widget />

        <div class="flex flex-col flex-1 w-full overflow-y-auto">
          <div>
            <main class="relative z-0 flex-1 pb-8 px-6 bg-white">
              <Navbar />

              <router-view />
            </main>
          </div>
        </div>
        <footbar />
      </main>
    </section>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Sidebar2 from "@/components/OpenSidebar";
import widget from "@/components/Widgetbar";
import Footbar from "@/components/HomeComponents/Footer";
import Navbar from "@/components/Navbar";
export default {
  name: "Home",
  components: {
    Sidebar,
    Sidebar2,
    Navbar,
    widget,
    Footbar,
  },
};
</script>

<template>
  <aside
    class="
      animate__animated animate__fadeInLeft
      w-52
      relative
      z-0
      flex-shrink-0
      hidden
      px-4
      overflow-y-auto
      bg-gray-100
      sm:block
    "
    x-show="openMenu ==  4"
    x-on:click.away="openMenu = null"
    style="display: none"
  >
    <div class="mb-6">
      <!--Start Sidebar for open menu -->
      <div class="grid grid-cols-1 gap-4 grid-cols-2 mt-6">
        <!-- Start Navitem -->
        <studentdormant />
        <!-- End Navitem -->
        <!-- Start Navitem -->

        <studentsrenewal />
        <!-- End Navitem -->
        <!-- Start Navitem -->
      </div>
      <!--End Sidebar for open menu -->
    </div>
  </aside>
</template>

<script>
import Studentdormant from "@/components/ReportSidebarComponents/studentdormant";
import Studentsrenewal from "@/components/ReportSidebarComponents/studentsrenewal";

export default {
  name: "sidebar5",
  components: {
    Studentdormant,
    Studentsrenewal,
  },
};
</script>

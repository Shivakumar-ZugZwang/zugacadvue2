<template>
  <div>
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
      x-show="openMenu ==  1"
      x-on:click.away="openMenu = null"
      style="display: none"
    >
      <div class="mb-6">
        <div class="grid grid-cols-1 gap-4 grid-cols-2 mt-6">
          <dash />
        </div>
      </div>
    </aside>

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
      x-show="openMenu ==  2"
      x-on:click.away="openMenu = null"
      style="display: none"
    >
      <div class="mb-6">
        <div class="grid grid-cols-1 gap-4 grid-cols-2 mt-6">
          <AdminsDashboard />
          <adduser />
          <superUserlist />
          <adminlist />
          <coachlist />
        </div>
      </div>
    </aside>

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
      x-show="openMenu ==  3"
      x-on:click.away="openMenu = null"
      style="display: none"
    >
      <div class="mb-6">
        <div class="grid grid-cols-1 gap-4 grid-cols-2 mt-6">
          <studentlist />
          <addstudent />
          <studentdash />
        </div>
      </div>
    </aside>

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
        <div class="grid grid-cols-1 gap-4 grid-cols-2 mt-6">
          <batchlist />
          <addbatch />
          <batchstatus />
          <batchatt />
        </div>
      </div>
    </aside>

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
      x-show="openMenu ==  5"
      x-on:click.away="openMenu = null"
      style="display: none"
    >
      <div class="mb-6">
        <div class="grid grid-cols-1 gap-4 grid-cols-2 mt-6">
          <quizdash />
          <quizlist />
          <addquiz />
        </div>
      </div>
    </aside>

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
      x-show="openMenu ==  6"
      x-on:click.away="openMenu = null"
      style="display: none"
    >
      <div class="mb-6">
        <div class="grid grid-cols-1 gap-4 grid-cols-2 mt-6">
          <challengelist />
        </div>
      </div>
    </aside>

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
      x-show="openMenu ==  7"
      x-on:click.away="openMenu = null"
      style="display: none"
    >
      <div class="mb-6">
        <div class="grid grid-cols-1 gap-4 grid-cols-2 mt-6">
          <courselist />
        </div>
      </div>
    </aside>

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
      x-show="openMenu ==  8"
      x-on:click.away="openMenu = null"
      style="display: none"
    >
      <div class="mb-6">
        <div class="grid grid-cols-1 gap-4 grid-cols-2 mt-6">
          <lessonslist />
        </div>
      </div>
    </aside>

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
      x-show="openMenu ==  9"
      x-on:click.away="openMenu = null"
      style="display: none"
    >
      <div class="mb-6">
        <div class="grid grid-cols-1 gap-4 grid-cols-2 mt-6">
          <viewlead />
          <addlead />
          <viewsegment />
          <addsegments />
          <viewtag />
          <addtags />
        </div>
      </div>
    </aside>

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
      x-show="openMenu ==  10"
      x-on:click.away="openMenu = null"
      style="display: none"
    >
      <div class="mb-6">
        <div class="grid grid-cols-1 gap-4 grid-cols-2 mt-6">
          <studentdormant />
          <viewstudentdormant />
          <studentsrenewal />
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import Studentlist from "@/components/OpenSidebarComponents/studentlist";
import Addstudent from "@/components/OpenSidebarComponents/addstudent";
import Batchlist from "@/components/OpenSidebarComponents/batchlist";
import Addbatch from "@/components/OpenSidebarComponents/addbatch";
import Dash from "@/components/OpenSidebarComponents/dash";
import Batchstatus from "@/components/OpenSidebarComponents/batchstatus";
import Studentdash from "@/components/OpenSidebarComponents/studentdash";

import Adduser from "@/components/OpenSidebarComponents/adduser";
import SuperUserlist from "@/components/OpenSidebarComponents/superUserlist";
import Adminlist from "@/components/OpenSidebarComponents/adminlist";
import AdminsDashboard from "@/components/OpenSidebarComponents/admindash";
import Coachlist from "@/components/OpenSidebarComponents/coachlist";
import quizlist from "@/components/OpenSidebarComponents/quizlist";
import Challengelist from "@/components/OpenSidebarComponents/challengelist";
import Courselist from "@/components/OpenSidebarComponents/courselist";
import Viewlead from "@/components/OpenSidebarComponents/viewlead";
import Addlead from "@/components/OpenSidebarComponents/addlead";
import Viewsegment from "@/components/OpenSidebarComponents/viewsegment";
import Addsegments from "@/components/OpenSidebarComponents/addsegments";
import Viewtag from "@/components/OpenSidebarComponents/viewtag";
import Addtags from "@/components/OpenSidebarComponents/addtags";
import Lessonslist from "@/components/OpenSidebarComponents/lessonslist";
import quizdash from "@/components/OpenSidebarComponents/quizdash";
import addquiz from "@/components/OpenSidebarComponents/addquiz";
import Studentdormant from "@/components/OpenSidebarComponents/studentdormant";
import Viewstudentdormant from "@/components/OpenSidebarComponents/viewstudentdormant";
import Studentsrenewal from "@/components/OpenSidebarComponents/studentsrenewal";

export default {
  name: "sidebar2",
  components: {
    Studentlist,
    Addstudent,
    Batchlist,
    Addbatch,
    Dash,
    Batchstatus,
    Studentdash,
    Adduser,
    Adminlist,
    SuperUserlist,
    Coachlist,
    AdminsDashboard,
    quizlist,
    Challengelist,
    Courselist,
    Lessonslist,
    quizdash,
    addquiz,
    Viewlead,
    Addlead,
    Viewsegment,
    Addsegments,
    Viewtag,
    Addtags,
    Studentdormant,
    Studentsrenewal,
    Viewstudentdormant,
  },
};
</script>

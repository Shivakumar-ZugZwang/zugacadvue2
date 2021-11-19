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
    x-show="openMenu ==  2"
    x-on:click.away="openMenu = null"
    style="display: none"
  >
    <div class="mb-6">
      <!--Start Sidebar for open menu -->
      <div class="grid grid-cols-1 gap-4 grid-cols-2 mt-6">
        <!-- Start Navitem -->
        <addlead/>
        <!-- End Navitem -->
        <!-- Start Navitem -->
        <addsegments/>
        <!-- End Navitem -->
        <!-- Start Navitem -->
        <updatelead/>
        <!-- End Navitem -->
        <!-- Start Navitem -->
        <deletelead/>
        <!-- End Navitem -->
        <!-- Start Navitem -->
        <updatesegments/>
        <!-- End Navitem -->
        <!-- Start Navitem -->
        <deletesegments/>
        <!-- End Navitem -->
        <!-- Start Navitem -->
        <updatetag/>
        <!-- End Navitem -->
        <!-- Start Navitem -->
        <deletetag/>
        <!-- End Navitem -->
        <!-- Start Navitem -->
        <sendmail/>
        <!-- End Navitem -->
        <!-- Start Navitem -->
        <tags/>
        <!-- End Navitem -->
        <!-- Start Navitem -->
        <viewlead/>
        <!-- End Navitem -->
        <!-- Start Navitem -->
        <viewsegment/>
        <!-- End Navitem -->
        <!-- Start Navitem -->
        <viewtag/>
        <!-- End Navitem -->
        <!-- Start Navitem -->
        <!--<leaddashboard/>-->
        

      </div>
      <!--End Sidebar for open menu -->
    </div>
  </aside>
</template>

<script>
import Addlead from "@/components/LeadSidebarComponents/addlead"
import Addsegments from "@/components/LeadSidebarComponents/addsegments"
import Updatelead from "@/components/LeadSidebarComponents/updatelead"
import Deletelead from "@/components/LeadSidebarComponents/deletelead"
import Updatesegments from "@/components/LeadSidebarComponents/updatesegments"
import Deletesegments from "@/components/LeadSidebarComponents/deletesegments"
import Updatetag from "@/components/LeadSidebarComponents/updatetag"
import Deletetag from "@/components/LeadSidebarComponents/deletetag"
import Sendmail from "@/components/LeadSidebarComponents/sendmail"
import Tags from "@/components/LeadSidebarComponents/tags"
import Viewlead from "@/components/LeadSidebarComponents/viewlead"
import Viewsegment from "@/components/LeadSidebarComponents/viewsegment"
import Viewtag from "@/components/LeadSidebarComponents/viewtag"
// import Dashboard from "@/components/LeadSidebarComponents/leaddashboard"

export default{
  name: "sidebar4",
  components:{
      Addlead,
      Addsegments,
      Updatelead,
      Deletelead,
      Updatesegments,
      Deletesegments,
      Updatetag,
      Deletetag,
      Sendmail,
      Tags,
      Viewlead,
      Viewsegment,
      Viewtag,
      // Dashboard
  }
};
</script>

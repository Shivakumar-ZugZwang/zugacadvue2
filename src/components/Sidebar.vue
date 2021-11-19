<template>
  <aside class="sm:h-full sm:w-16 w-full h-12 bg-gray-800 text-gray-200">
    <ul class="text-center flex flex-row sm:flex-col w-full">
      <li class="h-14 border-b border-gray-900 hidden sm:block">
        <logo />
      </li>

        <li class="sm:border-b border-gray-900 flex-1 sm:w-full
                   transform 
                   ease-in-out
                   transform hover:-translate-x+20
                   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
                   transition duration-500
                   hover:scale-125" 
                   x-on:click="openMenu !== 1 ? (openMenu = 1) : (openMenu = null)"
                   title="Dashboard">
          <dashboard />
        </li>
      
        <li class="sm:border-b border-gray-900 flex-1 sm:w-full
                   transform 
                   ease-in-out
                   transform hover:-translate-x+20
                   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
                   transition duration-500
                   hover:scale-125"
                   x-on:click="openMenu !== 2 ? (openMenu = 2) : (openMenu = null)"
                   title="Admin">
          <admins/>
        </li>

        <li class="sm:border-b border-gray-900 flex-1 sm:w-full
                   transform 
                   ease-in-out
                   transform hover:-translate-x+20
                   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
                   transition duration-500
                   hover:scale-125"
                   x-on:click="openMenu !== 3 ? (openMenu = 3) : (openMenu = null)"
                   title="Students">
          <students/>
        </li>

        <li class="sm:border-b border-gray-900 flex-1 sm:w-full
                   transform 
                   ease-in-out
                   transform hover:-translate-x+20
                   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
                   transition duration-500
                   hover:scale-125"
                   x-on:click="openMenu !== 4 ? (openMenu = 4) : (openMenu = null)" 
                   title="Batch">
          <batch/>
        </li>
      
        <li class="sm:border-b border-gray-900 flex-1 sm:w-full
                   transform 
                   ease-in-out
                   transform hover:-translate-x+20
                   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
                   transition duration-500
                   hover:scale-125" 
                   x-on:click="openMenu !== 5 ? (openMenu = 5) : (openMenu = null)"
                   title="Quiz">
          <quiz/>
        </li>
      
        <li class="sm:border-b border-gray-900 flex-1 sm:w-full
                   transform 
                   ease-in-out
                   transform hover:-translate-x+20
                   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
                   transition duration-500
                   hover:scale-125"
                   x-on:click="openMenu !== 6 ? (openMenu = 6) : (openMenu = null)"
                   title="Challenges">
          <challenges/>
        </li>
      
        <li class="sm:border-b border-gray-900 flex-1 sm:w-full
                   transform 
                   ease-in-out
                   transform hover:-translate-x+20
                   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
                   transition duration-500
                   hover:scale-125"
                   x-on:click="openMenu !== 7 ? (openMenu = 7) : (openMenu = null)"
                   title="Courses">
          <courses/>
        </li>
      
        <li class="sm:border-b border-gray-900 flex-1 sm:w-full
                   transform 
                   ease-in-out
                   transform hover:-translate-x+20
                   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
                   transition duration-500
                   hover:scale-125"
                   x-on:click="openMenu !== 8 ? (openMenu = 8) : (openMenu = null)"
                   title="Lessons">
          <lessons/>
        </li>
        
        <li class="sm:border-b border-gray-900 flex-1 sm:w-full
                   transform 
                   ease-in-out
                   transform hover:-translate-x+20
                   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
                   transition duration-500
                   hover:scale-125"
                  x-on:click="openMenu !== 9 ? (openMenu = 9) : (openMenu = null)"
                  title="Leads">
          <leads/>
        </li>
        
        <li class="sm:border-b border-gray-900 flex-1 sm:w-full
                   transform 
                   ease-in-out
                   transform hover:-translate-x+20
                   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
                   transition duration-500
                   hover:scale-125"
                  x-on:click="openMenu !== 10 ? (openMenu = 10) : (openMenu = null)"
                  title="Reports">
          <reports/>
        </li> 

      
      <li class="sm:border-b border-gray-900 flex-1 sm:w-full
                   transform 
                   ease-in-out
                   transform hover:-translate-x+20
                   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
                   transition duration-500
                   hover:scale-125" title="Register">
        <register/>
      </li>
      
      <li class="sm:border-b border-gray-900 flex-1 sm:w-full
                   transform 
                   ease-in-out
                   transform hover:-translate-x+20
                   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
                   transition duration-500
                   hover:scale-125" title="Login">
        <login/>
      </li>
    </ul>
  </aside>
</template>

<script>
import Logo from "@/components/Logo";
import Dashboard from "@/components/SidebarComponents/dashboard"
import Admins from "@/components/SidebarComponents/admins"
import Students from "@/components/SidebarComponents/students"
import Batch from "@/components/SidebarComponents/batch"
import Quiz from "@/components/SidebarComponents/quiz"
import Challenges from "@/components/SidebarComponents/challenges"
import Courses from "@/components/SidebarComponents/courses"
import Lessons from "@/components/SidebarComponents/lessons"
import Leads from "@/components/SidebarComponents/leads"
import Reports from "@/components/SidebarComponents/reports"
import Register from "@/components/SidebarComponents/register"
import Login from "@/components/SidebarComponents/login"

export default {
  name: "Sidebar",
  components: {
    Logo,
    Dashboard,
    Admins,
    Students,
    Batch,
    Quiz,
    Challenges,
    Courses,
    Lessons,
    Leads,
    Register,
    Login,
    Reports
  }
};
</script>

<style></style>

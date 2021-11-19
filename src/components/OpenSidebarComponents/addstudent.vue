<template>
  <router-link to="/vue/AddStudent" class="link" :class="{ active: isActive }">
    <div
      class="
        p-2
        flex flex-col
        items-center
        bg-white
        rounded-md
        justify-center
        shadow-xl
        cursor-pointer
      "
    >
      <div class="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
        <i class="fas fa-user-plus fa-sm text-indigo-600"></i>
      </div>
      <p class="text-xs mt-1 text-center font-semibold">Add Student</p>
    </div>

    <slot />
  </router-link>
</template>
<script>
export default {
  name: "Addstudent",
};
</script>
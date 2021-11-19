<template>
  <router-link to="/vue/viewsegment" class="link" :class="{ active: isActive }">
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
        transform
        ease-in-out
        transform
        hover:-translate-x+20
        transition-timing-function:
        cubic-bezier(0.4,
        0,
        0.2,
        1)
        transition
        duration-500
        hover:scale-125
      "
    >
      <div class="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
        <i
          class="
            fas
            fa-eye fa-sm
            text-indigo-600
            transform
            ease-in-out
            transform
            hover:-translate-x+20
            transition-timing-function:
            cubic-bezier(0.4,
            0,
            0.2,
            1)
            transition
            duration-500
            hover:scale-125
          "
        ></i>
      </div>

      <p class="text-xs mt-1 text-center font-semibold">View segment</p>
    </div>
    <slot />
  </router-link>
</template>



<script>
export default {
  name: "Viewsegment",
};
</script>
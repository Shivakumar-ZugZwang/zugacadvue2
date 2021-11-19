<template>
  <a
    id="page-icon"
    @click="logout"
    class="h-full w-full hover:bg-gray-700 block p-3"
  >
    <i
      class="
        fas
        fa-sign-in-alt
        fill-current
        transform
        hover:translate-x-2
        transition-transform
        ease-in
        duration-200
      "
    ></i>
  </a>
</template>

<script>
export default {
  name: "Login",
  methods: {
    logout() {
      this.$session.destroy();
      this.$router.push("/");
      this.$forceUpdate();
    },
  },
};
</script>
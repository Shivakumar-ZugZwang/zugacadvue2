<template>
  <!-- <div v-if="this.$session.exists()"> -->
  <home />
  <!-- </div> -->
  <!-- <div v-else> -->
  <!-- <login /> -->
  <!-- </div> -->
</template>

<script>
import Home from "@/views/Home";
// import Login from "@/components/Login";

export default {
  name: "App",
  components: {
    Home,
    // Login,
  },
};
</script>

<style lang="scss">
</style>

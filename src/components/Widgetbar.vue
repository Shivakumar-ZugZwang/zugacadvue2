<template>
  <nav class="border-b bg-white px-6 py-2 flex items-center min-w-0 h-14">
    <h1 class="font-semibold text-lg"></h1>
    <span>
      <summercamp/>
    </span>
    <span class="flex-1"></span>

    <span class="mr-2 py-2 px-4">
      <subscribe/>
    </span>
    <span class="px-2">
      <account/>
    </span>
  </nav>
</template>

<script>
import Subscribe from "@/components/WidgetbarComponents/subscribe"
// import Message from "@/components/WidgetbarComponents/message"
// import Notification from "@/components/WidgetbarComponents/notification"
import Account from "@/components/WidgetbarComponents/account"
import Summercamp from "@/components/WidgetbarComponents/summercamp"
export default {
  name: "Navbar",
  components:{
    Subscribe,
    // Message,
    // Notification,
    Account,
    Summercamp
  },
  methods: {
    showMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style></style>

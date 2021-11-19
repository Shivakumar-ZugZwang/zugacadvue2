
<template>
  <center>
    <form
      class="p-4 shadow-md rounded-lg text-left mt-3"
      style="max-width: 500px"
    >
      <center>
        <h4
          class="text-3xl font-normal leading-normal mt-0 mb-2 text-purple-800"
        >
          Update Admin
        </h4>
      </center>

      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="username"
          >User Name</label
        >
        <input
          class="
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="text"
          placeholder="Enter User Name"
          id="username"
          name="username"
          v-model="list.username"
        />
      </div>

      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="email">Email</label>
        <input
          class="
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          v-model="list.email"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="password"
          >Password</label
        >
        <input
          class="
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          v-model="list.password"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="confirm password"
          >Confirm Password</label
        >
        <input
          class="
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="password"
          placeholder="Confirm Password"
          id="confirm"
          name="confirm"
          v-model="list.confirm"
        />
      </div>

      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="first_name"
          >First Name</label
        >
        <input
          class="
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="text"
          placeholder="Enter Your First Name"
          id="first_name"
          name="first_name"
          v-model="list.first_name"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="last_name"
          >Last Name</label
        >
        <input
          class="
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="text"
          placeholder="Enter Your Last Name"
          id="last_name"
          name="last_name"
          v-model="list.last_name"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="phone">Phone</label>
        <input
          class="
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="text"
          placeholder="Enter Your Phone Number"
          id="phone"
          name="phone"
          v-model="list.phone"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="status"
          >Select Status</label
        >
        <select
          class="
            from-select
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="text"
          placeholder="Select Status"
          id="status"
          name="status"
          v-model="list.status"
        >
          <option>Select Status</option>
          <option>Active</option>
          <option>Closed</option>
          <option>Dormant</option>
        </select>
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="type"
          >Select Type</label
        >
        <select
          class="
            from-select
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="text"
          placeholder="Select type"
          id="type"
          name="type"
          v-model="list.type"
        >
          <option>Select Type</option>
          <option>FullTime</option>
          <option>partTime</option>
        </select>
      </div>

      <div class="text-center mt-3">
        <button
          @click.prevent="updateAdmin()"
          class="
            px-7
            py-2
            mx-2
            text-white
            rounded
            text-center
            bg-purple-600
            font-bold
            text-white
          "
        >
          Add User
        </button>
      </div>
    </form>
  </center>
</template>

<script>
import axios from "axios";

export default {
  name: "update",
  data() {
    return {
      list: {
        username: "",
        email: "",
        password: "",
        confirm: "",
        first_name: "",
        last_name: "",
        phone: "",
        type: "",
        status: "",
      },
    };
  },
  methods: {
    async updateAdmin() {
      axios
        .put(
          `https://3.7.128.140:9083/admin/api/updateSuperUser/${this.$route.params.username}`,
          {
            username: this.list.username,
            email: this.list.email,
            password: this.list.password,
            confirm: this.list.confirm,
            first_name: this.list.first_name,
            last_name: this.list.last_name,
            phone: this.list.phone,
            type: this.list.type,
            status: this.list.status,
          }
        )
        .then((res) => {
          if (res.status == 200) {
            this.$router.push({ path: "/vue/admin" });
          }
        });
    },
  },
  async mounted() {
    const result = await axios.get(
      `https://3.7.128.140:9083/admin/api/${this.$route.params.username}`
    );
    this.list = result.data.userData;
  },
};
</script>

<template>
  <div>
    <center>
      <h4 class="text-3xl leading-normal mt-0 mb-2 text-black-800">
        Leads Details
      </h4>
    </center>
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div
        class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
      >
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="
                  px-6
                  py-3
                  text-left text-sm
                  font-bold
                  text-gray-500
                  tracking-wider
                "
              >
                Details
              </th>
              <th
                scope="col"
                class="
                  px-6
                  py-3
                  text-left text-sm
                  font-bold
                  text-gray-500
                  tracking-wider
                "
              >
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">First Name</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700 text-sm
                    w-full
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="First Name"
                  id="first_name"
                  name="first_name"
                  v-model="list.first_name"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Last Name</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700 text-sm
                    w-full
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Last Name"
                  id="last_name"
                  name="last_name"
                  v-model="list.last_name"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Email</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700 text-sm
                    w-full
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Email"
                  id="email"
                  name="email"
                  v-model="list.email"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Mobile</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700 text-sm
                    w-full
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Phone Number"
                  id="phone_number"
                  name="phone_number"
                  v-model="list.phone_number"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Child Name</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700 text-sm
                    w-full
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Child Name"
                  id="child_name"
                  name="child_name"
                  v-model="list.child_name"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Age</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700 text-sm
                    w-full
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Age"
                  id="age"
                  name="age"
                  v-model="list.age"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Tag</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    text-sm
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Tag"
                  id="tags"
                  name="tags"
                  v-model="list.tags"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Date Created</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    font-bold
                    text-sm
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Date"
                  id="date_created"
                  name="date_created"
                  v-model="list.date_created"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Segment</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    font-bold
                    text-sm
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Segment"
                  id="segments"
                  name="segments"
                  v-model="list.segments"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Status</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    font-bold
                    text-sm
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Status"
                  id="status"
                  name="status"
                  v-model="list.status"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LeadsDetails",
  data() {
    return {
      list: {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        child_name: "",
        age: "",
        tags: "",
        date_created: "",
        segments: "",
        status: "",
      },
    };
  },
  async mounted() {
    const result = await axios.get(
      "https://3.7.128.140:9080/leads/api/viewLead/" +
        this.$route.params.email +
        "/" +
        this.$route.params.first_name
    );
    this.list = result.data.leadData;
  },
};
</script>
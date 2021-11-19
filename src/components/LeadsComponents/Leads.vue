<template>
  <div>
    <center>
      <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-purple-800">
        Leads Update
      </h4>
    </center>
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div
        class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
      >
        <center>
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-bold
                    text-gray-500
                    tracking-wider
                  "
                >
                  First Name
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-bold
                    text-gray-500
                    tracking-wider
                  "
                >
                  Last Name
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-bold
                    text-gray-500
                    tracking-wider
                  "
                >
                  Email
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-bold
                    text-gray-500
                    tracking-wider
                  "
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-bold
                    text-gray-500
                    tracking-wider
                  "
                >
                  Update
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="item in list" v-bind:key="item.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-bold text-gray-900">
                        <router-link
                          :to="
                            '/vue/updatelead/' + item.email + item.first_name
                          "
                        >
                          <a
                            href="#"
                            class="text-indigo-600 hover:text-indigo-900"
                            >{{ item.first_name }}</a
                          >
                        </router-link>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-gray-900">
                    {{ item.last_name }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-gray-900">
                    {{ item.email }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="
                      px-2
                      inline-flex
                      text-xs
                      leading-5
                      font-bold
                      rounded-full
                      bg-green-100
                      text-green-800
                    "
                    >{{ item.status }}</span
                  >
                </td>
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-right text-sm
                    font-bold
                  "
                >
                  <router-link
                    :to="'/vue/updatelead/' + item.email + item.first_name"
                  >
                    <i class="far fa-edit"></i>
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Update</a
                    >
                    <slot />
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "leads",
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    let result = await axios.get("https://3.7.128.140:9083/leads/api/leads");
    this.list = result.data.leads;
  },
};
</script>
<template>
  <div>
    <center>
      <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-black-800">
        Today's Ongoing Batches
      </h4>
    </center>
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <center>
        <table>
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="
                  px-6
                  py-3
                  text-center text-xs
                  font-bold
                  text-gray-500
                  tracking-wider
                "
              >
                Batch Name
              </th>
              <th
                scope="col"
                class="
                  px-6
                  py-3
                  text-center text-xs
                  font-bold
                  text-gray-500
                  tracking-wider
                "
              >
                Program
              </th>
              <th
                scope="col"
                class="
                  px-6
                  py-3
                  text-center text-xs
                  font-bold
                  text-gray-500
                  tracking-wider
                "
              >
                Zoom Account
              </th>
              <th
                scope="col"
                class="
                  px-6
                  py-3
                  text-center text-xs
                  font-bold
                  text-gray-500
                  tracking-wider
                "
              >
                Unit
              </th>
              <th
                scope="col"
                class="
                  px-6
                  py-3
                  text-center text-xs
                  font-bold
                  text-gray-500
                  tracking-wider
                "
              >
                Time
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="item in list" v-bind:key="item.id">
              <td class="px-6 py-4 whitespace-nowrap text-center">
                <div class="text-sm font-bold text-gray-900">
                  <router-link :to="'/vue/BatchDetails/' + item.batch_id">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      ><u>{{ item.name }}</u></a
                    >
                  </router-link>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center">
                <div class="text-sm font-bold text-gray-900">
                  {{ item.program }}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center">
                <div class="text-sm font-bold text-gray-900">
                  {{ item.zoom_account }}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center">
                <div class="text-sm font-bold text-gray-900">
                  {{ item.unit }}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center">
                <div class="text-sm font-bold text-gray-900">
                  {{ item.time }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  </div>
</template>
    
<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    let result = await axios.get("https://3.7.128.140:9083/api/home/SuperUser");
    this.list = result.data.batchData;
  },
};
</script>
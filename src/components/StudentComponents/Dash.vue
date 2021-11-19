<template>
  <div class="shadow-md rounded-md overflow-hidden">
    <table class="min-w-full divide-y divide-gray-200">
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
            Batches
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
            Total Students
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
              {{ item.totalStudents }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
   mounted() {
    let result =  axios.get("https://3.7.128.140:9080/batch/api/viewAll");
    this.list = result.data.batchlist;
  },
};
</script>
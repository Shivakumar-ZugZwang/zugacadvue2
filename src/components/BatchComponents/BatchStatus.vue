<template>
  <div>
    <center>
      <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-gray-800">
        Batch Status
      </h4>
    </center>
    <div id="recipients" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <center>
            <table id="datatable" class="min-w-full divide-y divide-gray-200">
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
                    Batch ID
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
                    Status
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="item in list" v-bind:key="item.id">
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div class="text-sm font-bold text-gray-900">
                      {{ item.batch_id }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div class="text-sm font-bold text-gray-900">
                      {{ item.name }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <router-link :to="'/vue/status/' + item.batch_id">
                      <u class="text-indigo-600 hover:text-indigo-900">
                        View
                      </u>
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </center>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

export default {
  name: "App",
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    let result = await axios.get("https://3.7.128.140:9080/batch/api/viewAll");
    this.list = result.data.batchlist;
    setTimeout(() => {
      $("#datatable")
        .DataTable({
          responsive: true,
          lengthMenu: [
            [5, 10, 25, 50, -1],
            [5, 10, 25, 50, "All"],
          ],
          pageLength: 7,
        })
        .columns.adjust()
        .responsive.recalc();
    });
  },
};
</script>
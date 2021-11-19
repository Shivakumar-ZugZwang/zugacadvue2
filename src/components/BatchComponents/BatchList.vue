<template>
  <div>
    <center>
      <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-gray-800">
        Batch List
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
                    Days
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
                    Zoom ID
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
                    Zoom Link
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
                    Zoom Password
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
                    Details
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
                    Duration
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
                    Status
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
                    Update
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
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="item in list" v-bind:key="item.id">
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div class="text-sm font-bold text-gray-900">
                      <router-link :to="'/vue/BatchDetails/' + item.batch_id">
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                          ><u>{{ item.batch_id }}</u></a
                        >
                      </router-link>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div class="text-sm font-bold text-gray-900">
                      {{ item.name }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div class="text-sm font-bold text-gray-900">
                      {{ item.program }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div class="text-sm font-bold text-gray-900">
                      <p v-for="day in item.days" v-bind:key="day">
                        {{ day }}
                      </p>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div class="text-sm font-bold text-gray-900">
                      {{ item.time }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div class="text-sm font-bold text-gray-900">
                      {{ item.zoom_account }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div class="text-sm font-bold text-gray-900">
                      {{ item.zoom_id }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div class="text-sm font-bold text-gray-900">
                      {{ item.zoom_link }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div class="text-sm font-bold text-gray-900">
                      {{ item.zoom_pass }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div class="text-sm font-bold text-gray-900">
                      {{ item.details }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div class="text-sm font-bold text-gray-900">
                      {{ item.duration }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div class="text-sm font-bold text-gray-900">
                      {{ item.unit }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div class="text-sm font-bold text-gray-900">
                      {{ item.status }}
                    </div>
                  </td>

                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <router-link :to="'/vue/UpdateBatch/' + item.batch_id">
                      <button
                        class="
                          text-indigo-500
                          bg-transparent
                          border border-solid border-indigo-500
                          hover:bg-indigo-500 hover:text-white
                          active:bg-indigo-600
                          font-bold
                          uppercase
                          text-xs
                          px-4
                          py-2
                          rounded-full
                          outline:none
                          focus:outline-none
                          mr-1
                          mb-1
                          ease-linear
                          transition-all
                          duration-150
                        "
                        type="button"
                      >
                        <i class="fas fa-edit"></i>
                      </button>
                    </router-link>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div>
                      <button
                        @click.prevent="deleteBatch(item.batch_id)"
                        class="
                          text-red-500
                          bg-transparent
                          border border-solid border-red-500
                          hover:bg-red-500 hover:text-white
                          active:bg-red-600
                          font-bold
                          uppercase
                          text-xs
                          px-4
                          py-2
                          rounded-full
                          outline:none
                          focus:outline-none
                          mr-1
                          mb-1
                          ease-linear
                          transition-all
                          duration-150
                        "
                      >
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </div>
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
import Swal from "sweetalert2";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

export default {
  name: "BatchList",
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getlist() {
      const path = "https://3.7.128.140:9080/batch/api/viewAll";
      axios.get(path).then((res) => {
        console.log(res.data);
        this.list = res.data.batchlist;
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
      });
    },
    async deleteBatch(batch_id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
        .then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(
                "https://3.7.128.140:9080/batch/api/deleteBatch/" + batch_id
              )
              .then(() => {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              });
          }
        })
        .then(() => {
          this.getlist();
        });
    },
  },

  mounted() {
    this.getlist();
  },
};
</script>
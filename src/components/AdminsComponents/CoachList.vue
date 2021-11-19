
<template>
  <div>
    <center>
      <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-purple-800">
        List Of Coaches
      </h4>
    </center>
    <div id="recipients" class="p-8 mt-6 lg:mt-0 rounded shadow bg-puple-200">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table id="datatable" class="min-w-full divide-y divide-gray-200">
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
                  User Name
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
                  Edit
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
                  Delete
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
                          :to="'/vue/StudentDetails/' + item.username"
                        >
                          <a
                            href="#"
                            class="text-indigo-600 hover:text-indigo-900"
                            >{{ item.username }}</a
                          >
                        </router-link>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-gray-500">
                    {{ item.first_name }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-gray-500">
                    {{ item.last_name }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-gray-500">
                    {{ item.email }}
                  </div>
                </td>
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-center text-sm
                    font-bold
                  "
                >
                  <router-link :to="'/vue/update/' + item.username">
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
                      v-on:click="deleteCoach(item.username)"
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
  name: "App",
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getCoach() {
      const path = "https://3.7.128.140:9083/admin/api/listUsers/Coach";
      axios.get(path).then((res) => {
        this.list = res.data.userdata;
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

    async deleteCoach(username) {
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
              .delete("https://3.7.128.140:9083/admin/api/delete/" + username)
              .then(() => {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              });
          }
        })
        .then(() => {
          this.getCoach();
        });
    },
  },
  mounted() {
    this.getCoach();
  },
};
</script>
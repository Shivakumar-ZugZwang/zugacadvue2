<template>
  <div>
    <center>
      <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-gray-800">
        Segment list
      </h4>
    </center>
    <div id="recipients" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
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
                    text-center text-xs
                    font-bold
                    text-gray-500
                    tracking-wider
                  "
                >
                  Segment Name
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
                  Tag Name
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
                  delete
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="item in list" v-bind:key="item.id">
                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <div class="text-sm font-bold text-gray-500">
                    {{ item.segment_name }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <div class="text-sm font-bold text-gray-500">
                    {{ item.tag }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <router-link :to="'/vue/updatesegments/' + item.first_name">
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
                      @click.prevent="deletesegment(item.segment_name)"
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
  name: "segmentlist",
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getlist() {
      const path = "https://3.7.128.140:9080/leads/api/segments";
      axios.get(path).then((res) => {
        console.log(res.data);
        this.list = res.data.segment;
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
    async deletesegment(segment_name) {
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
                "https://3.7.128.140:9080/leads/api/deleteSegment/" +
                  segment_name
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
</script>>

<style>
.table-style1 thead th {
  background-color: black;
  color: white;
  vertical-align: middle;
  text-align: center;
}
</style>











































<!--<template>-->
<!--    <center>-->
<!--        <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-purple-800">Segment Update</h4>-->
<!--    </center>-->
<!--            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">-->
<!--                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">-->
<!--                    <center>-->
<!--                    <table class="min-w-full divide-y divide-gray-200">-->
<!--                        <thead class="bg-gray-50">-->
<!--                            <tr>-->
<!--                                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">Segment Name</th>-->
<!--                                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">Allocated Name</th>-->
<!--                                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">Status</th>-->
<!--                                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">Update</th>-->
<!--                            </tr>-->
<!--                        </thead>-->
<!--                        <tbody class="bg-white divide-y divide-gray-200">-->
<!--                            <tr v-for="item in list" v-bind:key="item.id">-->
<!--                              <td class="px-6 py-4 whitespace-nowrap">-->
<!--                                <div class="text-sm font-bold text-gray-900">{{item.segment_name}}</div>-->
<!--                              </td>-->
<!--                              <td class="px-6 py-4 whitespace-nowrap">-->
<!--                                <div class="text-sm font-bold text-gray-900">{{item.allocated_name}}</div>-->
<!--                              </td>-->
<!--                              <td class="px-6 py-4 whitespace-nowrap">-->
<!--                                <span class="px-2 inline-flex text-xs leading-5 font-bold rounded-full bg-green-100 text-green-800">{{item.status}}</span>-->
<!--                              </td>-->
<!--                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-bold">-->
<!--                                <router-link :to="'/vue/updatelead/'+item.username">-->
<!--                                        <i class="far fa-edit"></i>-->
                                    <!--<a href="#" class="text-indigo-600 hover:text-indigo-900">Update</a>-->
<!--                                    <slot />-->
<!--                                </router-link>-->
<!--                              </td>-->
<!--                            </tr>-->
<!--                        </tbody>-->
<!--                    </table>-->
<!--                    </center>-->
<!--                </div>-->
<!--            </div>-->
<!--</template>-->


<!--<script>-->

<!--import axios from "axios"-->

<!--export default { -->
<!--    name: 'leads',-->
<!--    data()-->
<!--    {-->
<!--        return {-->
<!--        list:[]-->
<!--        }-->
<!--    },-->
<!--    async mounted()-->
<!--    {-->
<!--        let result = await axios.get("https://3.7.128.140:9080/leads/api/segments");-->
<!--        this.list=result.data.segments-->
<!--    },-->
<!--};-->
<!--</script>-->

<!--<style>-->

<!--  .table-style1 thead th {-->
<!--   background-color: black;-->
<!--   color: white;-->
<!--   vertical-align: middle; -->
<!--   text-align: center;-->
<!--}-->
<!--</style>-->
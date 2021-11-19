<template>
  <fragemnt>
    <div class="row">
      <div class="col-md-12 text-center">
        <p class="text-5xl">List of SuperUser</p>
        <hr />
        <!--<div>-->

        <!--</div>-->
      </div>
    </div>
    <!--Card-->
    <div id="recipients" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
      <table
        id="datatable"
        class="stripe hover"
        style="width: 100%; padding-top: 1em; padding-bottom: 1em"
      >
        <thead>
          <tr>
            <th data-priority="1">Username</th>
            <th data-priority="2">First Name</th>
            <th data-priority="3">Last Name</th>
            <th data-priority="4">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id">
            <td>{{ item.username }}</td>
            <td>{{ item.first_name }}</td>
            <td>{{ item.last_name }}</td>
            <td>{{ item.email }}</td>
          </tr>
        </tbody>
      </table>
      <!--/Card-->
    </div>
  </fragemnt>
</template>


<script>
// import axios from "axios"
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
  mounted() {
    fetch("https://3.7.128.140:9083/admin/api/listUsers/SuperUser")
      .then((response) => response.json())
      .then((data) => {
        this.list = data.userdata;
        // this.users = data;
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
};
</script>
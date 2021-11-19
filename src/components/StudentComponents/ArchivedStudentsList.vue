<template>
  <div id="Student">
    <div class="overflow-auto example">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 class="display-4">Student Listing</h1>
            <hr />
            <div>
              <!-- <table id="example" class="stripe row-border order-column" style="width:100%" data-page-length='50'> -->
              <table class="table table-striped table-hover">
                <!-- <table class="table table-dark"> -->
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Student ID</th>
                    <th>Batch</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">ParentName</th>
                    <th scope="col">Program</th>
                    <th scope="col">Status</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Coach</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Grade</th>
                    <th scope="col">Age</th>
                    <th scope="col">Address</th>
                    <th scope="col">City</th>
                    <th scope="col">Pin</th>
                    <th scope="col">ChessKid</th>
                    <th scope="col">DOR</th>
                    <th scope="col">MOR</th>
                    <th scope="col">DOJ</th>
                    <th scope="col">MOJ</th>
                    <th scope="col">TotalPaidClass</th>
                    <th scope="col">TotalClassTillApril30</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in list" :key="item.id">
                    <td>{{ item.username }}</td>
                    <td>{{ item.student_id }}</td>
                    <td>{{ item.batch }}</td>
                    <td>{{ item.first_name }}</td>
                    <td>{{ item.last_name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.parent_name }}</td>
                    <td>{{ item.program }}</td>
                    <td>{{ item.status }}</td>
                    <td>{{ item.unit }}</td>
                    <td>{{}}</td>
                    <td>{{ item.dob }}</td>
                    <td>{{ item.grade }}</td>
                    <td>{{ item.age }}</td>
                    <td>{{ item.address1 }}</td>
                    <td>{{ item.city }}</td>
                    <td>{{ item.pin }}</td>
                    <td>{{ item.chesskid }}</td>
                    <td>{{ item.DOR }}</td>
                    <td>{{ item.MOR }}</td>
                    <td>{{ item.DOJ }}</td>
                    <td>{{ item.MOJ }}</td>
                    <td>{{ item.TotalPaidClass }}</td>
                    <td>{{ item.TotalClassTillApril30 }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
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
   mounted() {
    let result = axios.get(
      "https://13.126.146.131:9081/student/api/viewArchived/SuperUser"
    );
    this.list = result.data.studentData;
  },
};
</script>

<style>
/* 
  .table-style1 thead th {
   background-color: black;
   color: white;
   vertical-align: middle; 
   text-align: center;
} */
.tables {
  margin-left: 273px;
  margin-top: 51px;
  width: 1167px;
}
.table {
  margin-top: 58px;
}
th {
  text-align: left;
}
table,
th,
td {
  border: 1px solid;
  border-collapse: collapse;
}
th,
td {
  padding: 10px;
}
.display-4 {
  margin-top: 35px;
  font-size: 38px;
}
/* thead{
    background: lightgrey;
    background-color: #95A5A6;
} */
</style>
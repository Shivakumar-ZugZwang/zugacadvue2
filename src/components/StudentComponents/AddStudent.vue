<template>
  <center>
    <form
      class="p-4 shadow-md rounded-lg text-left mt-3"
      style="max-width: 500px"
    >
      <center>
        <h4
          class="text-3xl font-normal leading-normal mt-0 mb-2 text-black-800"
        >
          Add Student
        </h4>
      </center>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="student_id"
          >Student ID</label
        >
        <input
          class="
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="text"
          placeholder="Enter Student ID"
          id="student_id"
          name="student_id"
          v-model="student_id"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="first_name"
          >First Name</label
        >
        <input
          class="
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="text"
          placeholder="Enter First Name"
          id="first_name"
          name="first_name"
          v-model="first_name"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="last_name"
          >Last Name</label
        >
        <input
          class="
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="text"
          placeholder="Enter Last Name"
          id="last_name"
          name="last_name"
          v-model="last_name"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="age">Age</label>
        <input
          class="
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="text"
          placeholder="Enter Age"
          id="age"
          name="age"
          v-model="age"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="unit">Unit</label>
        <select
          class="
            from-select
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="text"
          placeholder="Select Unit"
          id="unit"
          name="unit"
          v-model="unit"
        >
          <option>ZugZwang</option>
          <option>MagicCrate</option>
        </select>
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="program"
          >Program</label
        >
        <select
          class="
            from-select
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="text"
          placeholder="Select Program"
          id="program"
          name="program"
          v-model="program"
        >
          <option>Chess</option>
          <option>Coding</option>
          <option>Math</option>
          <option>Robotics</option>
          <option>Rubix</option>
        </select>
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="status">Status</label>
        <select
          class="
            from-select
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="text"
          placeholder="Status Status"
          id="status"
          name="status"
          v-model="status"
        >
          <option>Active</option>
          <option>EMI</option>
          <option>Renewed</option>
          <option>Cancelled</option>
          <option>Closed</option>
          <option>Dormant</option>
          <option>Inactive</option>
        </select>
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="email">Email</label>
        <input
          class="
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="text"
          placeholder="Enter Your Email ID"
          id="email"
          name="email"
          v-model="email"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="password"
          >Password</label
        >
        <input
          class="
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="password"
          placeholder="Enter Your Password"
          id="password"
          name="password"
          v-model="password"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="batch">Batch</label>
        <select
          class="
            from-select
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="text"
          placeholder="Select Batch"
          id="batch"
          name="batch"
          v-model="batch"
        >
          <option>ADV - SAT - 14</option>
          <option>ADV - SUN - 10</option>
          <option>B01 - WF 530</option>
          <option>B02 - TR 530</option>
          <option>B03 - SN 12</option>
          <option>B04 - TR 15</option>
          <option>B05 - WF 415</option>
          <option>B06 - WF 15</option>
          <option>B08 - SN 415</option>
          <option>B09 - TR 415</option>
          <option>B10 - SN 1045</option>
          <option>B11 - SN 15</option>
          <option>B12 - TR 630</option>
          <option>B13 - SN 530</option>
          <option>B14 - WF 630</option>
          <option>B15 - SN 630</option>
          <option>B16 - SN 530</option>
          <option>B17 - SN 12</option>
          <option>B18 - SN 15</option>
          <option>BEG - SN - 12</option>
          <option>FLT - WF - 4</option>
          <option>FLT- TR - 415</option>
          <option>INT - SAT - 10</option>
          <option>INT - SAT - 14</option>
          <option>INT - SUN - 14</option>
          <option>PYT - SAT - 14</option>
          <option>PYT - THU - 14</option>
          <option>PYT -SN - 930</option>
          <option>SCR - SAT - 11</option>
          <option>Test Batch</option>
          <option>FirstBatch</option>
          <option>SecondBatch</option>
        </select>
      </div>
      <div>
        <router-link to="/vue/AddStudentDetails">
          <center>
            <a href="#" class="text-blue-600 text-lg font-bold"
              ><u>Click here to Add more Details</u></a
            >
          </center>
        </router-link>
      </div>
      <div class="text-center mt-3">
        <button
          @click.prevent="addStudent()"
          class="
            px-7
            py-2
            mx-2
            text-white
            rounded
            text-center
            bg-purple-600
            font-bold
            text-white
          "
        >
          Add Student
        </button>
      </div>
    </form>
  </center>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      list: {
        student_id: "",
        first_name: "",
        last_name: "",
        age: "",
        unit: "",
        program: "",
        status: "",
        email: "",
        password: "",
        batch: "",
      },
    };
  },
  methods: {
    addStudent() {
      axios
        .post("https://3.7.128.140:9083/student/api/add", {
          student_id: this.student_id,
          first_name: this.first_name,
          last_name: this.last_name,
          age: this.age,
          unit: this.unit,
          program: this.program,
          status: this.status,
          email: this.email,
          password: this.password,
          batch: [this.batch],
        })
        .then((resp) => {
          if (resp.status == 201) {
            this.$router.push({ path: "/vue/studentlist" });
          }
        })
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Student Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
  },
};
</script>
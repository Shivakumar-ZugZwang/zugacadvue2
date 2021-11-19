<template>
  <center>
    <form
      class="p-4 shadow-md rounded-lg text-left mt-3"
      style="max-width: 500px"
    >
      <h1
        class="block w-full text-center text-gray-800 text-2xl font-bold mb-6"
      >
        Update Student
      </h1>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="student_id"
          >Student ID</label
        >
        <input
          class="
            text-gray-500
            font-bold
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
          v-model="list.student_id"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="username"
          >Username</label
        >
        <input
          class="
            text-gray-500
            font-bold
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
          v-model="list.username"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="first_name"
          >First Name</label
        >
        <input
          class="
            text-gray-500
            font-bold
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
          v-model="list.first_name"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="last_name"
          >Last Name</label
        >
        <input
          class="
            text-gray-500
            font-bold
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
          v-model="list.last_name"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="age">Age</label>
        <input
          class="
            text-gray-500
            font-bold
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
          v-model="list.age"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="unit">Unit</label>
        <select
          class="
            from-select
            text-gray-500
            font-bold
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
          v-model="list.unit"
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
            text-gray-500
            font-bold
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
          v-model="list.program"
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
            text-gray-500
            font-bold
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
          v-model="list.status"
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
            text-gray-500
            font-bold
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
          v-model="list.email"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="password"
          >Password</label
        >
        <input
          class="
            text-gray-500
            font-bold
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
          placeholder="Enter Your Password"
          id="password"
          name="password"
          v-model="list.password"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="batch">Batch</label>
        <select
          class="
            from-select
            text-gray-500
            font-bold
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
          v-model="list.batch"
        >
          <option>TestBatch</option>
          <option>SimpleTest</option>
        </select>
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="dob">DOB</label>
        <input
          class="
            text-gray-500
            font-bold
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
          placeholder="Date of Birth"
          id="dob"
          name="dob"
          v-model="list.dob"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="phone">Phone</label>
        <input
          class="
            text-gray-500
            font-bold
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
          placeholder="Enter Phone Number"
          id="phone"
          name="phone"
          v-model="list.phone"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="coach">Coach</label>
        <select
          class="
            from-select
            text-gray-500
            font-bold
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
          placeholder="Select Coach"
          id="coach"
          name="coach"
          v-model="list.coach"
        >
          <option>CoachAdmin</option>
          <option>TBD</option>
        </select>
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="role">Role</label>
        <input
          class="
            text-gray-500
            font-bold
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
          placeholder="Role"
          id="role"
          name="role"
          v-model="list.role"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="grade">Grade</label>
        <input
          class="
            text-gray-500
            font-bold
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
          placeholder="Grade"
          id="grade"
          name="grade"
          v-model="list.grade"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="chesskid"
          >Chesskid</label
        >
        <input
          class="
            text-gray-500
            font-bold
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
          placeholder="Chesskid ID"
          id="chesskid"
          name="chesskid"
          v-model="list.chesskid"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="parent_firstname"
          >Parent FirstName</label
        >
        <input
          class="
            text-gray-500
            font-bold
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
          placeholder="Parent FirstName"
          id="parent_firstname"
          name="parent_firstname"
          v-model="list.parent_firstname"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="parent_lastname"
          >Parent LastName</label
        >
        <input
          class="
            text-gray-500
            font-bold
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
          placeholder="Parent LastName"
          id="parent_lastname"
          name="parent_lastname"
          v-model="list.parent_lastname"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="address1"
          >Address 1</label
        >
        <input
          class="
            text-gray-500
            font-bold
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
          placeholder="Enter Your Address"
          id="address1"
          name="address1"
          v-model="list.address1"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="address2"
          >Address 2</label
        >
        <input
          class="
            text-gray-500
            font-bold
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
          placeholder="Enter Your Address"
          id="address2"
          name="address2"
          v-model="list.address2"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="city">City</label>
        <input
          class="
            text-gray-500
            font-bold
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
          placeholder="Please Mention Your City"
          id="city"
          name="city"
          v-model="list.city"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="pin">PIN</label>
        <input
          class="
            text-gray-500
            font-bold
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
          placeholder="Please Mention Your PIN code"
          id="pin"
          name="pin"
          v-model="list.pin"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="DOR">DOR</label>
        <input
          class="
            text-gray-500
            font-bold
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
          placeholder="DOR"
          id="DOR"
          name="DOR"
          v-model="list.DOR"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="MOR">MOR</label>
        <input
          class="
            text-gray-500
            font-bold
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
          placeholder="MOR"
          id="MOR"
          name="MOR"
          v-model="list.MOR"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="DOJ">DOJ</label>
        <input
          class="
            text-gray-500
            font-bold
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
          placeholder="Date of Joining"
          id="DOJ"
          name="DOJ"
          v-model="list.DOJ"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="MOJ">MOJ</label>
        <input
          class="
            text-gray-500
            font-bold
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
          placeholder="Month of Joining"
          id="MOJ"
          name="MOJ"
          v-model="list.MOJ"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="TotalPaidClass"
          >TotalPaidClass</label
        >
        <input
          class="
            text-gray-500
            font-bold
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
          placeholder="Total Paid"
          id="TotalPaidClass"
          name="TotalPaidClass"
          v-model="list.TotalPaidClass"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="ClassTillApril30"
          >ClassTillApril30</label
        >
        <input
          class="
            text-gray-500
            font-bold
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
          placeholder="Total Class"
          id="ClassTillApril30"
          name="ClassTillApril30"
          v-model="list.ClassTillApril30"
        />
      </div>
      <div class="text-center mt-3">
        <button
          @click.prevent="updateStudent"
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
          Update Student
        </button>
      </div>
    </form>
  </center>
</template>


<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "UpdateStudent",
  data() {
    return {
      list: {
        student_id: "",
        username: "",
        first_name: "",
        last_name: "",
        age: "",
        unit: "",
        program: "",
        status: "",
        email: "",
        password: "",
        batch: "",
        dob: "",
        phone: "",
        coach: "",
        role: "",
        grade: "",
        chesskid: "",
        parent_firstname: "",
        parent_lastname: "",
        address1: "",
        address2: "",
        city: "",
        pin: "",
        DOR: "",
        MOR: "",
        DOJ: "",
        MOJ: "",
        TotalPaidClass: "",
        ClassTillApril30: "",
      },
    };
  },
  methods: {
    updateStudent() {
      axios
        .put("https://3.7.128.140:9083/student/api/update", {
          student_id: this.list.student_id,
          username: this.list.username,
          first_name: this.list.first_name,
          last_name: this.list.last_name,
          age: this.list.age,
          unit: this.list.unit,
          program: this.list.program,
          status: this.list.status,
          email: this.list.email,
          password: this.list.password,
          batch: [this.list.batch],
          dob: this.list.dob,
          phone: this.list.phone,
          coach: this.list.coach,
          role: this.list.role,
          grade: this.list.grade,
          chesskid: this.list.chesskid,
          parent_firstname: this.list.parent_firstname,
          parent_lastname: this.list.parent_lastname,
          address1: this.list.address1,
          address2: this.list.address2,
          city: this.list.city,
          pin: this.list.pin,
          DOR: this.list.DOR,
          MOR: this.list.MOR,
          DOJ: this.list.DOJ,
          MOJ: this.list.MOJ,
          TotalPaidClass: this.list.TotalPaidClass,
          ClassTillApril30: this.list.ClassTillApril30,
        })
        .then((res) => {
          if (res.status == 201) {
            this.$router.push({ path: "/vue/studentlist" });
          }
        })
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Student Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
  },
  mounted() {
    const result = axios.get(
      "https://3.7.128.140:9083/student/api/" + this.$route.params.username
    );
    this.list = result.data.studentData;
  },
};
</script>
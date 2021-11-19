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
          Add Student Details
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
          placeholder="Select Status"
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
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="dob">DOB</label>
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
          placeholder="Date of Birth"
          id="dob"
          name="dob"
          v-model="dob"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="phone">Phone</label>
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
          placeholder="Enter Phone Number"
          id="phone"
          name="phone"
          v-model="phone"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="coach">Coach</label>
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
          placeholder="Select Coach"
          id="coach"
          name="coach"
          v-model="coach"
        >
          <option>AbdulKalam</option>
          <option>AbhishekMishra</option>
          <option>DivyaMS</option>
          <option>GuruB</option>
          <option>JayeshMishra</option>
          <option>KamleshVyas</option>
          <option>AgamS</option>
          <option>JyothiK</option>
          <option>ShaneBreganza</option>
          <option>VinayKumar</option>
          <option>ShratiRao</option>
          <option>KikitaJain</option>
          <option>ShreyasNikam</option>
          <option>VinayakM</option>
          <option>SubhraShah</option>
          <option>TirthaSarkar</option>
          <option>SushmithaRao</option>
          <option>VishalSomaiya</option>
          <option>RizwaanS</option>
          <option>ManjuJ</option>
          <option>NivethaT</option>
          <option>PrashamJain</option>
          <option>RaniPuja</option>
          <option>ShabariKannan</option>
          <option>AravindakshanSundharesan</option>
          <option>SanskruthiMahajan</option>
          <option>KaranS</option>
          <option>SumanM</option>
          <option>GovindKumar</option>
          <option>JoelPaulGanta</option>
          <option>TBD</option>
          <option>BabuG</option>
          <option>UditGupta</option>
          <option>UjjawalPatel</option>
          <option>RaghavanR</option>
          <option>AkkarajuSaileshChandra</option>
          <option>AkashSrivastav</option>
          <option>NavyashreeMK</option>
          <option>Keerthanaak</option>
          <option>SathiyarajS</option>
          <option>SubalakshmiMS</option>
          <option>NidhiSharma</option>
          <option>DhanushM</option>
          <option>DineshKumarPandey</option>
          <option>DharaniKumarMS</option>
        </select>
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="role">Role</label>
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
          placeholder="Role"
          id="role"
          name="role"
          v-model="role"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="grade">Grade</label>
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
          placeholder="Grade"
          id="grade"
          name="grade"
          v-model="grade"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="chesskid"
          >Chesskid</label
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
          placeholder="Chesskid ID"
          id="chesskid"
          name="chesskid"
          v-model="chesskid"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="parent_firstname"
          >Parent FirstName</label
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
          placeholder="Parent FirstName"
          id="parent_firstname"
          name="parent_firstname"
          v-model="parent_firstname"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="parent_lastname"
          >Parent LastName</label
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
          placeholder="Parent LastName"
          id="parent_lastname"
          name="parent_lastname"
          v-model="parent_lastname"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="address1"
          >Address 1</label
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
          placeholder="Enter Your Address"
          id="address1"
          name="address1"
          v-model="address1"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="address2"
          >Address 2</label
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
          placeholder="Enter Your Address"
          id="address2"
          name="address2"
          v-model="address2"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="city">City</label>
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
          placeholder="Please Mention Your City"
          id="city"
          name="city"
          v-model="city"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="pin">PIN</label>
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
          placeholder="Please Mention Your PIN code"
          id="pin"
          name="pin"
          v-model="pin"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="DOR">DOR</label>
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
          placeholder="DOR"
          id="DOR"
          name="DOR"
          v-model="DOR"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="MOR">MOR</label>
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
          placeholder="MOR"
          id="MOR"
          name="MOR"
          v-model="MOR"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="DOJ">DOJ</label>
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
          placeholder="Date of Joining"
          id="DOJ"
          name="DOJ"
          v-model="DOJ"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="MOJ">MOJ</label>
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
          placeholder="Month of Joining"
          id="MOJ"
          name="MOJ"
          v-model="MOJ"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="TotalPaidClass"
          >TotalPaidClass</label
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
          placeholder="Total Paid"
          id="TotalPaidClass"
          name="TotalPaidClass"
          v-model="TotalPaidClass"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="ClassTillApril30"
          >ClassTillApril30</label
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
          placeholder="Total Class"
          id="ClassTillApril30"
          name="ClassTillApril30"
          v-model="ClassTillApril30"
        />
      </div>
      <div class="text-center mt-3">
        <button
          @click.prevent="addStudentDetails()"
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

export default {
  data() {
    return {
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
    };
  },
  methods: {
    addStudentDetails() {
      axios
        .post("https://3.7.128.140:9083/student/api/detailedView", {
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
          dob: this.dob,
          phone: this.phone,
          coach: this.coach,
          role: this.role,
          grade: this.grade,
          chesskid: this.chesskid,
          parent_firstname: this.parent_firstname,
          parent_lastname: this.parent_lastname,
          address1: this.address1,
          address2: this.address2,
          city: this.city,
          pin: this.pin,
          DOR: this.DOR,
          MOR: this.MOR,
          DOJ: this.DOJ,
          MOJ: this.MOJ,
          TotalPaidClass: this.TotalPaidClass,
          ClassTillApril30: this.ClassTillApril30,
        })
        .then(alert("Student Added Successfully"));
    },
  },
};
</script>
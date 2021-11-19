<template>
  <div>
    <center>
      <h4 class="text-3xl leading-normal mt-0 mb-2 text-gray-800">
        Student Details
      </h4>
    </center>
    <div class="py-2 align-middle inline-block sm:px-6 lg:px-8">
      <div
        class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
      >
        <table class="divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="
                  px-6
                  py-3
                  text-left text-sm
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
                  text-left text-sm
                  font-bold
                  text-gray-500
                  tracking-wider
                "
              >
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">User Name</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700 text-sm
                    w-full
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="User Name"
                  id="username"
                  name="username"
                  v-model="list.username"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Student ID</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700 text-sm
                    w-full
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Student ID"
                  id="student_id"
                  name="student_id"
                  v-model="list.student_id"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Email</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700 text-sm
                    w-full
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Email ID"
                  id="email"
                  name="email"
                  v-model="list.email"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">First Name</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700 text-sm
                    w-full
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="First Name"
                  id="first_name"
                  name="first_name"
                  v-model="list.first_name"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Last Name</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700 text-sm
                    w-full
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Last Name"
                  id="last_name"
                  name="last_name"
                  v-model="list.last_name"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Role</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    text-sm
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Role"
                  id="role"
                  name="role"
                  v-model="list.role"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Phone</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    font-bold
                    text-sm
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Phone Number"
                  id="phone"
                  name="phone"
                  v-model="list.phone"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Unit</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    font-bold
                    text-sm
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Unit"
                  id="unit"
                  name="unit"
                  v-model="list.unit"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Program</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    font-bold
                    text-sm
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Program"
                  id="program"
                  name="program"
                  v-model="list.program"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Status</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    font-bold
                    text-sm
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Status"
                  id="status"
                  name="status"
                  v-model="list.status"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Batch</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    font-bold
                    text-sm
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Batch"
                  id="batch"
                  name="batch"
                  v-model="list.batch"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Coach</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    font-bold
                    text-sm
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Coach"
                  id="coach"
                  name="coach"
                  v-model="list.coach"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Date of Birth</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    font-bold
                    text-sm
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Date of Birth"
                  id="dob"
                  name="dob"
                  v-model="list.dob"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Grade</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    font-bold
                    text-sm
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Grade"
                  id="grade"
                  name="grade"
                  v-model="list.grade"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Age</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    font-bold
                    text-sm
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Age"
                  id="age"
                  name="age"
                  v-model="list.age"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">
                  Parent FirstName
                </div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    font-bold
                    text-sm
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Parent FirstName"
                  id="parent_firstname"
                  name="parent_firstname"
                  v-model="list.parent_firstname"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">
                  Parent LastName
                </div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    font-bold
                    text-sm
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Parent LastName"
                  id="parent_lastname"
                  name="parent_lastname"
                  v-model="list.parent_lastname"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Address 1</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    text-sm
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Address1"
                  id="address1"
                  name="address1"
                  v-model="list.address1"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Address 2</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    text-sm
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Address2"
                  id="address2"
                  name="address2"
                  v-model="list.address2"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">City</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    text-sm
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="City"
                  id="city"
                  name="city"
                  v-model="list.city"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Pin / ZipCode</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    text-sm
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="Pin / ZipCode"
                  id="pin"
                  name="pin"
                  v-model="list.pin"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Chesskid</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    text-sm
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="ChessKid ID"
                  id="chesskid"
                  name="chesskid"
                  v-model="list.chesskid"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">DOR</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    text-sm
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="DOR"
                  id="DOR"
                  name="DOR"
                  v-model="list.DOR"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">MOR</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    text-sm
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="MOR"
                  id="MOR"
                  name="MOR"
                  v-model="list.MOR"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">DOJ</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    text-sm
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="DOJ"
                  id="DOJ"
                  name="DOJ"
                  v-model="list.DOJ"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">MOJ</div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    text-sm
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="MOJ"
                  id="MOJ"
                  name="MOJ"
                  v-model="list.MOJ"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">
                  Total Class Till April 30
                </div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    text-sm
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="TotalClassTillApril30"
                  id="TotalClassTillApril30"
                  name="TotalClassTillApril30"
                  v-model="list.TotalClassTillApril30"
                />
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">
                  Total Paid Class
                </div>
              </td>
              <td>
                <input
                  class="
                    text-gray-700
                    w-full
                    text-sm
                    font-bold
                    shadow
                    border
                    rounded
                    border-gray-300
                    focus:outline-none focus:shadow-outline
                    py-1
                    px-3
                    mb-3
                    cursor-not-allowed
                  "
                  type="text"
                  placeholder="TotalPaidClass"
                  id="TotalPaidClass"
                  name="TotalPaidClass"
                  v-model="list.TotalPaidClass"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StudentData",
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
  async mounted() {
    const result = await axios.get(
      "https://3.7.128.140:9080/student/api/" + this.$route.params.username
    );
    console.log(result);
    console.log(result.data);
    this.list = result.data.studentData;
    console.log(this.list);
  },
};
</script> 

<template>
  <div>
    <center>
      <h4 class="text-3xl leading-normal mt-0 mb-2 text-black-800">
        Batch Details
      </h4>
    </center>
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div
        class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
      >
        <table class="min-w-full divide-y divide-gray-200">
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
                <div class="text-sm font-bold text-gray-900">Batch ID</div>
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
                  placeholder="Batch ID"
                  id="batch_id"
                  name="batch_id"
                  v-model="list.batch_id"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Batch Name</div>
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
                  placeholder="Batch Name"
                  id="batchname"
                  name="batchname"
                  v-model="list.name"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Zoom Account</div>
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
                  placeholder="Zoom Account"
                  id="zoom_account"
                  name="zoom_account"
                  v-model="list.zoom_account"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Zoom ID</div>
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
                  placeholder="Zoom ID"
                  id="zoom_id"
                  name="zoom_id"
                  v-model="list.zoom_id"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Zoom Password</div>
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
                  placeholder="Zoom Password"
                  id="zoom_password"
                  name="zoom_password"
                  v-model="list.zoom_pass"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Zoom Link</div>
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
                  placeholder="Zoom Link"
                  id="zoom_link"
                  name="zoom_link"
                  v-model="list.zoom_link"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Days</div>
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
                  placeholder="Days"
                  id="days"
                  name="days"
                  v-model="list.days"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Time</div>
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
                  placeholder="Time"
                  id="time"
                  name="time"
                  v-model="list.time"
                />
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">Duration</div>
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
                  placeholder="Duration"
                  id="duration"
                  name="duration"
                  v-model="list.duration"
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
                <div class="text-sm font-bold text-gray-900">Details</div>
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
                  placeholder="Details"
                  id="details"
                  name="details"
                  v-model="list.details"
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
  name: "BatchDetails",
  data() {
    return {
      list: {
        batch_id: "",
        name: "",
        zoom_account: "",
        zoom_id: "",
        zoom_password: "",
        zoom_link: "",
        days: "",
        time: "",
        duration: "",
        program: "",
        status: "",
        unit: "",
        details: "",
      },
    };
  },
  async mounted() {
    const result = await axios.get(
      "https://3.7.128.140:9083/batch/api/" + this.$route.params.batch_id
    );
    this.list = result.data.batchData;
  },
};
</script> 

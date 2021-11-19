<template>
  <div>
    <center>
      <div class="container mx-auto px-4 py-2 md:py-10">
        <div class="mb-5 w-64">
          <center>
            <label for="datepicker" class="font-bold mb-1 text-gray-700 block"
              >Select Date</label
            >
          </center>
          <center>
            <div class="relative">
              <input
                class="
                  w-full
                  pl-4
                  pr-10
                  py-3
                  leading-none
                  rounded-lg
                  shadow-sm
                  focus:outline-none focus:shadow-outline
                  text-gray-6
                  font-medium
                "
                type="date"
                id="start"
                name="trip-start"
              />
            </div>
          </center>
        </div>
      </div>
    </center>

    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div
        class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
      >
        <center>
          <table class="min-w-full divide-y divide-gray-200">
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
                  Student ID
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
                  First Name
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
                  Email
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
                  Coach
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
                  Attendance
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="item in list" v-bind:key="item.id">
                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <div class="text-sm font-bold text-gray-900">
                    {{ item.student_id }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <div class="text-sm font-bold text-gray-900">
                    {{ item.first_name }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <div class="text-sm font-bold text-gray-900">
                    {{ item.email }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <div class="text-sm font-bold text-gray-900">
                    {{ item.coach }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <div
                    class="
                      relative
                      inline-block
                      w-10
                      mr-2
                      align-middle
                      select-none
                      transition
                      duration-200
                      ease-in
                    "
                  >
                    <input
                      type="checkbox"
                      name="toggle"
                      id="toggle"
                      class="
                        toggle-checkbox
                        absolute
                        block
                        w-6
                        h-6
                        rounded-full
                        bg-white
                        border-4
                        appearance-none
                        cursor-pointer
                      "
                    />
                    <label
                      for="toggle"
                      class="
                        toggle-label
                        block
                        overflow-hidden
                        h-6
                        rounded-full
                        bg-gray-300
                        cursor-pointer
                      "
                    ></label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    </div>

    <div class="text-center mt-3">
      <button
        @click.prevent="updateAttendence()"
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
        Update Attendance
      </button>
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
  async mounted() {
    let result = await axios.get(
      `https://3.7.128.140:9083/batch/api/getStudents/${this.$route.params.batch_id}`
    );
    this.list = result.data.batchStudents;
  },
};
</script>

 <style>
/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */
.toggle-checkbox:checked {
  /*@apply: right-0 border-green-400;*/
  right: 0;
  border-color: Dodgerblue;
}
.toggle-checkbox:checked + .toggle-label {
  /*@apply: bg-green-400;*/
  background-color: Dodgerblue;
}
</style>
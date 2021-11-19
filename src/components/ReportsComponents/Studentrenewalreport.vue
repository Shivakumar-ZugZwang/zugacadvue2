<template>
  <div>
    <center>
      <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-purple-800">
        Student dormant report
      </h4>
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
                    text-left text-xs
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
                    text-left text-xs
                    font-bold
                    text-gray-500
                    tracking-wider
                  "
                >
                  Student username
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
                  Batch Name
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
                  Status
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
                  ATT (till A 30)
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
                  ATT (from may 01)
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
                  Total ATT
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
                  Total paid class
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
                  Balance class
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
                  Expected New
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="item in list" v-bind:key="item.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-gray-900">
                    {{ item.student_id }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-gray-900">
                    {{ item.student_name }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-gray-900">
                    {{ item.batch_name }}
                  </div>
                </td>

                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-gray-900">
                    {{ item.status }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-gray-900">
                    {{ item.att_till_april30 }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-gray-900">
                    {{ item.att_from_may01 }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-gray-900">
                    {{ item.total_att }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-gray-900">
                    {{ item.total_paid_class }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-gray-900">
                    {{ item.balance_class }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-gray-900">
                    {{ item.expected_renew }}
                  </div>
                </td>

                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-right text-sm
                    font-bold
                  "
                >
                  <router-link :to="'/vue/UpdateStudent/' + item.username">
                    <i class="far fa-edit"></i>
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Update</a
                    >
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Reports",
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    let result = await axios.post(
      "https://3.7.128.140:9080/report/api/getStudentRenewalReport"
    );
    this.list = result.data.renewalReportData;
  },
};
</script>
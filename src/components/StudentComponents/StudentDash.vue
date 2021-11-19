<template>
  <div>
    <div class="shadow-md rounded-md overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <tbody>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <h1 class="text-3xl text-left font-bold text-gray-900">
                Total Students
              </h1>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <h1 class="text-3xl text-right font-bold text-gray-900">
                {{ list.student }}
              </h1>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <br /><br /><br />

    <Dash />
  </div>
</template>

<script>
import Dash from "@/components/StudentComponents/Dash";

import axios from "axios";

export default {
  name: "App",
  components: {
    Dash,
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    let result = axios.get("https://3.7.128.140:9080/api/home/SuperUser");
    this.list = result.data;
  },
};
</script>
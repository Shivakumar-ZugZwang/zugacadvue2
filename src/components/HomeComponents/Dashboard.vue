<template>
  <div>
    <div class="flex space-x-4 ...">
      <div class="flex-1 ...">
        <StudentsDashboard />
      </div>
      <div class="flex-1 ...">
        <BatchesDashboard />
      </div>
      <div class="flex-1 ...">
        <AdminsDashboard />
      </div>
      <div class="flex-1 ...">
        <CoachesDashboard />
      </div>
    </div>

    <div>
      <OngoingBatch />
    </div>
  </div>
</template>


<script>
import axios from "axios";

import OngoingBatch from "@/components/HomeComponents/OngoingBatch";
import StudentsDashboard from "@/components/HomeComponents/StudentsDashboard";
import BatchesDashboard from "@/components/HomeComponents/BatchesDashboard";
import AdminsDashboard from "@/components/HomeComponents/AdminsDashboard";
import CoachesDashboard from "@/components/HomeComponents/CoachesDashboard";

export default {
  name: "App",
  components: {
    OngoingBatch,
    StudentsDashboard,
    BatchesDashboard,
    AdminsDashboard,
    CoachesDashboard,
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    let result = axios.get("https://3.7.128.140:9083/api/home/SuperUser");
    this.list = result.data;
  },
};
</script>
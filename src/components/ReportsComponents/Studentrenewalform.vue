<template>
  <center>
    <form
      class="p-4 shadow-md rounded-lg text-left mt-3"
      style="max-width: 500px"
    >
      <h1
        class="block w-full text-center text-gray-800 text-2xl font-bold mb-6"
      >
        Student Renewal report
      </h1>

      <div class="flex flex-col mb-6">
        <label class="text-gray-700 font-bold py-2" for="batch">Batch</label>
        <select
          class="
            form-select
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
          type="tags"
          placeholder="click here to select"
          id="batch"
          name="batch"
        >
          <option>FirstBatch</option>
          <option>SecondBatch</option>
          <option>TestBatch</option>
        </select>
      </div>

      <div class="flex flex-col mb-6">
        <label class="text-gray-700 font-bold py-2" for="status">Status</label>
        <select
          class="
            form-select
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
          type="tags"
          placeholder="click here to select"
          id="status"
          name="status"
        >
          <option>Active</option>
          <option>EMI</option>
          <option>Renewed</option>
        </select>
      </div>

      <div class="text-center mt-3">
        <button
          @click.prevent="sendPost()"
          class="
            px-7
            py-2
            mx-2
            text-white
            rounded
            text-center
            bg-purple-600
            font-bold
            text-
            white
          "
        >
          Generate report
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
      batch: "",
      status: "",
    };
  },
  methods: {
    async sendPost() {
      await axios.get(
        "https://3.7.128.140:9080/report/api/getStudentRenewalData",
        {
          batch: [this.batch],
          status: [this.status],
        }
      );

      this.$router
        .push({ component: "Studentrenewalreport" })

        .then(alert("Added successfully"));
    },
  },
};
</script>

<template>
    <center>
    <form class="p-4 shadow-md rounded-lg text-left mt-3" style="max-width: 500px;">
        <center><h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-gray-800">Update Batch</h4></center>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="batch_id">Batch ID</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Batch ID" id="batch_id" name="batch_id" v-model="list.batch_id">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="name">Batch Name</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Batch Name" id="name" name="name" v-model="list.name">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="zoom_account">Zoom Account</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Zoom Account"  id="zoom_account" name="zoom_account" v-model="list.zoom_account">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="zoom_id">Zoom ID</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Zoom ID"  id="zoom_id" name="zoom_id" v-model="list.zoom_id">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="zoom_pass">Zoom Password</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Zoom Password"  id="zoom_pass" name="zoom_pass" v-model="list.zoom_pass">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="zoom_link">Zoom Link</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Zoom Link"  id="zoom_link" name="zoom_link" v-model="list.zoom_link">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="days">Days</label>
            <select class="form-select text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Select Days" id="days" name="days" v-model="list.days">
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
            </select>
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="time">Time</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Time" id="time" name="time" v-model="list.time">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="duration">Duration</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Duration" id="duration" name="duration" v-model="list.duration">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="program">Program</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Program" id="program" name="program" v-model="list.program">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="status">Status</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Status" id="status" name="status" v-model="list.status">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="unit">Unit</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Unit" id="unit" name="unit" v-model="list.unit">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="details">Details</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Details" id="batch_details" name="details" v-model="list.details">
        </div>
        <div class="text-center mt-3">
            <button @click.prevent="updateBatch" class="px-7 py-2 mx-2 text-white rounded text-center bg-purple-600 font-bold text-white">Update Batch</button>
        </div>
    </form>
    </center>
</template>

<script>

import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: 'UpdateBatch',
    data() {
      return {
            list:
            {
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
              details: ""
            }
        }
    },
    methods:
    {
        async updateBatch()
        {
            axios.put(`https://3.7.128.140:9083/batch/api/updateBatch/${this.$route.params.batch_id}`,{
                batch_id: this.list.batch_id,
                name: this.list.name,
                zoom_account: this.list.zoom_account,
                zoom_id: this.list.zoom_id,
                zoom_pass: this.list.zoom_pass,
                zoom_link: this.list.zoom_link,
                days: [this.list.days],
                time: this.list.time,
                duration: this.list.duration,
                program: this.list.program,
                status: this.list.status,
                unit: this.list.unit,
                details: this.list.details
            })
            .then((res)=>{
                    if (res.status ==200){
                      this.$router.push({path: '/vue/batch'})
                  }
              }).then(()=>{
                   Swal.fire({
               
                icon: 'success',
                title: 'Batch Updated Successfully',
                showConfirmButton: false,
                timer: 1500
                })
               })
        },
    },
        async mounted() {
            const result = await axios.get("https://3.7.128.140:9083/batch/api/"+this.$route.params.batch_id)
            this.list = result.data.batchData
        }
    }
</script>


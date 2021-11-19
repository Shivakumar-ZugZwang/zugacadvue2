<template>
    <center>
    <form class="p-4 shadow-md rounded-lg text-left mt-3" style="max-width: 500px;">
        <center><h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-gray-800">Add Batch</h4></center>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="batch_id">Batch ID</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Batch ID" id="batch_id" name="batch_id" v-model="batch_id">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="batch_name">Batch Name</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Batch Name" id="batch_name" name="batch_name" v-model="batch_name">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="details">Details</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Details" id="batch_details" name="details" v-model="details">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="program">Program</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Program" id="program" name="program" v-model="program">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="zoom_account">Zoom Account</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Zoom Account"  id="zoom_account" name="zoom_account" v-model="zoom_account">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="zoom_id">Zoom ID</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Zoom ID"  id="zoom_id" name="zoom_id" v-model="zoom_id">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="zoom_password">Zoom Password</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Zoom Password"  id="zoom_password" name="zoom_password" v-model="zoom_password">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="zoom_link">Zoom Link</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Zoom Link"  id="zoom_link" name="zoom_link" v-model="zoom_link">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="days">Days</label>
            <select class="form-select text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Select Days" id="days" name="days" v-model="days">
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
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Time"  id="time" name="time" v-model="time">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="duration">Duration</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Duration"  id="duration" name="duration" v-model="duration">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="status">Status</label>
            <select class="form-select text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Select Status" id="status" name="status" v-model="status">
                <option>Open</option>
                <option>Closed</option>
            </select>
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="unit">Unit</label>
            <select class="form-select text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Select Status" id="status" name="status" v-model="status">
                <option>MagicCrate</option>
                <option>ZugZwang</option>
            </select>
        </div>
        <div class="text-center mt-3">
            <button @click.prevent="addBatch()" class="px-7 py-2 mx-2 text-white rounded text-center bg-purple-600 font-bold text-white">Add Batch</button>
        </div>
    </form>
    </center>
</template>

<script>

import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    data () {
        return {
            batch_id: "",
            batch_name: "",
            details: "",
            program: "",
            zoom_account: "",
            zoom_id: "",
            zoom_password: "",
            zoom_link: "",
            days: "",
            time: "",
            duration: "",
            status: "",
            unit: ""
        }
      },
    methods : {
        async addBatch() {
            await axios.post("https://3.7.128.140:9080/batch/api/add", {
               batch_id: this.batch_id,
               batch_name: this.batch_name,
               details: this.details,
               program: this.program,
               zoom_account: this.zoom_account,
               zoom_id: this.zoom_id,
               zoom_password: this.zoom_password,
               zoom_link: this.zoom_link,
               days: [this.days],
               time: this.time,
               duration: this.duration,
               status: this.status,
               unit: this.unit
            })
            .then((resp)=>{
                   if (resp.status ==200){
                      this.$router.push({path: '/vue/batch'})
                  }
               }).then(()=>{
                   Swal.fire({
               
                icon: 'success',
                title: 'Batch Added Successfully',
                showConfirmButton: false,
                timer: 1500
                })
               })
            
        },
    },
};
</script>
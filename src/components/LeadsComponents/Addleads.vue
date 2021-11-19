<template>
    <center>
    <form class="p-4 shadow-md rounded-lg text-left mt-3" style="max-width: 500px;">
        <center>
        <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-black-800">Add Leads</h4>
        </center>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="first_name">First Name</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter First Name"  id="first_name" name="first_name" v-model="first_name">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="last_name">Last Name</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Last Name"  id="last_name" name="last_name" v-model="last_name">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="age">Age</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Age"  id="age" name="age" v-model="age">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="email">Email</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Your Email ID"  id="email" name="email" v-model="email">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="mobile">Mobile</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Phone Number"  id="phone_number" name="mobile" v-model="mobile">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="child_name">Child Name</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Child Name"  id="child_name" name="child_name" v-model="child_name">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="tags">Tag</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Tag"  id="tags" name="tags" v-model="tags">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="tags">Tag</label>
            <select class="form-select text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Select Tags" id="tags" name="tags" v-model="tags">
                <option>alumni</option>
            </select>
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="segments">Segment</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Segment" id="segments" name="segments" v-model="segments">
        </div>
          <div class="text-center mt-3">
            <button @click.prevent="addLeads()" class="px-7 py-2 mx-2 text-white rounded text-center bg-purple-600 font-bold text-white">Add Leads</button>
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
            list: {
                first_name: "",
                last_name: "",
                age: "",
                email: "",
                mobile: "",
                child_name: "",
                tags: "",
                segments: ""
            }
        }
      },
    methods : {
        async addLeads() {
            await axios.post("https://3.7.128.140:9080/leads/api/addLeads", {
               first_name: this.first_name,
               last_name: this.last_name,
               age: this.age,
               email: this.email,
               mobile: this.mobile,
               child_name: this.child_name,
               tags: [this.tags],
               segments: [this.segments]
            })
            .then((resp)=>{
                   console.log("Response",resp)
               }).catch(error=>{
                   console.log("Error",error.resp)
               }).then(()=>{
                   Swal.fire({
               
                icon: 'success',
                title: 'Leads Added Successfully',
                showConfirmButton: false,
                timer: 1500
                })
               })

            
        },
    },
};
</script>
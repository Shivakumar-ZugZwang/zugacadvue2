<template>
    <center>
    <form class="p-4 shadow-md rounded-lg text-left mt-3" style="max-width: 500px;">
        <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Update Leads</h1>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="first_name">First Name</label>
            <input class="text-gray-500 font-bold shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter First Name"  id="first_name" name="first_name" v-model="list.first_name">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="last_name">Last Name</label>
            <input class="text-gray-500 font-bold shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Last Name"  id="last_name" name="last_name" v-model="list.last_name">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="age">Age</label>
            <input class="text-gray-500 font-bold shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Age"  id="age" name="age" v-model="list.age">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="email">Email</label>
            <input class="text-gray-500 font-bold shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Your Email ID"  id="email" name="email" v-model="list.email">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="mobile">Mobile</label>
            <input class="text-gray-500 font-bold shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Phone Number"  id="mobile" name="mobile" v-model="list.mobile">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="child_name">Child Name</label>
            <input class="text-gray-500 font-bold shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Child Name"  id="child_name" name="child_name" v-model="list.child_name">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="tags">Tag</label>
            <input class="text-gray-500 font-bold shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Tag"  id="tags" name="tags" v-model="list.tags">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="segments">Segment</label>
            <input class="text-gray-500 font-bold shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter segments"  id="segments" name="segments" v-model="list.segments">
        </div>
        <div class="text-center mt-3">
            <button @click.prevent="updateLeads" class="px-7 py-2 mx-2 text-white rounded text-center bg-purple-600 font-bold text-white">Update Leads</button>
        </div>
    </form>
    </center>
</template>


<script>

import axios from 'axios'

export default {
    name: 'Updateleads',
    data() {
      return {
            list:
            {
              first_name: "",
              last_name: "",
              age: "",
              child_name: "",
              email: "",
              mobile: "",
              tags: "",
              segments: ""
            }
        }
    },
    methods:
    {
        async updateLeads()
        {
            axios.put(`https://3.7.128.140:9083/leads/api/updateLead/${this.$route.params.email}/${this.$route.params.first_name}`,{
                first_name: this.list.first_name,
                last_name: this.list.last_name,
                age: this.list.age,
                child_name: this.list.child_name,
                email: this.list.email,
                mobile: this.list.mobile,
                tags: [this.list.tags],
                segments: [this.list.segments]
            })
            
            .then((res)=>{
                if (res.status ==200)
                {
                    this.$router.push({path: '/vue/viewlead'})
                }
            })
    },
    },
        async mounted() {
            const result = await axios.get("https://3.7.128.140:9083/leads/api/viewLead/"+this.$route.params.email+"/"+this.$route.params.first_name)
            this.list = result.data.leadData
        }
}
</script>
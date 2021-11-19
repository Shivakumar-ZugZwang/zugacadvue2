<template>
    <center>
    <form class="p-4 shadow-md rounded-lg text-left mt-3" style="max-width: 500px;">
        <center>
        <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-purple-800">Add User</h4>
        </center>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="usertype">Select Role</label>
        <select class="from-select text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Select Role" id="usertype" name="usertype" v-model="usertype">
                <option id='1'>{{superUser}}</option>
                <option >{{admin}}</option>
                <option>Coach</option>
                
            </select>
           
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="email">Email</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Email"  id="email" name="email" v-model="email">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="password">Password</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="password" placeholder="Password"  id="password" name="password" v-model="password">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="confirm password">Confirm Password</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="password" placeholder="Confirm Passwod"  id="confirm" name="confirm" v-model="confirm">
        </div>
        
        
        
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="first_name">First Name</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Your First Name"  id="first_name" name="first_name" v-model="first_name">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="last_name">Last Name</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Your Last Name"  id="last_name" name="last_name" v-model="last_name">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="phone">Phone</label>
        <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter Your Phone Number"  id="phone" name="phone" v-model="phone">
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="status">Select Status</label>
        <select class="from-select text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Select Status" id="status" name="status" v-model="status">
                <option >Select Status</option>
                <option>Active</option>
                <option>Closed</option>
                <option>Dormant</option>
                
                
            </select>
        </div>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="type">Select Type</label>
        <select class="from-select text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Select type" id="type" name="type" v-model="type">
               <option >Select Type</option>
                <option>FullTime</option>
                <option>partTime</option>
                
            </select>
        </div>
       
        <div class="text-center mt-3">
            <button @click.prevent="addUser()" class="px-7 py-2 mx-2 text-white rounded text-center bg-purple-600 font-bold text-white">Add User</button>
        </div>
    </form>
    </center>
</template>

<script>
console.log(process.env.VUE_APP_SUPER_USER)
  console.log()
const superUser = process.env.VUE_APP_SUPER_USER ;
const admin = process.env.VUE_APP_ADMIN;
import axios from "axios"
import Swal from "sweetalert2"


export default{
    name: 'Adduser',
    data(){
        return{
               usertype: "",
               email: "",
               password: "",
               confirm: "",
               first_name: "",
               last_name: "",
               phone: "",
               type: "",
               status: "",
               program: "",
               superUser,
               admin
        
           }

    },
    methods:{
        addUser(){
            if(this.usertype === superUser){
             const data ={
                   "usertype": this.usertype,
                   "email": this.email,
                   "password": this.password,
                   "confirm": this.confirm,
                   "first_name": this.first_name,
                   "last_name": this.last_name,
                   "phone": this.phone,
                   "type": this.type,
                   "status": this.status,
                   "program": this.program,
               }
               console.log(data)
                axios.post("https://13.126.146.131:9081/admin/api/addSuperUser", data )
               .then((resp)=>{
                   console.log("Response",resp)
               }).catch(error=>{
                   console.log("Error",error.resp)
               }).then(()=>{
                   Swal.fire({
               
                icon: 'success',
                title: 'User Added Successfully',
                showConfirmButton: false,
                timer: 1500
                })
               })} else if(this.usertype === admin){
                   const data ={
                   "usertype": this.usertype,
                   "email": this.email,
                   "password": this.password,
                   "confirm": this.confirm,
                   "first_name": this.first_name,
                   "last_name": this.last_name,
                   "phone": this.phone,
                   "type": this.type,
                   "status": this.status,
                   "program": this.program,
                  }

                  console.log(data)
                axios.post("https://13.126.146.131:9081/admin/api/addAdmin", data )
               .then((resp)=>{
                   console.log("Response",resp)
               }).catch(error=>{
                   console.log("Error",error.resp)
               }) .then(()=>{
                   Swal.fire({
               
                icon: 'success',
                title: 'User Added Successfully',
                showConfirmButton: false,
                timer: 1500
                })
               }) }else{
                   const data ={
                   "usertype": this.usertype,
                   "email": this.email,
                   "password": this.password,
                   "confirm": this.confirm,
                   "first_name": this.first_name,
                   "last_name": this.last_name,
                   "phone": this.phone,
                   "type": this.type,
                   "status": this.status,
                   "program": this.program,
                  }

                   console.log(data)
                axios.post("https://13.126.146.131:9081/admin/api/addCoach", data )
               .then((resp)=>{
                   console.log("Response",resp)
               }).catch(error=>{
                   console.log("Error",error.resp)
               }).then(()=>{
                   Swal.fire({
               
                icon: 'success',
                title: 'User Added Successfully',
                showConfirmButton: false,
                timer: 1500
                })
               })
               }
        },
    }
      
    
};

</script>
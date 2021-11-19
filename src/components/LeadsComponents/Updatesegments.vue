<template>
  <center>
    <form class="p-4 shadow-md rounded-lg text-left mt-3"
                 style="max-width: 500px;">
        <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Update Segment</h1>
        
        <div class="flex flex-col mb-4">
            <label class="text-gray-700 font-bold py-2" for="segment_name">Segment Name</label>
                <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
                        type="text" name="segment_name" id="segment_name" placeholder="Enter Segment Name">
        </div>
        
        <div class="flex flex-col mb-4">
            <label class="text-gray-700 font-bold py-2" for="select_tags">Select tag</label>
                <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
                        type="text" name="select_tags" id="select_tags" placeholder="">
        </div>
        

        
        <div class="text-center mt-3">
            <button @click.prevent="updateSegment" class="px-7 py-2 mx-2 text-white rounded text-center bg-purple-600 font-bold text- white">SUBMIT</button>
        </div>
    </form>
  </center>
</template>

<script>
  import axios from 'axios'
  import Swal from 'sweetalert2'
  
  export default {
 
    data(){
        return {
          list: {
          segment_name:"",
          select_tags:""
          }
        }
      },
    methods:{
      async updateSegment(){
        await axios.put(`https://3.7.128.140:9083/leads/api/updateSegment/${this.$route.params.segment_name}`,{
          segment_name:this.list.segment_name,
          select_tags:this.list.select_tags
                    })
                    .then((res)=>{
                    if (res.status ==200){
                      this.$router.push({path: '/vue/batch'})
                  }
              }).then(()=>{
                   Swal.fire({
               
                icon: 'success',
                title: 'Segment Updated Successfully',
                showConfirmButton: false,
                timer: 1500
                })
               })
        },
    },
     async mounted() {
            const result = await axios.get("Individual Segment API")
            this.list = result.data.batchData
        }
    }
</script>
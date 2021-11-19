<template>
  <center>
    <form class="p-4 shadow-md rounded-lg text-left mt-3"
                 style="max-width: 500px;">
        <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Tag</h1>
        
        <div class="flex flex-col mb-4">
            <label class="text-gray-700 font-bold py-2" for="tag">Tag name</label>
                <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
                        type="text" name="tag" id="tag" placeholder="Tag name">
        </div>
        <div class="text-center mt-3">
            <button @click.prevent="sendPost()" class="px-7 py-2 mx-2 text-white rounded text-center bg-purple-600 font-bold text- white">SUBMIT</button>
        </div>
    </form>
  </center>
</template>

<script>
  import axios from 'axios';
  
  export default {
 
    data(){
        return {
          tag:"",
          
        }
      },
    methods:{
      async updatetag(){
        await axios.put("https://3.7.128.140:9080/leads/api/tag",{
          tag:this.tag,
                    })
          .then(alert("Added successfully"))
      },
    },
    async mounted() {
    const result = await axios.get("https://3.7.128.140:9080/leads/api/"+this.$route.params.tag)
    this.list = result.data.tags
  
  };
</script>
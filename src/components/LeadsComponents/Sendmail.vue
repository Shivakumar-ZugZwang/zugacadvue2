<template>
  <center>
    <form class="p-4 shadow-md rounded-lg text-left mt-3"
                 style="max-width: 500px;">
        <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Send mail</h1>
        
        <div class="flex flex-col mb-4">
            <label class="text-gray-700 font-bold py-2" for="stream">Stream</label>
                <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
                        type="select" name="stream" id="stream" placeholder="">
        </div>
        
        <div class="flex flex-col mb-4">
            <label class="text-gray-700 font-bold py-2" for="subject">Subject</label>
                <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
                        type="text" name="subject" id="subject" placeholder="">
        </div>
        
        <div class="flex flex-col mb-4">
            <label class="text-gray-700 font-bold py-2" for="Message">Message</label>
                <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
                        type="text" name="Message" id="Message" placeholder="">
        </div>       
        
        <div class="flex flex-col mb-4">
            <label class="text-gray-700 font-bold py-2" for="footer">Footer</label>
                <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
                        type="text" name="footer" id="footer" placeholder="">
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
          stream:"",
          subject:"",
          Message:"",
          footer:"",
          
          
        }
      },
    methods:{
      async sendPost(){
        await axios.post("https://13.126.146.131:9082/leads/api/sendmail",{
          stream:this.stream,
          subject:this.subject,
          Message:this.Message,
          footer:this.footer
                    })
          .then(alert("Added successfully"))
      },
    },
  
  };
</script>
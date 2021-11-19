<template>
    <center>
    <form class="p-4 shadow-md rounded-lg text-left mt-3" style="max-width: 500px;">
        <center>
        <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-black-800">Add Segment</h4>
        </center>
        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="segment_name">Segment Name</label>
            <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Enter First Name"  id="segment_name" name="segment_name" v-model="segment_name">
        </div>

        <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="tags">Tag</label>
            <select class="form-select text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" type="text" placeholder="Select Tags" id="tags" name="tags" v-model="tags">
                <option>alumni</option>
            </select>
        </div>

        <div class="text-center mt-3">
            <button @click.prevent="addSegments()" class="px-7 py-2 mx-2 text-white rounded text-center bg-purple-600 font-bold text-white">Add Segment</button>
        </div>
    </form>
    </center>
</template>

<script>

import axios from 'axios';

export default {
    data () {
        return {
            list: {
                segment_name: "",
                tags: ""
            }
        }
      },
    methods : {
        async addSegments() {
            await axios.post("https://3.7.128.140:9083/leads/api/addSegments", {
               segment_name: this.segment_name,
               tags: [this.tags]
            })
            .then(alert("Segment Added Successfully"))

            
        },
    },
};
</script>












































<!--<template>-->
<!--  <center>-->
<!--    <form class="p-4 shadow-md rounded-lg text-left mt-3"-->
<!--                 style="max-width: 500px;">-->
<!--        <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Add Segment</h1>-->
        
<!--        <div class="flex flex-col mb-4">-->
<!--            <label class="text-gray-700 font-bold py-2" for="segment_name">Segment Name</label>-->
<!--                <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"-->
<!--                        type="text" name="segment_name" id="segment_name" placeholder="Enter Segment Name">-->
<!--        </div>-->
        
<!--        <div class="flex flex-col mb-4">-->
<!--            <label class="text-gray-700 font-bold py-2" for="select_tags">Select tag</label>-->
<!--                <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"-->
<!--                        type="text" name="select_tags" id="select_tags" placeholder="">-->
<!--        </div>-->
        

        
<!--        <div class="text-center mt-3">-->
<!--            <button @click.prevent="sendPost()" class="px-7 py-2 mx-2 text-white rounded text-center bg-purple-600 font-bold text- white">SUBMIT</button>-->
<!--        </div>-->
<!--    </form>-->
<!--  </center>-->
<!--</template>-->

<!--<script>-->
<!--  import axios from 'axios';-->
  
<!--  export default {-->
 
<!--    data(){-->
<!--        return {-->
<!--          segment_name:"",-->
<!--          select_tags:""-->
<!--        }-->
<!--      },-->
<!--    methods:{-->
<!--      async sendPost(){-->
<!--        await axios.post("https://13.126.146.131:9082/leads/api/addsegments",{-->
<!--          segment_name:this.segment_name,-->
<!--          select_tags:this.select_tags-->
<!--                    })-->
<!--          .then(alert("Added successfully"))-->
<!--      },-->
<!--    },-->
  
<!--  };-->
<!--</script>-->
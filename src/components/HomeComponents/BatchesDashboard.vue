<template>
    <router-link to="/vue/batch">
        <div class="shadow-md rounded-md overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYbJAXHePEmcufukr7M0_Gy_KfgG3YJlOK0A&usqp=CAU" class="" alt=""/>
                <div class="p-4">
                    <center><h5 class="text-xl font-bold mb-2">Batches</h5></center>
                    <div>
                        <center>
                        <h1 class="text-3xl font-bold leading-normal mt-0 mb-2 text-black-800">{{list.batch}}</h1>
                        </center>
                    </div>
                </div>
        </div> 
    </router-link>
</template>

<script>

import axios from "axios"

export default {
    name: 'App',
    data()
    {
        return {
        list:[]
        }
    },
    async mounted()
    {
        let result = await axios.get("https://3.7.128.140:9083/api/home/SuperUser");
        this.list=result.data
    },
};

</script>
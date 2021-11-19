<template>
    <div class="overflow-auto example">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <h1 class="display-4">Archived Batch List</h1>
                <hr>
            <div>
                <table id="example" class="stripe row-border order-column" style="width:100%" data-page-length='50'>
                    <thead>
                        <tr>
                            <th>Batch Name</th>
                            <th>Program</th>
                            <th>Zoom Account</th>
                            <th>Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in list" :key="item.id">
                            <td>{{item.name}}</td>
                            <td>{{item.program}}</td>
                            <td>{{item.zoom_account}}</td>
                            <td>{{ }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
</div>
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
        let result = await axios.get("https://3.7.128.140:9083/batch/api/viewarchived");
        this.list=result.data.batchData
    },
};

</script>

<style>

  .table-style1 thead th {
   background-color: black;
   color: white;
   vertical-align: middle; 
   text-align: center;
}
</style>
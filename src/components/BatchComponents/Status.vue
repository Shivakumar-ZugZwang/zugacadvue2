<template>
    <div class="grid gap-3 grid-cols-4">
    <!-- Card1 -->
    <div class="shadow-md rounded-md" style="width: 250px; height:100px;">
        <div class="p-4">
            <center>
                <h5 class="text-xl font-bold mb-2">Total Students</h5>
            </center>
            <div>
                <center>
                    <h1 class="text-3xl font-bold leading-normal mt-0 mb-2 text-black-800">{{list.totalStudents}}</h1>
                </center>
            </div>
        </div>
    </div>
    <!-- Card1 -->
    <!-- Card2 -->
    <div class="shadow-md rounded-md" style="width: 250px; height:100px;">
        <div class="p-4">
            <center>
                <h5 class="text-xl font-bold mb-2">Active Students</h5>
            </center>
            <div>
                <center>
                    <h1 class="text-3xl font-bold leading-normal mt-0 mb-2 text-black-800">{{list.activeStudents}}</h1>
                </center>
            </div>
        </div>
    </div>
    <!-- Card2 -->
    <!-- Card3 -->
    <div class="shadow-md rounded-md" style="width: 250px; height:100px;">
        <div class="p-4">
            <center>
                <h5 class="text-xl font-bold mb-2">EMI Students</h5>
            </center>
            <div>
                <center>
                    <h1 class="text-3xl font-bold leading-normal mt-0 mb-2 text-black-800">{{list.emiStudents}}</h1>
                </center>
            </div>
        </div>
    </div>
    <!-- Card3 -->
    <!-- Card4 -->
    <div class="shadow-md rounded-md" style="width: 250px; height:100px;">
        <div class="p-4">
            <center>
                <h5 class="text-xl font-bold mb-2">Renewed Students</h5>
            </center>
            <div>
                <center>
                    <h1 class="text-3xl font-bold leading-normal mt-0 mb-2 text-black-800">{{list.renewedStudents}}</h1>
                </center>
            </div>
        </div>
    </div>
    <!-- Card4 -->
    <!-- Card5 -->
    <div class="shadow-md rounded-md" style="width: 250px; height:100px;">
        <div class="p-4">
            <center>
                <h5 class="text-xl font-bold mb-2">Inactive Students</h5>
            </center>
            <div>
                <center>
                    <h1 class="text-3xl font-bold leading-normal mt-0 mb-2 text-black-800">{{list.inactiveStudents}}</h1>
                </center>
            </div>
        </div>
    </div>
    <!-- Card5 -->
    <!-- Card6 -->
    <div class="shadow-md rounded-md" style="width: 250px; height:100px;">
        <div class="p-4">
            <center>
                <h5 class="text-xl font-bold mb-2">Dormant Students</h5>
            </center>
            <div>
                <center>
                    <h1 class="text-3xl font-bold leading-normal mt-0 mb-2 text-black-800">{{list.dormantStudents}}</h1>
                </center>
            </div>
        </div>
    </div>
    <!-- Card6 -->
    <!-- Card7 -->
    <div class="shadow-md rounded-md" style="width: 250px; height:100px;">
        <div class="p-4">
            <center>
                <h5 class="text-xl font-bold mb-2">Closed Students</h5>
            </center>
            <div>
                <center>
                    <h1 class="text-3xl font-bold leading-normal mt-0 mb-2 text-black-800">{{list.closedStudents}}</h1>
                </center>
            </div>
        </div>
    </div>
    <!-- Card7 -->
    <!-- Card8 -->
    <div class="shadow-md rounded-md" style="width: 250px; height:100px;">
        <div class="p-4">
            <center>
                <h5 class="text-xl font-bold mb-2">Cancelled Students</h5>
            </center>
            <div>
                <center>
                    <h1 class="text-3xl font-bold leading-normal mt-0 mb-2 text-black-800">{{list.cancelledStudents}}</h1>
                </center>
            </div>
        </div>
    </div>
    <!-- Card8 -->
    </div>
</template>

<script>

    import axios from "axios"

    export default {
        name: 'simple',
    data() {
        return {
            list: []
        }
    },
    async mounted() {
        const result = await axios.get("https://3.7.128.140:9080/batch/api/batchDashboard/"+this.$route.params.batch_id)
        this.list = result.data.dashboard
    }
}
</script>
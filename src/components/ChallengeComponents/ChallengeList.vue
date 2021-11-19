<template>
    <div class="overflow-auto example">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <h1 class="display-4">List of Challenges</h1>
                <hr>
            <div>
                <table id="example" class="stripe row-border order-column" style="width:100%" data-page-length='50'>
                    <thead>
                        <tr>
                            <th>Challenge Name</th>
                            <th>Details</th>
                            <th>Program</th>
                        </tr>
                    </thead>
                    <!--<tbody>-->
                    <!--    <tr v-for="item in list" :key="item.id">-->
                    <!--        <td></td>-->
                    <!--    </tr>-->
                    <!--</tbody>-->
                </table>
            </div>
        </div>
    </div>
    </div>
</div>
</template>


<script>
    export default {
    };
</script>
<template>
    <div class="dash">
           <div class="box">
            <p class="title"> Welcome to User's page</p>
            
        </div>

        <div class="card">
            <h2 class="stud">SuperUser</h2>
            <p class="stu">1213</p>

        </div>

        <div class="card1">
             <h2 class="stud">Admin</h2>
             <p class="bat">33</p>
        </div>


         <div class="card3">
        <h2 class="stud">Coaches</h2>
        <p class="coa">45</p>
       
        </div>
    </div>
</template>

<style scoped>
.title{
  
    justify-content: center;
    display: flex;

    font-size: 65px;
    padding-top: 64px;
    font-weight: 300;
}
.card{
    height: 200px;
  background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%); 
    border-radius: 4px;
    width: 245px;
    margin-left: 299px;
    margin-top: 40px;
}
.card1{
    width: 245px;
    height: 200px;
    background: linear-gradient(to left, #ff9933 0%, #ff0000 100%);
    margin-left: 661px; 
    margin-top: -219px;
    border-radius: 4px;
}


.card3{
    width: 245px;
    height: 200px;
    background: linear-gradient(to left, #66ff99 0%, #66ccff 100%);
    border-radius: 4px;
    margin-left: 1025px;
    margin-top: -220px;

}
.stud{
  margin-left: 76px;
  padding-top: 43px;
}
.stu{
    margin-left: 77px;
    margin-top: 12px;
    font-weight: 300;
    font-size: xxx-large;
}
.bat{
   margin-left: 95px;
    margin-top: 12px;
    font-weight: 300;
    font-size: xxx-large;

}
.ad{
   margin-left: 98px;
    margin-top: 12px;
    font-weight: 300;
    font-size: xxx-large;
}
.coa{
   margin-left: 95px;
    margin-top: 12px;
    font-weight: 300;
    font-size: xxx-large;
}

</style>
<template>
  <div class="quiz">
    <h1 class="title">Add Quiz</h1>
    <form @submit.prevent="addQuiz">
      <input
        type="text"
        class="image"
        placeholder="Image URL"
        v-model="imageUrl"
      />
      <br />
      <input
        type="text"
        class="qes"
        placeholder="Enter Your Question"
        v-model="questions"
      />
      <br />
      <input
        type="text"
        class="opt"
        placeholder="Enter Total Options"
        v-model="options"
      />
      <br />
      <input
        type="text"
        class="ans"
        placeholder="Correct Answer"
        v-model="solution"
      />
      <br />
      <input
        type="text"
        class="mark"
        placeholder="Enter Marks"
        v-model="marks"
      />
      <br />

      <button class="btn">Save Test</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Quiz",
  data() {
    return {
      imageUrl: "",

      questions: "",
      options: "",
      solution: "",
      marks: "",
    };
  },
  methods: {
    addQuiz() {
      const data = {
        imageUrl: this.imageUrl,

        questions: this.questions,
        options: this.options,
        solution: this.solution,
        marks: this.marks,
      };
      console.log(data);

      return this.$axios
        .post("https://3.7.128.140:9083/quiz/api/addQuiz", data)
        .then((resp) => {
          console.log("Response", resp);
        })
        .catch((error) => {
          console.log("Error", error.resp);
        });
    },
  },
};
</script>
<style scoped>
.image {
  width: 444px;
  height: 32px;
  margin-top: 50px;
}
.qes {
  width: 444px;
  height: 32px;
  margin-top: 15px;
}
.ans {
  width: 444px;
  height: 32px;
  margin-top: 15px;
}
.opt {
  width: 444px;
  height: 32px;
  margin-top: 15px;
}
.mark {
  width: 444px;
  height: 32px;
  margin-top: 15px;
}
.btn {
  width: 150px;
  height: 50px;
  margin-top: 25px;
  border: none;
  background: rgb(77, 77, 245);
  color: white;
}
form {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.title {
  justify-content: center;
  display: flex;
}
</style>

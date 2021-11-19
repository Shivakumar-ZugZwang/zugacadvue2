<template>
  <center>
    <form
      class="p-4 shadow-md rounded-lg text-left mt-3"
      style="max-width: 500px"
    >
      <center>
        <h4
          class="text-3xl font-normal leading-normal mt-0 mb-2 text-purple-800"
        >
          Update Quiz
        </h4>
      </center>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="quizName"
          >Quiz Name</label
        >
        <input
          class="
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="text"
          placeholder="Enter the Quiz Name"
          id="quizName"
          name="quizName"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="text-gray-700 font-bold py-2" for="category"
          >Category</label
        >
        <input
          class="
            text-gray-700
            shadow
            border
            rounded
            border-gray-300
            focus:outline-none focus:shadow-outline
            py-1
            px-3
            mb-3
          "
          type="text"
          placeholder="Enter Category"
          id="category"
          name="category"
        />
      </div>

      <div class="text-center mt-3">
        <button
          class="
            px-7
            py-2
            mx-2
            text-white
            rounded
            text-center
            bg-purple-600
            font-bold
            text-white
          "
        >
          Update
        </button>
      </div>
    </form>
  </center>
</template>
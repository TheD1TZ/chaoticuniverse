<template>
  <div class="flex  items-center justify-center">
<!--    md:flex-->
    <div class="flex space-x-32 md:space-x-64 px-5">
    <!-- artist info -->
    <div class="grid text-center p-2 py-12 w-min md:w-128">
      <h1 class="text-white font-extrabold italic text-5xl">{{ name }}</h1>
      <div class="flex justify-center">
        <div class="w-80">
          <a  class="text-white font-normal text-md"> {{ description }}</a>
        </div>
      </div>
      <div>
        <button class="bg-gray-700 hover:bg-gray-500 py-2 px-4 rounded items-center">
          <a :href="social" class="font-bold text-white">SOCIALS</a>
        </button>
      </div>
    </div>

    <!-- artist image -->
    <div class="flex justify-center hidden sm:block drop-shadow-xl">
      <img class="w-80 h-fit rounded-md" :src="image" alt="artist image">
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Artist",
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    social: {
      type: String,
      required: false
    }
  }
}
</script>
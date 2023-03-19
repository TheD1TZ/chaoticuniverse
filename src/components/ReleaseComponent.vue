<template>
  <div
      class="p-4 shadow-xl rounded-lg text-white bg-neutral-800 hover:bg-neutral-600 hover:scale-105 cursor-pointer ease-in-out duration-200"
      @click="openLink(streamlink)">
    <div class="flex justify-center">
      <img :src="artwork" class="w-64 rounded-xl">
    </div>
    <div class="text-center py-3">
      <h2 class="text-3xl whitespace-pre-line font-semibold">{{ title }}</h2>
      <p class="text-gray-200 text-lg">{{ artists }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReleaseComponent",
  props: {
    artists: String,
    title: String,
    streamlink: String,
    artwork: String,
  },
  methods: {
    openLink(link) {
      window.open(link, "_blank");
    },
  }
}
</script>
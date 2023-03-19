<template>
  <header class="top-0 bg-neutral-900 flex items-center justify-between px-8 py-5 shadow-lg">
    <!-- logo -->
    <h1 class="">
      <a href="/">
        <h2 class="font-logo text-3xl text-white font-extrabold">{logo}</h2>
      </a>
    </h1>

    <!-- navigation -->
      <nav class="nav text-lg">
        <ul class="flex items-center text-white font-main text-1xl">
          <li v-on:click="this.$router.push({ path: 'home' })" class="p-4 hover:text-gray-500 duration-200 cursor-pointer">
            <a>HOME</a>
          </li>
          <li v-on:click="this.$router.push({ path: 'about' })" class="p-4 hover:text-gray-500 duration-300 cursor-pointer">
            <a>ABOUT</a>
          </li>
          <li v-on:click="this.$router.push({ path: 'demos' })" class="p-4 hover:text-gray-500 duration-300 cursor-pointer">
            <a>DEMOS</a>
          </li>
          <li v-on:click="this.$router.push({ path: 'artists' })" class="p-4 hover:text-gray-500 duration-300 cursor-pointer">
            <a>ARTISTS</a>
          </li>
          <li v-on:click="this.$router.push({ path: 'contact' })" class="p-4 hover:text-gray-500 duration-300 cursor-pointer">
            <a>CONTACT</a>
          </li>
        </ul>
      </nav>

  </header>
</template>

<script>

export default {
  name: "Header",
  methods: {
    push() {
      return push
    }
  },
}
</script>

<style scoped>

</style>
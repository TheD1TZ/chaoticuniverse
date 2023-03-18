<template>
  <header class="sticky top-0 bg-black flex items-center justify-between px-8 py-5 shadow-lg">
    <!-- logo -->
    <h1 class="w-3/12">
      <a href="/">
        <h2 class="font-logo text-4xl text-white">Chaotic Universe</h2>
      </a>
    </h1>

    <!-- navigation -->
    <nav class="nav text-lg">
      <ul class="flex items-center text-white font-main text-1xl">
        <li class="p-4 hover:text-gray-500 duration-200 cursor-pointer">
          <a href="/">HOME</a>
        </li>
        <li class="p-4 hover:text-gray-500 duration-300 cursor-pointer">
          <a href="/about">ABOUT</a>
        </li>
        <li class="p-4 hover:text-gray-500 duration-300 cursor-pointer">
          <a href="/bookings">BOOKINGS</a>
        </li>
        <li class="p-4 hover:text-gray-500 duration-300 cursor-pointer">
          <a href="/music">MUSIC</a>
        </li>
        <li class="p-4 hover:text-gray-500 duration-300 cursor-pointer">
          <a href="/contact">CONTACT</a>
        </li>
      </ul>
    </nav>

    <!-- buttons --->
    <div class="w-3/12 flex justify-end">
      <div class=" grid grid-cols-6 gap-2">
        <a href="https://www.instagram.com/ditzkickz/">
          <img src="/socials/icons8-instagram.svg" class="h-6">
        </a>
        <a href="https://www.facebook.com/DitzKickz/">
          <img src="/socials/icons8-facebook-f.svg" class="h-6">
        </a>
        <a href="https://www.youtube.com/@ditzkickz">
          <img src="/socials/icons8-youtube.svg" class="h-6">
        </a>
        <a href="https://open.spotify.com/artist/02Qk9K9AJwyQWcZ5BrSgd7?si=zAZnfNq4R7Sv1PEFTpTVuw&nd=1">
          <img src="/socials/icons8-spotify.svg" class="h-6">
        </a>
        <a href="https://soundcloud.com/ditzkickz">
          <img src="/socials/icons8-soundcloud.svg" class="h-6">
        </a>
        <a href="https://www.tiktok.com/@ditzkickz">
          <img src="/socials/tiktok.svg" class="h-6">
        </a>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",
}
</script>

<style scoped>

</style>
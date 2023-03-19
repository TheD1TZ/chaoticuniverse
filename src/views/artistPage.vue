<template>
  <div class="flex bg-center w-full justify-center p-32 bg-fixed bg-[url('/backgrounds/background1.jpg')]">
    <h1 class="font-logo text-8xl p-24 text-white font-extrabold">Our Artists</h1>
  </div>

  <div class="bg-neutral-900 flex justify-center py-12">
      <div class="grid grid-cols-1 gap-24">
        <div v-for="artist in artists">
          <Artist :name="artist.name" :image="artist.image" :description="artist.description" :social="artist.social"/>
        </div>
    </div>

  </div>
</template>

<script>
import Artist from "../components/Artist.vue";

export default {
  name: "artistPage",
  components: {Artist},
  data() {
    return {
      artists: [
        {
          name: "Chaotic Hostility",
          image: "https://i1.sndcdn.com/avatars-VIS6O5w65rx4uboS-vXrtzw-t500x500.jpg",
          description: "This genre-bending Uptempo Hardcore Duo known for developing their own style, heavy bass and complete crowd-destruction since 2014.",
          social: "https://www.instagram.com/chaotic_hostility/"
        },
        {
          name: "DitzKickz",
          image: "https://i1.sndcdn.com/avatars-T0WZdaxnfth5g5nk-flpHbg-t500x500.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          social: "linktr.ee/D1TZ"
        },
        {
          name: "CrazyKill",
          image: "https://i1.sndcdn.com/avatars-CclWz4G9hrJXBDKD-qkFizg-t500x500.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "JudaX",
          image: "https://partyflock.nl/images/artist/117920_1365x1365_582435/JudaX.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },

      ]
    };
  },
}
</script>

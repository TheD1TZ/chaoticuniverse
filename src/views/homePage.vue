<template>
  <div class="flex bg-center justify-center p-32 bg-fixed bg-[url('/backgrounds/background1.jpg')] text-white">
    <h1 class="font-logo text-8xl p-32 font-extrabold">CHAOTIC UNIVERSE</h1>
  </div>

  <!-- Music -->
  <div class="flex bg-center bg-neutral-700 justify-center text-white">
    <div class="grid grid-cols-1 text-center">
      <h1 class="font-main text-6xl py-20">LATEST RELEASES</h1>

      <!--      shows a list of all the albums from the json-->
      <div class="grid grid-cols-5 gap-4 py-9">
        <div v-for="release in items">
          <ReleaseComponent :title="release.track.album.name"
                            :artists="getArtistNames(release.track.album.artists)"
                            :artwork="release.track.album.images[0].url"
                            :streamlink="release.track.album.external_urls.spotify"
          />
        </div>
      </div>
      <button class="bg-gray-700 hover:bg-gray-500 py-2 px-4 rounded items-center">
        <a href="/releases" class="font-bold text-white">LISTEN TO ALL RELEASES</a>
      </button>
    </div>
  </div>
</template>

<script>
import ReleaseComponent from "../components/ReleaseComponent.vue";

export default {
  name: "Home",
  components: {ReleaseComponent},
  data() {
    return {
      items: []
    };
  },
  mounted() {
    // Retrieve data from local storage
    const data = localStorage.getItem("tracks:latest");

    // If data exists, parse it and bind to data property
    if (data) {
      this.items = JSON.parse(data);
    }
  },
  methods: {
    getArtistNames(tracks) {
      let names = tracks.map(track => track.name);
      return names.join(", ");
    }
  }
}
</script>
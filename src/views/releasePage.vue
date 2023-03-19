<template>
  <div class="flex bg-center justify-center p-24 bg-fixed bg-center bg-fixed bg-[url('/backgrounds/background2.jpg')]">
    <div class="grid grid-cols-1 text-center">
      <h1 class="font-main text-6xl p-2 text-white">CHAOTIC UNIVERSE</h1>
      <div class="grid grid-cols-1 font-main text-xl text-white">
        <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</a>
        <a>sed do eiusmod tempor</a>
      </div>


      <div class="grid grid-cols-4 gap-6 py-9">
        <div v-for="release in items">
          <ReleaseComponent :title="release.track.album.name"
                            :artists="getArtistNames(release.track.album.artists)"
                            :artwork="release.track.album.images[0].url"
                            :streamlink="release.track.album.external_urls.spotify"
          />
        </div>
      </div>
    </div>
  </div>

<!--  SPOTIFY SOUNDCLOUD-->
  <div class="bg-fixed bg-center pb-12 bg-fixed bg-[url('/backgrounds/background1.jpg')] text-white">
    <div class="grid grid-cols-2 gap-24 p-24 px-44 text-center">
      <div class="grid grid-cols-1 gap-6">
        <div class="py-2">
          <h1 class="text-6xl p-2">CHAOTIC UNIVERSE</h1>
          <h1 class="text-6xl p-2">PLAYLIST</h1>
        </div>
        <iframe class="rounded-2xl"
                height="450"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1585974664&color=%232a3435&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                width="700"></iframe>
      </div>

      <div class="grid grid-cols-1 gap-6">
        <div class="py-2">
          <h1 class="text-6xl p-2">CHAOTIC UNIVERSE</h1>
          <h1 class="text-6xl p-2">DISCOGRAPHY</h1>
        </div>
        <iframe allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowfullscreen=""
                class="rounded-2xl"
                frameBorder="0" height="450" loading="lazy"
                src="https://open.spotify.com/embed/playlist/6uhNUIZexlXjVznnh4GgjD?utm_source=generator&theme=0"
                style="border-radius:12px"
                width="100%"></iframe>
      </div>
    </div>
  </div>

</template>

<script>
import ReleaseComponent from "../components/ReleaseComponent.vue";

export default {
  name: "releasePage",
  components: {ReleaseComponent},
  data() {
    return {
      items: []
    };
  },
  mounted() {
    // Retrieve data from local storage
    const data = localStorage.getItem("tracks:all");

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
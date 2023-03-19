<template>

<!--  SPOTIFY SOUNDCLOUD-->
  <div class="bg-fixed bg-center pb-12 bg-fixed bg-[url('/backgrounds/background1.jpg')] text-white">
    <div class="grid grid-cols-2 gap-24 p-24 px-44 text-center">
      <div class="grid grid-cols-1 gap-6">
        <div class="py-2">
          <h1 class="text-6xl p-2">ALL OF DITZKICKZ</h1>
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
export default {
  name: "releasePage"
}
</script>
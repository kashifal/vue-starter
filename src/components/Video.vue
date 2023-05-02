<template>
  <video-player
    class="video-player vjs-big-play-centered w-full  h-[70vh]  rounded-lg border mt-8 border-gray-800"
    src="https://vjs.zencdn.net/v/oceans.mp4"
    poster="https://vjs.zencdn.net/v/oceans.png"
    crossorigin="anonymous"
    playsinline
    controls
    :volume="0.6" 
    :height="1000"
    :playback-rates="[0.7, 1.0, 1.5, 2.0]"
    @ready="handleReady"
    @play="handlePlay"
    @pause="handlePause"
    @ended="handleEnded"
    @loadeddata="handleLoadedData"
    @waiting="handleWaiting"
    @playing="handlePlaying"
    @canplay="handleCanPlay"
    @canplaythrough="handleCanPlayThrough"
    @timeupdate="handleTimeUpdate"
  />
</template>

<script lang="ts">
import { defineComponent, shallowRef } from 'vue';
import { VideoJsPlayer } from 'video.js';
import { VideoPlayer } from '@videojs-player/vue';
import 'video.js/dist/video-js.css';

export default defineComponent({
  name: 'vue-basic-player-example',
  title: 'Basic player (Vue)',
  url: import.meta.url,
  components: {
    VideoPlayer
  },
  setup() {
    const player = shallowRef<VideoJsPlayer>();
    const handleReady = (event: any) => {
      player.value = event.target;
      console.log('Basic player ready', event);
    };

    const handlePlay = (event: any) => {
      console.log('Basic player play', event);
    };

    const handlePause = (event: any) => {
      console.log('Basic player pause', event);
    };

    const handleEnded = (event: any) => {
      console.log('Basic player ended', event);
    };

    const handleLoadedData = (event: any) => {
      console.log('Basic player loadeddata', event);
    };

    const handleWaiting = (event: any) => {
      console.log('Basic player waiting', event);
    };

    const handlePlaying = (event: any) => {
      console.log('Basic player playing', event);
    };

    const handleCanPlay = (event: any) => {
      console.log('Basic player canplay', event);
    };

    const handleCanPlayThrough = (event: any) => {
      console.log('Basic player canplaythrough', event);
    };

    const handleTimeUpdate = (event: any) => {
      console.log('Basic player timeupdate', event.target.currentTime);
    };

    return {
      player,
      handleReady,
      handlePlay,
      handlePause,
      handleEnded,
      handleLoadedData,
      handleWaiting,
      handlePlaying,
      handleCanPlay,
      handleCanPlayThrough,
      handleTimeUpdate
    };
  }
});
</script>

<style scoped>
.video-player {
  background-color: black;
  width: 100%;
}
</style>

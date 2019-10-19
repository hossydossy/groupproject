<template lang="html">
  <div class="container" v-on:click="playPictureGame">
    <img :src="`images/gbr_03.jpg`"></img>
    <h1>Picture Game</h1>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'picture-game-select',
  methods: {
    playPictureGame: function(){
      eventBus.$emit('start-game', this.playPG = true)
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  /* border: 1px solid Black; */
  width: 30%;
  background-color: White;
  border-radius: 10px;
}
img{
  border-radius: 10px;
  margin: 40px auto 0 auto;
}
</style>

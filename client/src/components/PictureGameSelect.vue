<template lang="html">
  <div class="container" v-on:click="playPictureGame">
    <h1>Flag Game</h1>
    <img :src="`images/Scotland.jpg`"></img>

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
  width: 95%;
}
</style>

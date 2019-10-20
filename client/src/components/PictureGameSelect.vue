<template lang="html">
  <div class="container" v-on:click="playPictureGame">
    <h1>Countries of the World</h1>
    <h2>Picture Game</h2>
    <img :src="`https://restcountries.eu/data/gbr.svg`"></img>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'picture-game-select',
  methods: {
    playPictureGame: function(){
      eventBus.$emit('start-game-picture', this.playPG = true)
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
  margin: 38px auto 40px auto;
  max-width: 80%;
  height: auto;
}
</style>

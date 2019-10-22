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
      eventBus.$emit('go-to', this.menuOption = 'playPG')
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
  text-align: center;
  border: 1px solid #dfe1e5;
  border-radius: 8px;
  -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
}
img{
  border-radius: 10px;
  margin: 40px auto 0 auto;
  width: 95%;
  border: solid 3px black;
}
</style>

<template lang="html">
  <div class="container" v-on:click="playBingoGame">
    <!-- <img :src="`images/gbr_03.jpg`"></img> -->
    <h1>Countries of the World</h1>
    <h2>Bingo Game</h2>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'bingo-game-select',
  // props: ['countries'],
  methods: {
    playBingoGame: function(){
      eventBus.$emit('start-game-bingo', this.playBG = true)
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  width: 30%;
  background-color: White;
  border-radius: 10px;
}
img{
  border-radius: 10px;
  margin: 40px auto 0 auto;
}
</style>

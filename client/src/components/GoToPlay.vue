<template lang="html">
  <button type="button" name="Play" v-on:click="goToPlay">Play</button>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'go-to-play',
  methods: {
    goToPlay: function(){
      eventBus.$emit('go-to', this.menuOption = 'play')
    }
  }
}
</script>

<style lang="css" scoped>
button{
  margin: 20px auto 20px auto;
  border-radius: 10px;
  height: 50px;
  width: 150px;
  padding: 8px 8px 8px 8px;
  text-decoration: none;
  font-size: 26px;
  color: Black;
  font-family: 'Courier New';
}
button:hover {
  color: #818181;
}
</style>

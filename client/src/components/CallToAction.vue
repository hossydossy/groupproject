<template lang="html">
  <button type="button" name="Play" v-on:click="startGame">Play</button>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'call-to-action',
  methods: {
    startGame: function(){
      eventBus.$emit('select-game', this.initialised = true)
    }
  }
}
</script>

<style lang="css" scoped>
button{
  margin: 20px auto 20px auto;
  border-radius: 5px;
  height: 50px;
  width: 150px;
}
</style>

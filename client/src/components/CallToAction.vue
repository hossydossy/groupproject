<template lang="html">
  <button type="button" name="Play" v-on:click="startGame">Play</button>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'call-to-action',
  data() {
    return {
      started: false
    }
  },
  methods: {
    startGame: function(){
      eventBus.$emit('start-game', this.started = true)
    }
  }
}
</script>

<style lang="css" scoped>
button{
  margin: 20px auto 20px auto;
}
</style>

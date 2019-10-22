<template lang="html">
  <button type="button" name="Learn" v-on:click="goToLearn">Learn</button>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'go-to-learn',
  methods: {
    goToLearn: function(){
      eventBus.$emit('go-to', this.menuOption = 'learn')
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
  /* display: block; */
}
button:hover {
  color: #818181;
}
</style>

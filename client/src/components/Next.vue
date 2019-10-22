<template lang="html">
  <!-- <button type="button" name="Next" v-on:click="goToNextImage">Next Image</button> -->
  <button type="button" name="Next">Next</button>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'next',
  methods: {
    goToNextImage: function(){
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
  font-size: 25px;
  color: Black;
  /* display: block; */
}
button:hover {
  color: #818181;
}
</style>

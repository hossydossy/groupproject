<template lang="html">
  <!-- <button type="button" name="Previous" v-on:click="goToPreviousImage">Previous Image</button> -->
  <button type="button" name="Previous" v-on:click="goToPreviousImage">Previous</button>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'previous',
  methods: {
    goToPreviousImage: function(){
      eventBus.$emit('tourist-attraction', this.selectedTouristAttraction = 'attractionOne');
    }
  }
}
</script>

<style lang="css" scoped>
button{
  margin: 20px auto 20px auto;
  border-radius: 10px;
  height: 35px;
  width: 150px;
  padding: 8px 8px 8px 8px;
  text-decoration: none;
  font-size: 15px;
  color: Black;
  font-family: 'Courier New';
  /* display: block; */
}
button:hover {
  color: #818181;
}
</style>

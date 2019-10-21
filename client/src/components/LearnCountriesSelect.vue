<template lang="html">
  <div class="container" v-on:click="learnCountries">
    <!-- <img :src="`images/gbr_03.jpg`"></img> -->
    <h1>Facts and Map</h1>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'learn-countries-select',
  methods: {
    learnCountries: function(){
      eventBus.$emit('go-to', this.menuOption = 'learnCD')
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
}
</style>

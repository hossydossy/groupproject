<template lang="html">
  <div class="container" v-on:click="learnCountries">
    <h2>Location and Information</h2>
    <p>Travel the globe and find useful information relating to countries of the world.  Use the interactive map to explore countries in street and satelite view.</p>
    <img :src="`images/google_maps.jpg`"></img>
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
  font-family: 'Courier New';
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
  /* border-radius: 8px; */
  margin: 8px auto 30px auto;
  width: 80%;
  height: 280px;
  border-radius: 8px solid LightGray;
  -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
}
h2 {
  color: #3A405A;
  margin-bottom: 0;
}
p {
  margin-top: 0;
  text-align: justify;
  width: 80%;
  margin-left: 40px;
  color: Gray;
}
</style>

<template lang="html">
  <div class="container" v-on:click="playMapGame">
    <h2>Interactive Map Game</h2>
    <p>How well do you know the flags of the world?  Will you be able to recognise the flags of countries like France, Germany and Cyprus?  Test your knowledge in this fun interactive map-based quiz.</p>
    <img :src="`images/background3.jpg`"></img>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'map-game-select',
  // props: ['countries'],
  methods: {
    playMapGame: function(){
      eventBus.$emit('go-to', 'playMG')
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  font-family: 'Courier New';
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
  /* border-radius: 8px; */
  margin: 10px auto 30px auto;
  width: 80%;
  border-radius: 8px solid LightGray;
  -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  /* border: solid 3px black; */
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

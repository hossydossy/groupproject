<template lang="html">
  <div class="container" v-on:click="playPictureGame">
    <h2>Multiple Choice Quiz</h2>
    <p>How well do you know the flags of the world.  Test your knowledge in this fun interactive multiple choice quiz.  Click on the answer which matches the flag displayed.  Can you get all 10 correct?</p>
    <img :src="`images/european_flags.png`"></img>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'picture-game-select',
  methods: {
    playPictureGame: function(){
      eventBus.$emit('go-to', this.menuOption = 'playPG')
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
  /* border-radius: 10px; */
  margin: 10px auto 30px auto;
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
  /* font-size: 24px; */
}
p {
  margin-top: 0;
  text-align: justify;
  width: 80%;
  margin-left: 40px;
  color: Gray;
  /* font-size: 22px; */
}
</style>

<template lang="html">
  <div class="main-container">
    <!-- <nav-bar></nav-bar> -->
  <div>
    <h2>Select a game:</h2>
    <div id="games-container">
      <picture-game-select></picture-game-select>
      <map-game-select></map-game-select>
      <!-- <under-construction></under-construction> -->
    </div>
  </div>
</div>
</template>

<script>
import { eventBus } from '@/main.js'
import PictureGame from './PictureGame.vue';
import MapGameSelect from './MapGameSelect.vue';
import PictureGameSelect from './PictureGameSelect.vue';
import NavBar from './NavBar.vue';
export default {
  name: 'play',
  components: {
    'picture-game': PictureGame,
    'nav-bar': NavBar,
    'picture-game-select': PictureGameSelect,
    'map-game-select': MapGameSelect,
  }
}
</script>

<style lang="css" scoped>
h2 {
  color: Black;
}
.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  /* margin-left: 15%; */
  border: 1px solid #dfe1e5;
  border-radius: 8px;
  -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
}
#games-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid #dfe1e5;
  border-radius: 8px;
  -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
}
</style>

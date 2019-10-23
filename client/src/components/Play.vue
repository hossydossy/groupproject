<template lang="html">
  <div class="main-container">
  <div>
    <h2>Select a game:</h2>
    <div id="games-container">
      <picture-game-select></picture-game-select>
      <map-game-select></map-game-select>
    </div>
  </div>
</div>
</template>

<script>
import { eventBus } from '@/main.js'
import PictureGame from './PictureGame.vue';
import MapGameSelect from './MapGameSelect.vue';
import PictureGameSelect from './PictureGameSelect.vue';
export default {
  name: 'play',
  // props: ['countries'],
  components: {
    'picture-game': PictureGame,
    'picture-game-select': PictureGameSelect,
    'map-game-select': MapGameSelect,
  }
}
</script>

<style lang="css" scoped>
h2 {
  color: White;
  font-family: 'Courier New';
  font-size: 30px;
}
.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
}

#games-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}


</style>

<template lang="html">
  <div class="main-container">
    <nav-bar></nav-bar>
    <h2>Select a game:</h2>
    <div id="games-container">
      <picture-game-select></picture-game-select>
    </div>
  </div>
</template>

<script>
import PictureGameSelect from './PictureGameSelect.vue'
import NavBar from './NavBar.vue'
export default {
  name: 'play',
  components: {
    'nav-bar': NavBar
  }
}
</script>

<style lang="css" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  height: 100%; */
  /* background-image: url("/public/home-background.jpg");
  background-size: cover; */
  height: 100%;
  text-align: center;
}
#games-container {
  display: flex;
  flex-direction: row;
}
</style>

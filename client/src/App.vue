<template lang="html">
<div class="bg">
  <home-page v-if="!initialised"></home-page>
  <play v-if="initialised && !playPG"></play>
  <picture-game v-if="initialised && playPG"></picture-game>
</div>
</template>

<script>
import { eventBus } from '@/main.js';
import HomePage from './components/HomePage.vue';
import Play from './components/Play.vue';
import PictureGame from './components/PictureGame.vue'
export default {
  name: 'app',
  data(){
    return {
      initialised: false,
      playPG: false,
    };
  },
  components: {
    'home-page': HomePage,
    'play': Play,
    'picture-game': PictureGame,
  },
  mounted() {
    eventBus.$on('select-game', (initialised) => {
      this.initialised = initialised;
    });
    eventBus.$on('start-game', (playPG) => {
      this.playPG = playPG;
    });
  }
}
</script>

<style lang="css" scoped>
  .bg{
    background-image: url("../public/background.jpg");
    background-size: cover;
    height: 100%;
    margin-left: 15%;
  }
</style>

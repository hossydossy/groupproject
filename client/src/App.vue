<template lang="html">
<div>
  <home-page v-if="!initialised"></home-page>
  <play v-if="initialised && !playPG"></play>
</div>
</template>

<script>
import { eventBus } from '@/main.js';
import PictureGame from './components/PictureGame.vue';
import PictureGameSelect from './components/PictureGameSelect.vue';
import CallToAction from './components/CallToAction.vue';
import HomePage from './components/HomePage.vue';
import NavBar from './components/NavBar.vue';
import Play from './components/Play.vue';
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
    'call-to-action': CallToAction,
    'nav-bar': NavBar,
    'play': Play,
    'picture-game': PictureGame,
    'picture-game-select': PictureGameSelect,
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
</style>

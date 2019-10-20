<template lang="html">
<div class="bg">
  <home-page v-if="!initialised"></home-page>
  <play v-if="initialised && !playPG && !playBG"></play>
  <picture-game v-if="initialised && playPG && !playBG"></picture-game>
  <bingo-game v-if="initialised && !playPG && playBG" :countries="countries"></bingo-game>
</div>
</template>

<script>
import { eventBus } from '@/main.js';
import NavBar from './components/NavBar.vue';
import HomePage from './components/HomePage.vue';
import Play from './components/Play.vue';
import PictureGame from './components/PictureGame.vue';
import BingoGame from './components/BingoGame.vue';
export default {
  name: 'app',
  data(){
    return {
      initialised: false,
      playPG: false,
      playBG: false,
      countries: [],
    };
  },
  methods: {
    getCountries(){
      return fetch("http://localhost:3000/api/countries/")
      .then(res => res.json())
      .then(data => this.countries = data)
    }
  },
  components: {
    'home-page': HomePage,
    'play': Play,
    'picture-game': PictureGame,
    'bingo-game': BingoGame,
    'nav-bar': NavBar,
  },
  mounted() {
    this.getCountries();
    eventBus.$on('select-game', (initialised) => {
      this.initialised = initialised;
    });
    eventBus.$on('start-game-picture', (playPG) => {
      this.playPG = playPG;
    });
    eventBus.$on('start-game-bingo', (playBG) => {
      this.playBG = playBG;
    });
  }
}
</script>

<style lang="css" scoped>
  .bg{
    background-image: url("../public/images/background.jpg");
    background-size: cover;
    height: 100%;
  }
</style>

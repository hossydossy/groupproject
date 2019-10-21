<template lang="html">
<div class="bg">
  <home-page v-if="!playInitialised && !learnInitialised"></home-page>
  <play v-if="playInitialised && !playPG && !playBG"></play>
  <picture-game v-if="playInitialised && playPG && !playBG"></picture-game>
  <learn v-if="learnInitialised && !learnCountries && !touristAttractions"></learn>
  <!-- <learn-country></learn-country> -->
  <learn-tourist-attractions v-if="learnInitialised && touristAttractions && !learnCountries"></learn-tourist-attractions>

</div>
</template>

<script>
import { eventBus } from '@/main.js';
import HomePage from './components/HomePage.vue';
import GoToLearn from './components/GoToLearn.vue';
import Learn from './components/Learn.vue';
import LearnTouristAttractions from './components/LearnTouristAttractions';
import GoToPlay from './components/GoToPlay.vue';
import Play from './components/Play.vue';
import PictureGame from './components/PictureGame.vue';
export default {
  name: 'app',
  data() {
    return {
      playInitialised: false,
      playPG: false,
      playBG: false,
      learnInitialised: false,
      learnCountries: false,
      touristAttractions: false,
    };
  },
  components: {
    'home-page': HomePage,
    'go-to-learn': GoToLearn,
    'learn': Learn,
    'learn-tourist-attractions': LearnTouristAttractions,
    'go-to-play': GoToPlay,
    'play': Play,
    'picture-game': PictureGame,
  },
  mounted() {
    eventBus.$on('go-to-play', (playInitialised) => {
      this.playInitialised = playInitialised;
    });
    eventBus.$on('start-game', (playPG) => {
      this.playPG = playPG;
    });
    eventBus.$on('go-to-learn', (learnInitialised) => {
      this.learnInitialised = learnInitialised;
    });
    eventBus.$on('learn-countries', (learnCountries) => {
      this.learnCountries = learnCountries;
    });
    eventBus.$on('tourist-attractions', (touristAttractions) => {
      this.touristAttractions = touristAttractions;
    });
  }
}
</script>

<style lang="css" scoped>
  .bg{
    /* background-image: url("../public/images/background.jpg"); */
    background-size: cover;
    height: 100%;
  }
</style>

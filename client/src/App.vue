<template lang="html">
<div class="bg">
  <home-page v-if="!menuOption"></home-page>
  <play v-if="menuOption === 'play'"></play>
  <picture-game v-if="menuOption === 'playPG'"></picture-game>
  <map-game v-if="menuOption === 'playMG'" :countries="countries"></map-game>
  <learn v-if="menuOption === 'learn'" :countries="countries"></learn>

</div>
</template>

<script>
import { eventBus } from '@/main.js';
import HomePage from './components/HomePage.vue';
import GoToLearn from './components/GoToLearn.vue';
import Learn from './components/Learn.vue';
import LearnTouristAttractions from './components/LearnTouristAttractions';
import CountriesSelect from './components/CountriesSelect';
import TouristAttractionDetail from './components/TouristAttractionDetail';
import GoToPlay from './components/GoToPlay.vue';
import Play from './components/Play.vue';
import PictureGame from './components/PictureGame.vue';
import MapGame from './components/MapGame.vue';
import LearnCountry from './components/LearnCountry.vue';

export default {
  name: 'app',
  data() {
    return {
      countries: [],
      country: null,
      menuOption: null,
    };
  },
  components: {
    'home-page': HomePage,
    'go-to-learn': GoToLearn,
    'learn': Learn,
    'learn-tourist-attractions': LearnTouristAttractions,
    'countries-select': CountriesSelect,
    'tourist-attraction-detail': TouristAttractionDetail,
    'go-to-play': GoToPlay,
    'play': Play,
    'picture-game': PictureGame,
    'map-game': MapGame,
    "learn-country": LearnCountry,
  },
  methods: {
    loadCountries(option) {
      this.menuOption = option;
      fetch(`http://localhost:3000/api/countries`)
        .then(response => response.json())
        .then(apiResponse => this.countries = apiResponse)
    }
  },
  mounted() {
    fetch(`http://localhost:3000/api/countries`)
      .then(response => response.json())
      .then(apiResponse => this.countries = apiResponse);

    eventBus.$on('go-to', (option) => {
      this.menuOption = option;
    });
    // eventBus.$on('play-pg', (playPG) => {
    //   this.playPG = playPG;
    // });
    // eventBus.$on('play-mg', (playMG) => {
    //   this.playMG = playMG;
    // });
    // eventBus.$on('go-to-learn', (learnInitialised) => {
    //   this.learnInitialised = learnInitialised;
    // });
    // eventBus.$on('learn-countries', (learnCountries) => {
    //   this.learnCountries = learnCountries;
    // });
    // eventBus.$on('tourist-attractions', (touristAttractions) => {
    //   this.touristAttractions = touristAttractions;
    // });
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

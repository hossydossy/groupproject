<template lang="html">
<div>
  <home-page v-if="!initialised"></home-page>
  <play v-if="initialised"></play>
</div>
</template>

<script>
import { eventBus } from '@/main.js';
import CallToAction from './components/CallToAction.vue';
import HomePage from './components/HomePage.vue';
import NavBar from './components/NavBar.vue';
import Play from './components/Play.vue';
export default {
  name: 'app',
  data(){
    return {
      initialised: false,
    };
  },
  components: {
    'home-page': HomePage,
    'call-to-action': CallToAction,
    'nav-bar': NavBar,
    'play': Play,
  },
  mounted() {
    eventBus.$on('start-game', (started) => {
      this.initialised = started
    });
  }
}
</script>

<style lang="css" scoped>
</style>

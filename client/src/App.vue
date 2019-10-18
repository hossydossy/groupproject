<template lang="html">
<h1>WELCOME TO THE JUNGLE</h1>
  <home-page></home-page>
</template>

<script>
import CallToAction from './components/CallToAction.vue';
import HomePage from './components/HomePage.vue'
export default {
  name: 'app',
  components: {
    'home-page': HomePage,
    'call-to-action': CallToAction,
  }
}
</script>

<style lang="css" scoped>
</style>

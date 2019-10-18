<template lang="html">
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

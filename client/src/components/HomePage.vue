<template lang="html">
  <div class="main-container">
    <!-- <nav-bar></nav-bar> -->
    <h1>Explore the World</h1>
    <h2>Play and Learn</h2>
    <call-to-action></call-to-action>
  </div>
</template>

<script>
import CallToAction from './CallToAction.vue';
export default {
  name: "home-page",
  components: {
    'call-to-action': CallToAction,
  }
}
</script>

<style lang="css" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  /* margin-left: 15%; */
}

h1{
  font-size: 50px;
  margin: 50px auto 20px auto;
}

h2{
  margin: 0 auto 20px auto;
}

h1, h2{
  color: White;
}
</style>

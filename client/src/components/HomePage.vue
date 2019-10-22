<template lang="html">
  <div class="main-container">
    <h1>Explore our World</h1>
    <h2>Play and Learn</h2>
    <div class="">
      <go-to-play class="play"></go-to-play>
      <go-to-learn></go-to-learn>
    </div>
  </div>
</template>

<script>
import GoToPlay from './GoToPlay.vue';
import GoToLearn from './GoToLearn.vue';
export default {
  name: "home-page",
  components: {
    'go-to-play': GoToPlay,
    'go-to-learn': GoToLearn,
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
  font-size: 30px;
  font-weight: lighter;
}

h1, h2{
  color: White;
  font-family: "Courier New"
}

.play {
  margin-right: 50px;
}
</style>

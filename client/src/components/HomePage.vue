<template lang="html">
  <div class="main-container">
    <h1>Countries of the World</h1>
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
  /* justify-content: center;
  height: 100%; */
  /* background-image: url("/public/home-background.jpg");
  background-size: cover; */
  height: 100%;
  text-align: center;
}

/* #bg{
  background-image: url("/public/home-background.jpg");
  background-size: cover; */
/* } */
</style>

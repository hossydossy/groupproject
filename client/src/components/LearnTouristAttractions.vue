<template lang="html">
  <div class="main-container">
    <!-- <nav-bar></nav-bar> -->
    <h1>Top Tourist Attractions</h1>
    <h2>Select a Country</h2>
    <div class="container">
      <h2>Image</h2>
      <p>Details</p>
      <p>Next Image</p>
      <p>Previous Image</p>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  name: 'learn-tourist-attractions',
  components: {
  }
}
</script>

<style lang="css" scoped>
  h1{
    color: White;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
    border: 1px solid #dfe1e5;
    border-radius: 8px;
    -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
    box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
    /* margin-left: 15%; */
  }
  .container {
    display: flex;
    flex-direction: row;
    text-align: center;
    border: 1px solid #dfe1e5;
    border-radius: 8px;
    -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
    box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  }
</style>

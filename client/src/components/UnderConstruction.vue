<template lang="html">
  <div class="container">
    <h1>Under Construction</h1>
    <h2>Release date t.b.c.</h2>
    <!-- <img :src="`images/under_construction.jpg`"></img> -->
    <img :src="`images/under_construction.jpg`" alt=""></img>
  </div>
</template>

<script>
export default {
  name: 'under-construction',
}
</script>

<style lang="css" scoped>
.container {
  /* border: 1px solid Black; */
  width: 30%;
  background-color: White;
  border-radius: 10px;
}
img{
  border-radius: 10px;
  margin: 40px auto 40px auto;
  max-width: 80%;
  height: auto;
}
</style>

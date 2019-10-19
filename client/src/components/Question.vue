<template lang="html">
  <div class="container">
    <img :src="`images/mkd_03.jpg`"></img>
  </div>
</template>

<script>
export default {
  name: 'question',
}
</script>

<style lang="css" scoped>
.container {
  border: 1px solid Black;
  margin: 0 auto;
  display: flex;
  /* padding: 20px; */
  background-color: White;
  height: 420px;
  width: 600px;
  border-radius: 10px;
}
img{
  max-width: 90%;
  margin: auto;
  border-radius: 10px;
  /* align-items: center; */
}
h1{
  color: White;
  text-align: center;
  font-weight: bold;
}
</style>

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
  margin: 20px auto 20px auto;
  display: flex;
}
img{
  /* width: 100%; */
  /* align-items: center; */
}
h1{
  color: White;
  text-align: center;
  font-weight: bold;
}
</style>

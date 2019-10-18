<template lang="html">
  <div class="container" v-on:click="playPictureGame">
    <h1>Picture Game</h1>
  </div>
</template>

<script>
export default {
  name: 'picture-game-select',
}
</script>

<style lang="css" scoped>
.container {
  border: 1px solid Black;
  width: 30%;
}
</style>

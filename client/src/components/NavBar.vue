<template lang="html">
<div class="container">
  <ul>
    <li>Home</li>
    <li>Play</li>
    <li>Learn</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'nav-bar',
}
</script>

<style lang="css"scoped>
ul, li{
  text-decoration: none;
}
.container{
  display: inline-flex;
  flex-direction: column;
  background-color: White;
}
</style>

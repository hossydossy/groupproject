<template lang="html">
  <div class="main-container">
    <nav-bar></nav-bar>
    <h1>Countries of the World</h1>
    <h2>Educational App for Children</h2>
    <call-to-action></call-to-action>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import CallToAction from './CallToAction.vue';
export default {
  name: "home-page",
  components: {
    'call-to-action': CallToAction,
    'nav-bar': NavBar,
  },
  // data(){
  //   return {
  //     travelQuotes: [(“Adventure is worthwhile.” - Aesop), (“Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.” - Anthony Bourdain)]
  //   }
  // },
  // methods: {
  //   getRandomQuote() {
  //       const indexQuote = Math.floor(Math.random() * this.travelQuotes.length - 1);
  //       console.log(this.travelQuotes[indexQuote]);
  //     },
  // }
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

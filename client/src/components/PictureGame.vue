<template lang="html">
  <div class="main-container">
    <!-- <nav-bar></nav-bar> -->
    <h1>Picture Game</h1>
    <question :country="country"></question>
    <div class="divider"/>
    <div class="container">
      <answer :countries="countries" :correctAnswer="country"></answer>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import Question from './Question.vue';
import Answer from './Answer.vue';
import RandomFlag from './RandomFlag.vue';

export default {
  name: 'picture-game',
  props: ['countries'],
  components: {
    'nav-bar': NavBar,
    'question': Question,
    'answer': Answer,
    'random-flag': RandomFlag
  },
  computed: {
    country: function() {
      const indexCountry = Math.floor(Math.random() * this.countries.length - 1);
      return this.countries[indexCountry];
    }
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
}
.container {
  display: flex;
  flex-direction: row;

}

.divider{
  height: 500px;
  /* width:300px; */
  height:auto;
  display:inline-block;
}
</style>

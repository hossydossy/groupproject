<template lang="html">
  <div class="main-container">
    <!-- <nav-bar></nav-bar> -->
    <h1>Picture Game</h1>
    <question></question>
    <div class="container">
      <answer></answer>
      <answer></answer>
      <answer></answer>
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
  components: {
    'nav-bar': NavBar,
    'question': Question,
    'answer': Answer,
    'random-flag': RandomFlag
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
</style>

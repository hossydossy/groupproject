<template lang="html">
  <div class="main-container">
    <h1>Picture Game</h1>
    <!-- <continent-select v-if="!selectedContinent"></continent-select>
      <div v-if="selectedContinent === 'Europe'"> -->
      <div>
        <question></question>
        <div class="container">
          <answer></answer>
          <answer></answer>
          <answer></answer>
        </div>
      </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import ContinentSelect from './ContinentSelect.vue';
import Question from './Question.vue';
import Answer from './Answer.vue';
export default {
  name: 'picture-game',
  data() {
    return {
      selectedContinent: '',
    }
  },
  components: {
    'continent-select': ContinentSelect,
    'question': Question,
    'answer': Answer,
  },
  mounted() {
    eventBus.$on('select-continent', (selectedContinent) => {
      this.selectedContinent = selectedContinent;
    });
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

<template lang="html">
  <div class="main-container">
    <h1>Picture Game</h1>
    <img :src="country.flag" class="center"/>
    <br>
    <br>
    <div id="answer-container" v-if="answerOptions[2]">
      <button type="button" name="button" v-on:click="answerClicked(answerOptions[0])"> {{ answerOptions[0].name }} </button>
      <button type="button" name="button" v-on:click="answerClicked(answerOptions[1])"> {{ answerOptions[1].name }} </button>
      <button type="button" name="button" v-on:click="answerClicked(answerOptions[2])"> {{ answerOptions[2].name }} </button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import NavBar from './NavBar.vue';

export default {
  name: 'picture-game',
  props: ['countries'],
  components: {
    'nav-bar': NavBar
  },
  data(){
    return {
      answerOptions: [],
      questionTotal: 0,
      quizScore: 0
    }
  },
  computed: {
    country: function() {
      const indexCountry = Math.floor(Math.random() * this.countries.length - 1);
      return this.countries[indexCountry];
    }
  },
  mounted() {
    this.answerOptions.push(this.country);
    this.getRandomAnswerOne();
    this.getRandomAnswerTwo();
    this.randomiseAnswers(this.answerOptions);

  },

  methods: {

    getRandomAnswerOne() {
      let randomAnswerOne = Math.floor((Math.random() * this.countries.length));
      if (this.countries[randomAnswerOne] === this.country)
      do {
        let randomAnswerOne = Math.floor((Math.random() * this.countries.length));
      }
      while (this.countries[randomAnswerOne] === this.country);
      this.answerOptions.push(this.countries[randomAnswerOne]);
    },

    getRandomAnswerTwo() {
      let randomAnswerTwo = Math.floor((Math.random() * this.countries.length));
      this.answerOptions.push(this.countries[randomAnswerTwo]);
    },

    randomiseAnswers(){
      this.answerOptions.sort(() => Math.random() - 0.5);
    },

    answerClicked(chosenAnswer) {
      this.questionTotal += 1;
      if (chosenAnswer === this.country)
      this.quizScore += 1;



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

button  {
  height: 50px;
  width: 200px;
  font-size: 20px;
  justify-content: space-around;
}

.h3 {
  display: block;
  flex-direction: row;
  justify-content: space-around;
  height: 50px;
  width: 300px;
  border-radius: 10px solid Black;
  background-color: White;
  color: Black;
  text-align: center;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  height: 200px;
}

</style>

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
      <br>
      <br>
      <button type="button" v-on:click="nextQuestion()">  {{answerMessage}} <br> <br> Next Question? </button>
      <br>
      <br>
      <br>
      <h2 v-if="questionTotal > 9"> Your score is {{ quizScore }} out of {{ questionTotal }}!</h2>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
  name: 'picture-game',
  props: ['countries'],
  data(){
    return {
      answerOptions: [],
      questionTotal: 0,
      quizScore: 0,
      country: [],
      answerMessage: ""
    }
  },

  mounted() {
    this.country = this.getRandomCountry();
    this.answerOptions.push(this.country);
    this.getRandomAnswers();
    this.randomiseAnswers(this.answerOptions);
  },

  methods: {

    getRandomCountry() {
      const indexCountry = Math.floor(Math.random() * this.countries.length);
      return this.countries[indexCountry];
    },

    getRandomAnswers() {
      let randomAnswerOne = Math.floor((Math.random() * this.countries.length));
      let randomAnswerTwo = Math.floor((Math.random() * this.countries.length));
      if (this.countries[randomAnswerOne] === this.country)
      do {
        let randomAnswerOne = Math.floor((Math.random() * this.countries.length));
      }
      while (this.countries[randomAnswerOne] === this.country);
      else if (this.countries[randomAnswerTwo] === this.country || this.countries[randomAnswerOne] === this.countries[randomAnswerTwo])
      do {
        let randomAnswerTwo = Math.floor((Math.random() * this.countries.length));
      }
      while (this.countries[randomAnswerTwo] === this.country || this.countries[randomAnswerOne] === this.countries[randomAnswerTwo]);
      this.answerOptions.push(this.countries[randomAnswerOne]);
      this.answerOptions.push(this.countries[randomAnswerTwo]);
    },

    randomiseAnswers(){
      this.answerOptions.sort(() => Math.random() - 0.5);
    },

    answerClicked(chosenAnswer) {
      this.questionTotal += 1;
      if (chosenAnswer === this.country){
        this.quizScore += 1;
        this.answerMessage = this.country.message.ok + " (Well Done!)";
      }
      else {
        this.answerMessage = this.country.message.wrong + " (That's not right...)";
      }
    },

    nextQuestion() {
      if (this.questionTotal < 10) {
        this.country = this.getRandomCountry();
        this.answerOptions = [];
        this.answerOptions.push(this.country);
        this.getRandomAnswers();
        this.randomiseAnswers(this.answerOptions);
        this.answerMessage="";
      } else if (this.questionTotal === 10) {
        // this.scoreShown();
        this.questionTotal = 0;
        this.quizScore = 0;
      }
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
  width: 100%;
  text-align: center;
}

button  {
  height: 100px;
  width: 450px;
  font-size: 18px;
  justify-content: space-between;
  text-align: center;
  text-overflow: ellipsis;
  background-color: yellow;
}

h2 {
  display: block;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  width: 300px;
  border-radius: 10px solid White;
  background-color: White;
  color: Black;
  margin: auto;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 550px;
  height: 350px;
  border: solid 3px black;
}


</style>

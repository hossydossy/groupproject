<template lang="html">
  <div class="main-container">
    <h1>Flag Quiz:</h1>
    <div class="container">
      <p>How well do you know the flags of the world?  Will you be able to recognise the flags of countries like France, Germany and Cyprus?  Test your knowledge in this fun interactive multiple choice quiz.  Click on the answer which matches the flag displayed.  Can you get all 10 correct?</p>
      <p>Good luck!</p>
    </div>

    <div id="answer-container" v-if="answerOptions[2]">
      <button type="button" name="button" v-on:click="answerClicked(answerOptions[0])"> {{ answerOptions[0].name }} </button>
      <button type="button" name="button" v-on:click="answerClicked(answerOptions[1])"> {{ answerOptions[1].name }} </button>
      <button type="button" name="button" v-on:click="answerClicked(answerOptions[2])"> {{ answerOptions[2].name }} </button>
    </div>
    <div class="wrapper">
      <img :src="country.flag"/>
    </div>
    <div>
      <button class="btn" type="button" v-if="answerMessage" v-on:click="nextQuestion()"> <span class="feedback">{{answerMessage}}</span> <br> Next Question?</button>
    </div>
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
  margin: 20px 0 0 0;
}
.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  text-align: center;
  font-family: 'Courier New';
}
.container {
  width: 1000px;
  margin: 0 auto;
  text-align: center;
  font-size: 22px;
}
button{
  height: 80px;
  margin: 0;
  padding: 0;
  width: 20%;
  font-size: 20px;
  justify-content: space-between;
  text-align: center;
  text-overflow: ellipsis;
  /* margin-top: 20px; */
  border-radius: 10px;
  text-decoration: none;
  color: #3A405A;
  font-family: 'Courier New';
  background-color: White;
}
button.btn:hover {
  color: #818181;
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
#answer-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.wrapper {
  margin: 20px auto;
  width: 300px;
  height: auto;
  text-align: center;
  border-radius: 8px;
  background-color: White;
  -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
}
img {
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
}
.feedback {
  font-weight: bold;
  color: #3A405A;
}
</style>

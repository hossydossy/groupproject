<!-- <template lang="html">
  <section id="answers">
    <div class="container" v-if="answerOptions[2]">
      <div class="divider"/>
      <h3 v-on:click="answerClicked(answerOptions[0])"> {{answerOptions[0].name}} </h3>
      <div class="divider"/>
      <h3 v-on:click="answerClicked(answerOptions[1])"> {{answerOptions[1].name}} </h3>
      <div class="divider"/>
      <h3 v-on:click="answerClicked(answerOptions[2])"> {{answerOptions[2].name}} </h3>
    </div>
  </section>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'answer',
  props: ['countries', 'correctAnswer'],
  data(){
    return {
      answerOptions: [],
      quizScore: 0
    }
  },
  methods: {
    getRandomAnswerOne() {
      // get a random array index from countries
      let randomAnswerOne = Math.floor((Math.random() * this.countries.length - 1));

      this.answerOptions.push(this.countries[randomAnswerOne]);
    },


    getRandomAnswerTwo() {
      let randomAnswerTwo = Math.floor((Math.random() * this.countries.length - 1));
      this.answerOptions.push(this.countries[randomAnswerTwo]);
    },

    randomiseAnswers(){
      this.answerOptions.sort(() => Math.random() - 0.5);
    },

    answerClicked(country) {
      // check if answer is correctAnswer
      if (country === this.correctAnswer)
      eventBus.$emit('answer-clicked', this.quizScore += 1)
      else {
      eventBus.$emit('answer-clicked', this.quizScore += 0)
      }
      // emit this info on eventBus route answer-clicked
      // emit regardless if true or false
    }
  },
  mounted(){
    // push correct answer to answer options
    this.answerOptions.push(this.correctAnswer);
    this.getRandomAnswerOne();
    this.getRandomAnswerTwo();
    this.randomiseAnswers(this.answerOptions);
  }
}

</script>

<style lang="css" scoped>

.container {

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.divider{
  width:150px;
  height:auto;
  display:inline-block;
}

h3 {
  height: 50px;
  width: 300px;
  border: 1px solid Black;
  background-color: White;
  color: Black;
  text-align: center;

}

</style> -->

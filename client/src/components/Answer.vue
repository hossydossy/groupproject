<template lang="html">
  <section id="answers">
    <div class="container">
      <div class="divider"/>
      <h3> {{answerOptions[0].name}} </h3>
      <div class="divider"/>
      <h3> {{answerOptions[1].name}} </h3>
      <div class="divider"/>
      <h3> {{answerOptions[2].name}} </h3>
    </div>
  </section>
</template>

<script>

export default {
  name: 'answer',
  props: ['countries', 'correctAnswer'],
  data(){
    return {
      answerOptions: []
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

</style>

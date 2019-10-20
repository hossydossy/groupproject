<template lang="html">
  <div class="container">

  </div>
</template>

<script>
export default {
  name: 'answer-options',
  data(){
    return {
      answerOptions: null
    }
  },
  methods: {
    getAnswerOptionOne(min, max) {
      answerOptionOne = Math.random() * (max - min) + min;
      return countries[answerOptionOne].name;
    }


    getAnswerOptionTwo(min, max) {
        answerOptionTwo = Math.random() * (max - min) + min;
        if (answerOptionTwo === answerOptionOne) {
          do {
            answerOptionTwo = 0;
            answerOptionTwo = Math.random() * (max - min) + min;
          }
        }
      while (answerOptionTwo === answerOptionOne)
      return countries[answerOptionTwo].name;
    }
    getAnswerOptionThree() {
      answerOptionThree =
    }
  },
}
</script>

<style lang="css" scoped>
</style>

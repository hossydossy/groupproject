<template lang="html">
  <div class="container">

  </div>
</template>

<script>
import { eventBus } from '@/main.js';


export default {
  name: 'random-flag',
  data(){
    return {
      randomFlag: null
    }
  },
  methods: {
    getRandomFlag(min, max) {
      indexPoint = Math.random() * (max - min) + min;
      thisFlag = countries[indexPoint].flag;
      this.randomFlag.push(thisFlag);
    }
  },
  mounted(){
    this.getRandomFlag(0,53);
  }
}
</script>

<style lang="css" scoped>
</style>

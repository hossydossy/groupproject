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
        getRandomFlag(flags, path) {
        path = this.countries.flag();
        var num = Math.floor( Math.random() * flags.length );
        var img = flags[ num ];
        return img;
    }
  }
}
</script>

<style lang="css" scoped>
</style>

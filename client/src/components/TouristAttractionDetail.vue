<template lang="html">
<div class="main-container">
<attraction-one v-if="attraction === 'attractionOne'":country="country"></attraction-one>
<attraction-two v-if="attraction === 'attractionTwo'" :country="country"></attraction-two>
<attraction-three v-if="attraction === 'attractionThree'":country="country"></attraction-three>
</div>
</template>

<script>
import { eventBus } from '@/main.js';
import AttractionOne from './AttractionOne.vue';
import AttractionTwo from './AttractionTwo.vue';
export default {
  name: 'tourist-attraction-detail',
  props: ['country'],
  data() {
    return {
      attraction: 'attractionOne',
    }
  },
  components: {
    'attraction-one': AttractionOne,
    'attraction-two': AttractionTwo,
  },
  mounted() {
    eventBus.$on('tourist-attraction', (attraction) => {
      this.attraction = attraction;
    });
  }
}
</script>

<style lang="css" scoped>
.main-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* height: 100%; */
  text-align: center;
  margin: 20px;
}
</style>

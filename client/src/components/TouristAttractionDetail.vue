<template lang="html">
<div class="main-container">
  <div v-if="!country" class="wrapper">
    <img :src="`./images/bonnie_Scotland.jpg`"/>
    <h3>The United Kingdom: Edinburgh, Scotland</h3>
  </div>
<attraction-one v-if="'country' && (attraction === 'attractionOne')":country="country"></attraction-one>
<attraction-two v-if="'country' && (attraction === 'attractionTwo')" :country="country"></attraction-two>
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
.wrapper {
  width: 800px;
  height: auto;
  text-align: center;
  border: 1px solid #dfe1e5;
  background-color: White;
  -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  border-radius: 8px;
}
img {
  width: 90%;
  margin: 25px 25px 20px 25px;
  border-radius: 8px solid LightGray;
  -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
}
h3 {
  font-family: 'Brush Script MT';
  text-align: center;
  font-size: 30px;
  color: #3A405A;
}
</style>

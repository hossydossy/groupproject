<template lang="html">
  <div class="container">
    <h1>Top Places to Visit</h1>
    <countries-select :countries="countries"></countries-select>
    <tourist-attraction-detail :country="selectedCountry"></tourist-attraction-detail>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import CountriesSelect from './CountriesSelect.vue';
import TouristAttractionDetail from './TouristAttractionDetail.vue';
export default {
  name: 'learn-tourist-attractions',
  props: ['countries'],
  data() {
    return {
      selectedCountry: null,
    }
  },
  components: {
    'countries-select': CountriesSelect,
    'tourist-attraction-detail': TouristAttractionDetail,
  },
  mounted() {
    eventBus.$on('country-selected', (country) => {
      this.selectedCountry = country;
    });
  }
}
</script>

<style lang="css" scoped>
  h1{
    color: White;
    font-family: 'Courier New';
  }
  /* .main-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
    border: 1px solid #dfe1e5;
    border-radius: 8px;
    -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
    box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75); */
    /* margin-left: 15%; */
   /* } */
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
    /* border: 1px solid #dfe1e5;
    border-radius: 8px;
    -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
    box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75); */
  }
</style>

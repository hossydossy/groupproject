<template lang="html">
  <div class="container">
    <!-- <nav-bar></nav-bar> -->
    <h1>Top Tourist Attractions</h1>
    <!-- <div class="container"> -->
      <countries-select :countries="countries"></countries-select>
      <!-- <div class="container"> -->
      <tourist-attraction-detail :country="selectedCountry"></tourist-attraction-detail>
      <!-- <div class="container"> -->
      <!-- </div> -->
      <div>Next Image</div>
      <div>Previous Image</div>
    <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import CountriesSelect from './CountriesSelect.vue';
import TouristAttractionDetail from './TouristAttractionDetail.vue';
import NavBar from './NavBar.vue';
export default {
  name: 'learn-tourist-attractions',
  props: ['countries'],
  data() {
    return {
      // countries: [],
      selectedCountry: null,
    }
  },
  components: {
    'countries-select': CountriesSelect,
    'tourist-attraction-detail': TouristAttractionDetail,
  },
  // methods: {
  //   getCountries() {
  //     fetch(`http://localhost:3000/api/countries`)
  //       .then(response => response.json())
  //       .then(apiResponse => this.countries = apiResponse)
  //   }
  // },
  mounted() {
    // this.getCountries()
    eventBus.$on('country-selected', (country) => {
      this.selectedCountry = country
    })
  }
}
</script>

<style lang="css" scoped>
  h1{
    color: Black;
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
    border: 1px solid #dfe1e5;
    border-radius: 8px;
    -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
    box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  }
</style>

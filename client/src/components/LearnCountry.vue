<template lang="html">
  <div class="container">
    <select v-on:change="handleSelectedCountry">
      <option value="">Select Country</option>
      <option v-for="(country, index) in countries" :value="country._id">{{country.name}}</option>
    </select>
    <learn-country-details :country="countrySelected" />
  </div>
</template>

<script>
import LearnCountryDetails from './LearnCountryDetails.vue';

export default {
  name: 'learn-country',
  props: ['countries'],
  data()  {
    return {
      countrySelected: null
    }
  },
  methods: {
    handleSelectedCountry(event){
      this.countrySelected = this.countries.find((country) => country._id == event.target.value);
    }
  },
  components: {
    "learn-country-details" : LearnCountryDetails
  }
}
</script>

<style lang="css" scoped>

.container{
  display: flex;
  justify-content: center;
  width: 50%;
  margin: auto;
  flex-direction: column;
}
</style>
<!-- flex-direction: column; -->

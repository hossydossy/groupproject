<template lang="html">
  <div class="">
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
</style>

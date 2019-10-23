<template lang="html">
  <div class="main-container">
    <label for='select-country-dropdown'>Select a country:
      <select id='select-country-dropdown' v-model='selectedCountry' v-on:change='handleChange'>
        <option value='Select a country' disabled selected>Select a country</option>
        <option v-for='(country, index) in countries'
        :country='country'
        :key='index'
        :value='country'>{{country.name}}</option>
      </select>
    </label>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'select-country-dropdown',
  props: ['countries'],
  data() {
    return {
      selectedCountry: null,
    }
  },
  methods: {
    handleChange: function() {
      eventBus.$emit('country-selected', this.selectedCountry)
    }
  }
}
</script>

<style lang="css" scoped>
.main-container {
  /* display: flex;
  flex-direction: column;
  margin: 20px auto 20px auto; */
  font-family: 'Courier New';
  font-size: 24px;
  font-weight: lighter;
}
.container {
  /* display: flex;
  flex-direction: row;
  text-align: center; */
  /* border: 1px solid #dfe1e5;
  border-radius: 8px;
  -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75); */
}

label, select {
  margin: auto;
}
</style>

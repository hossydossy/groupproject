<template lang="html">
  <div class="container">
    <label for='select-dropdown'>Select a continent:
      <select id='select-dropdown' v-on:change='handleChange'>
        <option value='' disabled selected>Select a continent</option>
        <option disabled>Africa</option>
        <option disabled>Australia</option>
        <option disabled>Antartica</option>
        <option disabled>Asia</option>
        <option value="Europe">Europe</option>
        <option disabled>North America</option>
        <option disabled>South America</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: 'select-dropdown',
  methods: {
      handleChange: function(){
        eventBus.$emit('select-continent', this.selectedContinent = 'Europe')
    }
  }
}
</script>

<style lang="css" scoped>
</style>

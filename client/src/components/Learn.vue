<template lang="html">
  <div class="main-container">
  <div>
    <h2>Learn more about the countries of our world:</h2>
    <div id="learn-container">
      <learn-countries-select></learn-countries-select>
      <learn-tourist-attractions-select></learn-tourist-attractions-select>
    </div>
  </div>
</div>
</template>

<script>
import { eventBus } from '@/main.js'
import LearnCountriesSelect from './LearnCountriesSelect.vue'
import LearnTouristAttractionsSelect from './LearnTouristAttractionsSelect.vue'
export default {
  name: 'play',
  components: {
    'learn-countries-select': LearnCountriesSelect,
    'learn-tourist-attractions-select': LearnTouristAttractionsSelect,
  }
}
</script>

<style lang="css" scoped>
h2 {
  color: White;
  font-family: 'Courier New';
  font-size: 30px;
}
.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  /* border: 1px solid #dfe1e5; */
  border-radius: 8px;
  -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  height: 1000px;

}
#learn-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
}
</style>

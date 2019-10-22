<template lang="html">
  <div class="main-container">
  <div>
    <h2>Learn more about the countries:</h2>
    <div id="games-container">
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
  color: Black;
}
.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  /* margin-left: 15%; */
  border: 1px solid #dfe1e5;
  border-radius: 8px;
  -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
}
#games-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid #dfe1e5;
  border-radius: 8px;
  -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
}
</style>

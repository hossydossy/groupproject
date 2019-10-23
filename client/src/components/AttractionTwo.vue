<template lang="html">
  <div class="main-container">
  <div v-if='country' class="wrapper">
      <img class="country-img" :src="`images/${country.touristAttractionsImages[1]}`" alt="">
  <!-- vi-ifs? -->
    <div>
        <h3>{{country.name}}: {{country.touristAttractionsDescriptions.attraction2.name}}</h3>
    </div>
  </div>
    <div v-if='country' class="wrapper" id="content">
      <div class="description">
        <p><span class="bold">{{country.name}}: {{country.touristAttractionsDescriptions.attraction2.name}}</span> {{country.touristAttractionsDescriptions.attraction2.description1}}</p>
        <p><span class="bold">Seasonal Opening Hours:</span> {{country.touristAttractionsDescriptions.attraction2.description2}}</p>
        <p><span class="bold">Top Travel Tips:</span> {{country.touristAttractionsDescriptions.attraction2.description3}}</p>
        <p><span class="bold">**</span> {{country.touristAttractionsDescriptions.attraction2.description4}}</p>
        <div class="btn-container">
          <previous></previous>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Previous from './Previous.vue';

export default {
  name: 'attraction-two',
  props: ['country'],
  components: {
    'previous': Previous,
  }
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: White;
  height: 100%;
  border-radius: 8px;
}
.btn-container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.country-img {
  width: 90%;
  margin-top: 25px;
  border-radius: 8px solid LightGray;
  -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
}
.wrapper {
  width: 600px;
  height: auto;
  text-align: center;
  border: 1px solid #dfe1e5;
  background-color: White;
  -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
}
.description {
  width: 80%;
  text-align: justify;
  margin: auto;
}
.heading {
  color: #3A405A;
  font-weight: bold;
  font-size: 20px;
}
#content {
  background-color: White;
}
h3 {
  font-family: 'Brush Script MT';
  text-align: center;
  font-size: 30px;
  color: #3A405A;
}
p {
  font-family: 'Courier New';
  font-size: 16px;
}
.bold {
  color: #3A405A;
  font-weight: bold;
  font-size: 18px;
}
</style>

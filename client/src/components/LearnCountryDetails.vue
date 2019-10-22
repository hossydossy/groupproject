<template lang="html">
  <div v-if='country' class="wrapper">
    <h3>{{country.name}}</h3>
    <div class="image-flag-container">
      <img :src="`${country.flag}`" class="flag">
      <img class="country-img" :src="`images/${country.images[0]}`" alt="">
    </div>
    <div class="details">
      <p><span class="title">Capital:</span> {{country.capital}}</p>
      <p><span class="title">Population:</span> {{country.population}}</p>
      <p><span class="title">Currency: </span> {{country.currency}} </p>
      <p><span class="title">Languages: </span></p>
      <ul v-for="(language) in country.languages">
         <li>{{language}}</li>
      </ul>
    </div>
      <div class="description" >
          <p><span class="title">Description:</span> {{country.description}}</p>
      </div>
    <div id="map"></div>
  </div>

</template>

<script>

export default {
  name: "learn-country-details",
  props: ['country'],
  updated() {
    this.displayMap()

  },
  methods: {
    displayMap() {

      const latLng = {
        lat: this.country.latlng[0],
        lng: this.country.latlng[1]
      }
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: latLng
      });
      const marker = new google.maps.Marker({
          position: latLng,
          map: map
      });
    }
  }

}

</script>

<style lang="css" scoped>
#map {
  height: 300px;  /* The height is 400 pixels */
  width: 600px;  /* The width is the width of the web page */
  overflow:visible;
  border-radius: 0px 0px 8px 8px;
}

.country-img {
  width: 600px;
  /* border-radius: 8px 8px 0px 0px; */
}

.wrapper {
  width: 600px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid #dfe1e5;
  border-radius: 8px;
  -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  background-color: white;
  margin-bottom: 20px;
}

.description {
  /* display: flex; */
  width: 330px;
  text-align: justify;
  float: right;
  padding-right: 10px;

}

.details {
  margin-top: 1em;
  width: 250px;
  float: left;
  text-align: left;
  padding-left: 10px;
}

.details p {
  margin-bottom: 4px;
  margin-top: 4px;
}

.image-flag-container {
  position: relative;
}

.flag{
  width: 100px;
  position: absolute;
  right: 0px;
  /* border-top-right-radius: 8px; */
}

.title{
  color:#457B9D;
  font-weight:bold;
}

h3 {
  margin-top: 6px;
  margin-bottom: 6px;
}

ul {
  list-style-type:square;
  margin: 6px;
}

</style>

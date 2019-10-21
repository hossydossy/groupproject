<template lang="html">
  <div v-if='country' class="wrapper">
    <h3>{{country.name}}</h3>
    <div class="image-flag-container">
      <img :src="`${country.flag}`" class="flag">
      <img class="country-img" :src="`images/${country.images[0]}`" alt="">
    </div>
    <div class="details">
      <p><span style="color:#457B9D;font-weight:bold">Capital:</span> {{country.capital}}</p>
      <p><span style="color:#457B9D;font-weight:bold">Population:</span> {{country.population}}</p>
      <p><span style="color:#457B9D;font-weight:bold">Currency: </span> {{country.currency}} </p>
      <p><span style="color:#457B9D;font-weight:bold">Languages: </span></p>
      <ul v-for="(language) in country.languages">
         <li>{{language}}</li>
      </ul>
    </div>
      <div class="description" >
          <p><span style="color:#457B9D;font-weight:bold">Description:</span> {{country.description}}</p>
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
      // var borderCoordinates = [
      //       {lat: 25.774, lng: -80.190},
      //       {lat: 18.466, lng: -66.118},
      //       {lat: 32.321, lng: -64.757}
      // ];
      // const countryBorders = new google.maps.Polygon({
      //     paths: this.convertCoordinates(),
      //     strokeColor: '#FF0000',
      //     strokeOpacity: 0.8,
      //     strokeWeight: 3,
      //     fillColor: '#FF0000',
      //     fillOpacity: 0.35
      // });
      // countryBorders.setMap(map);
      const marker = new google.maps.Marker({
          position: latLng,
          map: map
      });
    }
  }
}
    // },
    // convertCoordinates() {

    //   let coor = test.split(' ');
    //
    //   let googleCoordinates = [];
    //
    //   coor.forEach((cordinate) => {
    //     let coorArray = cordinate.split(',')
    //     googleCoordinates.push({lat: parseFloat(coorArray[1]), 'lng': parseFloat(coorArray[0])});
    //   });
    //   return googleCoordinates;
    // }
//   }
// }
</script>

<style lang="css" scoped>
#map {
  height: 300px;  /* The height is 400 pixels */
  width: 600px;  /* The width is the width of the web page */
  overflow:visible;
  /* margin: 20px auto; */
  border-radius: 0px 0px 8px 8px;
}

.country-img {
  width: 600px;
  /* border-radius: 8px 8px 0px 0px; */
}

.wrapper {
  width: 600px;
  margin: 20px auto;
  text-align: center;
  border: 1px solid #dfe1e5;
  border-radius: 8px;
  -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
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

h3 {
  margin-top: 6px;
  margin-bottom: 6px;
}

ul {
  list-style-type:square;
  margin: 6px;
}

</style>

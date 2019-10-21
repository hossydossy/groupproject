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
      var borderCoordinates = [
            {lat: 25.774, lng: -80.190},
            {lat: 18.466, lng: -66.118},
            {lat: 32.321, lng: -64.757}
      ];
      const countryBorders = new google.maps.Polygon({
          paths: this.convertCoordinates(),
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 3,
          fillColor: '#FF0000',
          fillOpacity: 0.35
      });
      countryBorders.setMap(map);
      const marker = new google.maps.Marker({
          position: latLng,
          map: map
      });
    },
    // convertCoordinates() {
    //   let test = '24.1670091586,65.8140272883,0 23.6625002258,66.3122092253,0 24.0007631611,66.8022821739,0 23.5733273369,67.1570091788,0 23.7651361275,67.4168733237,0 23.4308271036,67.4797821894,0 23.488818139,67.8709630971,0 23.6597911947,67.9458911091,0 22.826663209,68.3859631553,0 22.0486091889,68.4815181929,0 20.58092721,69.0603001758,0 21.0634732095,69.036800169,0 21.0302731615,69.2105452877,0 21.320827142,69.3261091017,0 21.6819451804,69.2847180902,0 22.3983271684,68.7111090827,0 23.1963911384,68.6298540749,0 23.9763911012,68.8324911109,0 24.934918226,68.5808092123,0 25.7611091809,68.989163131,0 25.7133361883,69.2552630765,0 25.983327181,69.7043000711,0 26.4768001648,69.9363822302,0 27.9106911716,70.0886091593,0 28.3797183347,69.8275001341,0 29.1275002732,69.6858181422,0 29.2984731612,69.4853360934,0 28.825418326,69.2361632337,0 28.9573362389,69.0516180328,0 28.4355542152,68.9026360737,0 28.8173542645,68.8470001854,0 28.4598541908,68.5348542546,0 28.6950002708,68.1954091356,0 29.3569453179,68.0824911532,0 30.0286091818,67.6947181597,0 29.075136177,66.9036001052,0 29.9037451434,66.1338822231,0 30.134927086,65.7088820124,0 29.8188820615,65.6533180408,0 29.6020452432,65.2444360623,0 29.869445222,65.1199911189,0 29.6211821341,65.0523540216,0 29.6408271359,64.9209631628,0 30.1427730503,64.7720732369,0 30.2068731521,64.663327263,0 29.9764542979,64.5789451348,0 30.0615272626,64.4053451907,0 30.5773541117,64.2237361705,0 30.5952732797,64.0469361834,0 29.998954176,63.7353360821,0 31.2197180272,63.2230541075,0 31.581963264,62.907900247,0 31.2581911305,62.5082541199,0 27.8078272821,60.5464001064,0 26.5636091893,60.4280540035,0 26.5690091466,60.5563541194,0 26.41652724,60.3916631326,0 26.0550631966,60.4227730692,0 26.0787452583,60.2940270361,0 25.8381911744,60.398463203,0 25.9216631956,60.2437451723,0 25.6575003078,60.3612452059,0 24.4725001935,59.9904180737,0 23.4315911979,59.9538181581,0 23.5375002328,60.0675632667,0 23.2493000583,59.8379182298,0 22.9002730829,59.8068000789,0 23.3356911612,60.0239540684,0 23.1092272241,59.9256542928,0 23.2548631275,60.0370821405,0 22.874445254,60.1455541938,0 23.0846541662,60.3452000639,0 22.5984632122,60.2204091156,0 22.5654732147,60.2119361849,0 22.5398730383,60.2186360078,0 22.449300204,60.2423541116,0 22.626591203,60.3804451286,0 21.3586092412,60.6536091746,0 21.554445201,61.3094361029,0 21.4688911151,61.5565272332,0 21.6638910638,61.5402730465,0 21.2845821162,61.9463822914,0 21.3716632172,62.2599911996,0 21.0659731959,62.5979820584,0 21.4355542744,63.0347182747,0 21.6766002084,63.0201361101,0 21.4968732607,63.2035361754,0 22.3400001863,63.2765269619,0 22.1878451739,63.4451361532,0 22.2881911397,63.5256912721,0 23.3188820925,63.8966632435,0 24.3393001847,64.5216632083,0 24.5395822412,64.7991541604,0 25.3194452437,64.8177629913,0 25.1893002709,64.9640181496,0 25.444236192,64.9533912375,0 25.2675002426,65.170000068,0 25.3037451008,65.515136164,0 24.6691632796,65.6547091015,0 24.5535360984,65.7620001446,0 24.6891631711,65.8961000346,0 24.1670091586,65.8140272883,0';
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
  }
}
</script>

<style lang="css" scoped>
#map {
  height: 300px;  /* The height is 400 pixels */
  width: 600px;  /* The width is the width of the web page */
  overflow:visible;
  margin: 20px auto;
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

<template lang="html">
  <div class="wrapper" v-if='countries'>
    <div id="map"></div>
    <div class="menu">Test</div>
    <div v-if='countrySelected' class="flag">
      <img :src="countrySelected.flag" alt="">
      <button v-on:click="randomFlag"type="button" name="button" class="btn">Skip</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "game-1",
  props: ['countries'],

  data(){
    return {
      countrySelected: null,
      mapLoaded: false
    }
  },
  updated() {
    if (this.mapLoaded == false) {
      this.displayMap(),
      this.mapLoaded = true
    }
  },
  methods: {
    displayMap() {
      this.randomFlag();
      const center = {
        lat: 51,
        lng: 9
      }
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: center,
        mapTypeId: 'hybrid',
      });

      this.countries.map((country) => {
        const latLng = {
          lat: country.latlng[0],
          lng: country.latlng[1]
        }
        const marker = new google.maps.Marker({
            position: latLng,
            map: map,
            customInfo: country._id
        });
        google.maps.event.addListener(marker, 'click', () => {
            this.checkGame(marker.customInfo)
        });
      })
    },
    randomFlag() {
      const indexCountry = Math.floor(Math.random() * this.countries.length - 1);
      this.countrySelected = this.countries[indexCountry];
    },
    checkGame(countrySelectedId) {
      if (countrySelectedId == this.countrySelected._id) {
        alert('You WIN 🎉');
        // confetti.start(5000);
        confetti.start(2000, 50, 200)
        setTimeout(() => { this.randomFlag()}, 2500);
        return;
      }
      alert('Try again 😕');
    }

  }
}

</script>

<style lang="css" scoped>
#map {
  width: 100%;  /* The width is the width of the web page */
  height: 100vh;
  overflow:visible;
}
.wrapper {
  position: relative;
}
/* .menu {
  position: absolute;
  top: 20px;
  left: 0px;
  width: 150px;
  height: 300px;
  z-index: 500;
  background-color: red;
} */

.flag {
  position: absolute;
  bottom: 50px;
  left: 50%;
  right: 50%;
  z-index: 500;
}

.flag img {
  width: 150px;
  margin-left: auto;
  margin-right: auto;
}

.gm-style-mtc {
  display: none !important;
}

.btn {
  width: 150px;
  font-weight: bold;
}
</style>

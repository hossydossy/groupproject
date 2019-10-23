<template lang="html">
  <div class="wrapper" v-if='countries'>
    <div id="map"></div>
    <div class="menu"></div>
    <div v-if='countrySelected' class="flag">
      <img class="flag-img":src="countrySelected.flag" alt="">
      <button v-on:click="randomFlag"type="button" name="button" class="btn">Skip</button>
    </div>
    <div class="instructions">
      <p class="title">Instructions</p>
      <div class="body">
        <p>World Flag Quiz</p>
        <p>How well do you know the flags of the world?  Will you be able to recognise the flags of countries like France, Germany and Cyprus?  Test your knowledge in this fun interactive map-based quiz.</p>
        <p>How to play:</p>
          Click the map on the country which relates to flag displayed.
          Good luck!
        </p>
      </div>
      <button type="button" name="button" @click='startGame' class="btn-2">Let's Play!</button>
    </div>
    <div class="back">
      <button type="button" name="Back" v-on:click="goBack">Back</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
  name: "map-game",
  props: ['countries'],
  data(){
    return {
      countrySelected: null,
      mapLoaded: false
    }
  },
  mounted() {
    if (this.mapLoaded == false) {
      this.displayMap(),
      this.mapLoaded = true
    }
  },
  methods: {
    startGame(event) {
      this.randomFlag();
      event.target.parentElement.remove();
    },
    displayMap() {
      console.log('asd');
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
      const indexCountry = Math.floor(Math.random() * this.countries.length);
      this.countrySelected = this.countries[indexCountry];
      this.animate('.flag-img', 'bounceInDown');
    },
    checkGame(countrySelectedId) {
      if (countrySelectedId == this.countrySelected._id) {
        confetti.start(2000, 50, 200)
        this.animate('.flag-img', 'flip');
        setTimeout(() => { this.randomFlag()}, 3500);
        return;
      }
      this.animate('.flag-img', 'shake');
    },
    animate(element, animationName, callback) {
      const node = document.querySelector(element)
      if (node == null) {
        return;
      }
      node.classList.add('animated', animationName)
      function handleAnimationEnd() {
          node.classList.remove('animated', animationName)
          node.removeEventListener('animationend', handleAnimationEnd)

          if (typeof callback === 'function') callback()
      }
      node.addEventListener('animationend', handleAnimationEnd)
    },
    goBack(){
      eventBus.$emit('go-to', 'play')
    }
  },
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

.flag {
  position: absolute;
  z-index: 500;
  left: 50%;
  bottom: 50px;
  margin-left: -75px;
  display: flex;
  flex-direction: column;
}

.flag-img {
  width: 150px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px solid LightGray;
  -webkit-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
  box-shadow: 15px 14px 37px -19px rgba(0,0,0,0.75);
}

.gm-style-mtc {
  display: none !important;
}

.btn {
  width: 150px;
  margin-top: 10px;
  font-weight: bold;
}

.instructions {
  width: 300px;
  background-color: #636f6e;
  opacity: 0.9;
  position: absolute;
  z-index: 500;
  border-radius: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding-bottom: 10px;
}

.title {
  text-align: center;
}

.hide {
  display: none;
}

.body {
  text-align: justify;
  padding: 0px 10px 0px 10px;
}

.btn-2 {
  text-align: center;
  display: block;
  margin: 0 auto;
  font-weight: bold;

}

.back {
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translate(-50%, -50%);
  z-index: 500;
  width: 5%;
  /* height: 100px; */

}
 .back button{
  padding: 10px 20px;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: black;
  background-color: white;
  border: none;
  border-radius: 15px;
  /* box-shadow: 0 5px #999; */
  font-weight: bold;
 }

</style>

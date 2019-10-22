<template lang="html">
  <div class="main-container">
  <div v-if='country' class="wrapper">

    <img class="country-img" :src="`images/${country.touristAttractionsImages[0]}`" alt="">

  <div class="description" >
      <h3>{{country.name}}: {{country.touristAttractionsDescriptions.attraction1.name}}</h3>
      <p>{{country.touristAttractionsDescriptions.attraction1.description1}}</p>
      <p>{{country.touristAttractionsDescriptions.attraction1.description2}}</p>
      <p>{{country.touristAttractionsDescriptions.attraction1.description3}}</p>
      <p>{{country.touristAttractionsDescriptions.attraction1.description4}}</p>
  </div>

    <div class="container">
      <previous></previous>
      <next></next>
    </div>

  </div>
</div>
</template>

<script>
import Next from './Next.vue';
import Previous from './Previous.vue';
export default {
  name: 'tourist-attraction-detail',
  props: ['country'],
  components: {
    'next': Next,
    'previous': Previous,
  },
  methods: {
    showAttraction: function() {
      console.log(this.country);
    }
  },
  mounted() {
    this.showAttraction();
  }
}
</script>

<style lang="css" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-align: center;
  margin: auto;
}
.container {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  background-color: White;
}
.country-img {
  width: 90%;
  margin-top: 25px;
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
  width: 90%;
  text-align: justify;
  margin-left: 30px;
  /* float: right;*/
  /* padding-right: 50px/ */
}

h3 {
  font-family: 'Brush Script MT';
  text-align: center;
  font-size: 25px;
}
</style>

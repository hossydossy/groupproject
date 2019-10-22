<template lang="html">
  <div class="main-container">
  <div v-if='country' class="wrapper">

    <img class="country-img" :src="`images/${country.images[0]}`" alt="">

  <div class="description" >
      <!-- <p><span style="color:#457B9D;font-weight:bold">Description:</span> {{country.description}}</p> --><h3>{{country.name}}: Kastelholm Castle, Sund</h3>
      <p><span style="color:#457B9D;font-weight:bold">Kastelholm Castle in Sund</span> is one of the top attractions in Åland. It’s a medieval castle, built in the 14th century.</p>
      <p>This castle was once in the middle of the Kingdom of Sweden where the Swedish ruler Gustav Vasa, among other kings, royals and nobles spent their time.</p>
      <p><span style="color:#457B9D;font-weight:bold">Seasonal Opening Hours: </span>Open from May until the middle of September.</p>
      <p><span style="color:#457B9D;font-weight:bold">Top Travel Tip: </span>If your visit falls outside of the season, It’s worth going here just to see the castle from the outside and take some great Instagram photos or shots for your photo album. The surrounding fjord area is really beautiful.</p>
      <p>If you really want to see the museum you can book a private visit outside of the season for an extra fee.</p>
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

<template lang="html">
  <div class="main-container">
  <div v-if='country' class="wrapper">
    <h3>{{country.name}}</h3>
    <img class="country-img" :src="`images/${country.images[0]}`" alt="">

  <div class="description" >
      <!-- <p><span style="color:#457B9D;font-weight:bold">Description:</span> {{country.description}}</p> -->
      <p><span style="color:#457B9D;font-weight:bold">Åland Islands: Kastelholm Castle, Sund </span>Kastelholm Castle in Sund is one of the top attractions in Åland. It’s a medieval castle, built in the 14th century. Many kings, royals, and nobles have spent time here, among them the Swedish king Gustav Vasa.</p>
      <p>This castle was once in the middle of the Kingdom of Sweden where the Swedish ruler Gustav Vasa, among other kings, spent their time.</p>
      <p>Even though the castle museum is only open from May until the middle of September, it’s worth going here just to see the castle from the outside and take some great Instagram photos or shots for your photo album. The surrounding fjord area is really beautiful.</p>
      <p>If you really want to see the museum you can book a private visit outside of the season for an extra fee.</p>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'tourist-attraction-detail',
  props: ['country'],

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
.country-img {
  width: 600px;
  border-radius: 8px 8px 0px 0px;
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
</style>

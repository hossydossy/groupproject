<template lang="html">
<div id="mySideNav" class="container">
  <a href="#">Home</a>
  <a href="#">Play</a>
  <a href="#">Learn</a>
</div>
</template>

<script>
export default {
  name: 'nav-bar',
}
</script>

<style lang="css"scoped>
.container{
  background-color: White;
  height: 100%; /* 100% Full-height */
  width: 15%;
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: White; /* White*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 80px; /* Place content 50px from the top */

}
a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: Black;
  display: block;
}
a:hover {
  color: #818181;
}
/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>

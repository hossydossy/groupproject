<template lang="html">
  <div class="main-container">
    <h1>Bingo Game</h1>


        <div class="container">
      <table style="max-width:45%">
        <tr>
          <th colspan="5">Player</th>
        </tr>
        <tr>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/ala.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/alb.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/and.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/aut.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/blr.svg" alt="">
          </img>
        </td>
      </tr>
      <tr>
        <td v-on:click="e => e.target.classList.toggle('marked')">
          <img src="https://restcountries.eu/data/bel.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/bih.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/bgr.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/hrv.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/cyp.svg" alt="">
          </img>
        </td>
      </tr>
        <tr>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/cze.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/dnk.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/est.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/fro.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/fin.svg" alt="">
          </img>
        </td>
        <tr>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/fra.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/deu.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/gib.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/grc.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/ggy.svg" alt="">
          </img>
        </td>
      </tr>
        <!-- <tr>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/ala.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/alb.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/and.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/aut.svg" alt="">
          </img>
        </td>
          <td v-on:click="e => e.target.classList.toggle('marked')">
            <img src="https://restcountries.eu/data/blr.svg" alt="">
          </img>
        </td>
          <table-data v-on:click="e => e.target.classList.toggle('marked')"></table-data>
        </tr> -->
      </table>
      <table style="width:40%">
        <tr>
          <th colspan="5">CPU</th>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
        </tr>
        <tr>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
        </tr>
        <tr>
          <td>11</td>
          <td>12</td>
          <td class="free">Free</td>
          <td>14</td>
          <td>15</td>
        </tr>
        <tr>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
        </tr>
        <tr>
          <td>21</td>
          <td>22</td>
          <td>23</td>
          <td>24</td>
          <td>25</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bingo-game',
  props: ['countries', 'country'],
  methods: {
  },
  mounted(){
  }
}
</script>

<style lang="css" scoped>
  h1{
    color: White;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  th, td {
    color: White;
    border: 1px solid White;
  }
  td {
    max-width: 20%;
    height: auto;
    /* background-color: Black; */
  }
  .free {
    color: Black;
    background-color: White;
    border-radius: 50px;
  }
  .marked {
    color: Black;
    background-color: White;
    border-radius: 50px;
  }
  img {
    width: 100%;
    height: auto;
  }
</style>

<template>
  <div class="country">
    <p>{{computedCountry.name}}</p>
    <router-link :to="{name:'SubdivisionsGrid'}">View Subdivisions</router-link>
    <router-link :to="{name:'CountriesGrid'}">Back To Countries</router-link>
  </div>
</template>
<script>
import {GetCountry} from '../core/fakeapimiddleware'
export default {
  name: 'country',
  props: ['countryid'],
  computed: {
    computedCountry: function () {
      return GetCountry(this.countryid - 1)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: green;
}
</style>
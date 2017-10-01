<template>
  <div class="country">
    <p>{{name}}</p>
    <p>{{alpha2}}</p>
    <p>{{alpha3}}</p>
    <router-link :to="{name:'SubdivisionsGrid'}">View Subdivisions</router-link>
    <router-link :to="{name:'CountriesGrid'}">Back To Countries</router-link>
  </div>
</template>
<script>
import {GetCountry} from '../core/fakeapimiddleware'

var country = GetCountry()

export default {
  name: 'country',
  data () {
    return {
      id: country.id,
      name: country.name,
      alpha2: country.alpha2,
      alpha3: country.alpha3,
      code: country.code
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
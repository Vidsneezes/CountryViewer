<template>
  <div class="subdivisions">
    <ul id="subdivisions-list" >
        <li v-for="subdivision in country.subdivisions" :key="subdivision.id">
            <router-link :to="{name:'SubdivisionView', params:{subdivisionid: subdivision.id}}">{{subdivision.name}}</router-link>
        </li>
    </ul>
    <router-link :to="{name:'AddSubdivisionView'}">Add New Subdivision</router-link>
    <router-link :to="{name:'CountryView', params:{countryid: country.id}}">Back To Country</router-link>
    <router-link :to="{name:'CountriesGrid'}">Back To Countries</router-link>
  </div>
</template>
<script>
import {GetSubdivisions} from '../../core/fakeapimiddleware'
export default {
  name: 'subdivisions',
  props: ['countryid'],
  computed: {
    country: function () {
      return GetSubdivisions(this.countryid)
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
  color: #42b983;
}
</style>
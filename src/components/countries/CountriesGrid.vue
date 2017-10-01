<template>
  <div class="countries">
    <ul id="countries-list" >
        <li v-for="country in countries" :key="country.id">
            <router-link :to="{name:'CountryView' , params:{countryid: country.id}}">{{country.name}}</router-link>
        </li>
    </ul>
  </div>
</template>
<script>
import {GetCountries} from '../../core/fakeapimiddleware'
var countries = GetCountries()
export default {
  name: 'countries',
  data () {
    return {
      countries: countries
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
<template>
  <div class="country">
    <p>Name: {{computedCountry.name}}</p>
    <p>Alpha2: {{computedCountry.alpha2}}</p>
    <p>Alpha3: {{computedCountry.alpha3}}</p>
    <p>Code: {{computedCountry.code}}</p>
    <p>Is independent? {{computedCountry['is_independent']}}</p>
    <p>Iso: {{computedCountry['iso_3166_2']}}</p>
    <router-link :to="{name:'EditCountryView', params:{countryid: computedCountry.id}}">Edit</router-link>
    <router-link :to="{name:'SubdivisionsGrid', params:{countryid: computedCountry.id}}">View Subdivisions</router-link>
    <router-link :to="{name:'CountriesGrid'}">Back To Countries</router-link>
  </div>
</template>
<script>
import {GetCountry} from '../../core/fakeapimiddleware'
export default {
  name: 'country',
  props: ['countryid'],
  computed: {
    computedCountry: function () {
      let country = GetCountry(this.countryid)
      console.log(country)
      if (country === undefined) {
        this.$router.push({name: 'PageNotFound404'})
        return {name: '', alpha2: '', alpha3: '', code: '', is_independent: 'false', iso_3166_2: ''}
      }
      return country
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
<template>
  <div class="country">
    <p>Name: {{country.name}}</p>
    <p>Alpha2: {{country.alpha2}}</p>
    <p>Alpha3: {{country.alpha3}}</p>
    <p>Code: {{country.code}}</p>
    <p>Is independent? {{country.is_independent}}</p>
    <p>Iso: {{country.iso_3166_2}}</p>
    <router-link :to="{name:'EditCountryView', params:{countryid: country_id}}">Edit</router-link>
    <router-link :to="{name:'SubdivisionsGrid', params:{countryid: country_id}}">View Subdivisions</router-link>
    <router-link :to="{name:'CountriesGrid'}">Back To Countries</router-link>
  </div>
</template>
<script>
import {GetCountry} from '../../core/fakeapimiddleware'
export default {
  name: 'country',
  props: ['countryid'],
  data () {
    let gcountry = GetCountry(this.countryid)
    if (gcountry === undefined) {
      this.$router.push({name: 'PageNotFound404'})
      gcountry = {name: '', alpha2: '', alpha3: '', code: '', is_independent: '', iso_3166_2: ''}
    }
    return {
      country_id: this.countryid,
      country: gcountry
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
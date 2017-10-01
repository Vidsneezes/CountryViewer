<template>
  <div class="country">
    <b-nav fill tabs class="nav-bar">
      <b-nav-item Active><b-link :to="{name:'CountriesGrid'}">Countries</b-link></b-nav-item>
      <b-nav-item><b-link :to="{name:'SubdivisionsGrid', params:{countryid: country_id}}">View Subdivisions</b-link></b-nav-item>
      <b-nav-item><b-link :to="{name:'EditCountryView', params:{countryid: country_id}}">Edit</b-link></b-nav-item>
    </b-nav> 
    <div class="mx-auto" style="width: 400px;">
      <b-container class="country-view">
        <p>Name: {{country.name}}</p>
        <p>Alpha2: {{country.alpha2}}</p>
        <p>Alpha3: {{country.alpha3}}</p>
        <p>Code: {{country.code}}</p>
        <p>Is independent? {{country.is_independent}}</p>
        <p>Iso: {{country.iso_3166_2}}</p>
      </b-container>
    </div>
    
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
p {
  font-weight: bold;
  font-size: x-large;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.nav-bar{
  background: lightseagreen;
  padding-bottom: 15px;
  padding-top: 10px;
  
}
.nav-bar a {
  color: white;
}
.country-view {
  margin-top: 50px;
}
</style>
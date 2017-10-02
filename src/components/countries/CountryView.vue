<template>
  <div class="country">
    <b-nav fill class="nav-bar">
      <b-nav-item :to="{name:'CountriesGrid'}">Countries</b-nav-item>
      <b-nav-item :to="{name:'SubdivisionsGrid', params:{countryid: country_id}}">View Subdivisions</b-nav-item>
      <b-nav-item :to="{name:'EditCountryView', params:{countryid: country_id}}">Edit</b-nav-item>
    </b-nav> 
    <div v-if='loaded' class="mx-auto" style="width: 400px;">
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
    return {
      country_id: this.countryid,
      country: {},
      loaded: false
    }
  },
  mounted: function () {
    GetCountry(this.countryid, (response) => {
      this.country = response.data.data
      this.loaded = true
      console.log(this.country)
    })
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
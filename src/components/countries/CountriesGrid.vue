<template>
  <div class="countries">
    <b-nav fill class="nav-bar">
      <b-nav-item Active><b-link :to="{name:'CountriesGrid'}">Countries</b-link></b-nav-item>
      <b-nav-item><b-link :to="{name:'AddCountryView'}">Add New Country</b-link></b-nav-item>
    </b-nav> 
    <b-row  v-for="country in countries" :key="country.id" class="b-row">
      <b-col>
        <b-card :title='country.name' class="country-card">
          <b-button size='lg' variant='primary'>
            <b-link :to="{name:'CountryView' , params:{countryid: country.id}}">Visit</b-link>
          </b-button>
        </b-card>
      </b-col>
    </b-row>
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
a{
  color:white
}

.country-card {
  margin-bottom: 10px;
}

.nav-bar{
  background: lightseagreen;
  padding-bottom: 15px;
  padding-top: 10px;
  
}
.nav-bar a {
  color: white;
}
</style>
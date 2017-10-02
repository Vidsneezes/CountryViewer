<template>
  <div  class="countries">
    <b-nav fill class="nav-bar">
      <b-nav-item :to="{name:'AddCountryView'}">Add New Country</b-nav-item>
    </b-nav> 
    <div v-if='loaded'>
    <b-row   v-for="country in countries" :key="country.id" class="b-row">
      <b-col>
        <b-card :title='country.name' class="country-card">
          <b-button size='lg' variant='primary' :to="{name:'CountryView' , params:{countryid: country.id}}">Visit
          </b-button>
        </b-card>
      </b-col>
    </b-row>
    </div>
  </div>
</template>
<script>
import {GetCountries} from '../../core/fakeapimiddleware'
export default {
  name: 'countries',
  data () {
    return {
      countries: [],
      loaded: false
    }
  },
  mounted: function () {
    GetCountries((response) => {
      this.countries = response.data.data
      this.loaded = true
      console.log(this.countries)
    })
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
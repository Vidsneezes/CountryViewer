<template>
  <div class="countries">
    <b-row >
      <b-col v-for="country in countries" :key="country.id" class="bv-example-row">
        <b-button size='lg' variant='primary'>
          <router-link :to="{name:'CountryView' , params:{countryid: country.id}}">{{country.name}}</router-link>
        </b-button>
      </b-col>
    </b-row>
    <b-container>
      <b-row>
        <b-button>
          <router-link :to="{name:'AddCountryView'}">Add New Country</router-link>
        </b-button>
      </b-row>
    </b-container>
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
</style>
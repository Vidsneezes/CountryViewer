<template>
  <div class="countries">
    <b-row  v-for="country in countries" :key="country.id" class="b-row">
      <b-col>
        <b-card :title='country.name'>
          <b-button size='lg' variant='primary'>
            <b-link :to="{name:'CountryView' , params:{countryid: country.id}}">Visit</b-link>
          </b-button>
        </b-card>
      </b-col>
    </b-row>
    <b-button>
        <b-link :to="{name:'AddCountryView'}">Add New Country</b-link>
    </b-button>
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
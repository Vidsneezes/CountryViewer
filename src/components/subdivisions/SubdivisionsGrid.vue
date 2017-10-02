<template>
  <div class="subdivisions">
     <b-nav fill class="nav-bar">
      <b-nav-item :to="{name:'CountriesGrid'}">Back To Countries</b-nav-item>
      <b-nav-item :to="{name:'CountryView', params:{countryid: country_id}}">Back To Country</b-nav-item>
      <b-nav-item :to="{name:'AddSubdivisionView'}">Add New Subdivision</b-nav-item>
    </b-nav>
    <div v-if='loaded'> 
    <b-row  v-for="subdivision in subdivisions" :key="subdivision.id" class="b-row">
      <b-col>
        <b-card :title='subdivision.name' class="country-card">
          <b-button size='lg' variant='primary' :to="{name:'SubdivisionView', params:{countryid:country_id, subdivisionid: subdivision.id}}">Visit
          </b-button>
        </b-card>
      </b-col>
    </b-row>
    </div>
  </div>
</template>
<script>
import {GetSubdivisions} from '../../core/fakeapimiddleware'
export default {
  name: 'subdivisions',
  props: ['countryid'],
  data () {
    return {
      country_id: this.countryid,
      subdivisions: [],
      loaded: false
    }
  },
  mounted: function () {
    GetSubdivisions(this.countryid, (response) => {
      this.subdivisions = response.data.data
      this.loaded = true
    })
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
  color: white;
}
.nav-bar{
  background: lightseagreen;
  padding-bottom: 15px;
  padding-top: 10px;
  
}
.nav-bar a {
  color: white;
}
.country-entry{
  margin-bottom: 20px;
  
}
.country-entry-form {
  margin-top: 30px;
}
</style>
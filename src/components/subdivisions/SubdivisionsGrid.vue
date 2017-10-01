<template>
  <div class="subdivisions">
     <b-nav fill class="nav-bar">
      <b-nav-item><b-link :to="{name:'CountriesGrid'}">Back To Countries</b-link></b-nav-item>
      <b-nav-item><b-link :to="{name:'CountryView', params:{countryid: country_id}}">Back To Country</b-link></b-nav-item>
      <b-nav-item><b-link :to="{name:'AddSubdivisionView'}">Add New Subdivision</b-link></b-nav-item>
    </b-nav> 
    <b-row  v-for="subdivision in subdivisions" :key="subdivision.id" class="b-row">
      <b-col>
        <b-card :title='subdivision.name' class="country-card">
          <b-button size='lg' variant='primary'>
            <b-link :to="{name:'SubdivisionView', params:{countryid:country_id, subdivisionid: subdivision.id}}">Visit</b-link>
          </b-button>
        </b-card>
      </b-col>
    </b-row>
    <ul id="subdivisions-list" >
        <li >
        </li>
    </ul>
  </div>
</template>
<script>
import {GetSubdivisions} from '../../core/fakeapimiddleware'
export default {
  name: 'subdivisions',
  props: ['countryid'],
  data () {
    return {
      country_id: this.countryid
    }
  },
  computed: {
    subdivisions: function () {
      let subs = GetSubdivisions(this.countryid)
      if (subs === null) {
        subs = []
      }
      return subs
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
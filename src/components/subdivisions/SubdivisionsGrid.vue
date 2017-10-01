<template>
  <div class="subdivisions">
    <ul id="subdivisions-list" >
        <li v-for="subdivision in subdivisions" :key="subdivision.id">
            <router-link :to="{name:'SubdivisionView', params:{countryid:country_id, subdivisionid: subdivision.id}}">{{subdivision.name}}</router-link>
        </li>
    </ul>
    <router-link :to="{name:'AddSubdivisionView'}">Add New Subdivision</router-link>
    <router-link :to="{name:'CountryView', params:{countryid: country_id}}">Back To Country</router-link>
    <router-link :to="{name:'CountriesGrid'}">Back To Countries</router-link>
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
  color: #42b983;
}
</style>
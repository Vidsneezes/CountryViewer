<template>
  <div class="country">
    <input v-model="name" placeholder="Country Name" type="text"/>
    <input v-model="alpha2" placeholder="Alpha2" type="text" maxlength="2"/>
    <input v-model="alpha3" placeholder="Alpha3" type="text" maxlength="3"/>
    <input v-model="code" placeholder="Code" type="text"/>
    Is Independent? <input v-model="isindependent" type="checkbox"/>
    <input v-model="iso31662" placeholder="Iso 3166 2" type="text"/>
    <button v-on:click='save'>Save</button>
    <button v-on:click='deleteCountry'>Delete</button>
    <router-link :to="{name:'CountriesGrid'}">Back To Countries</router-link>
  </div>
</template>
<script>
import {GetCountry, EditCountry, DeleteCountry} from '../../core/fakeapimiddleware'
export default {
  name: 'country',
  props: ['countryid'],
  data () {
    let country = GetCountry(this.countryid)
    if (country === null) {
      country = {name: '', alpha2: '', alpha3: '', code: '', is_independent: 'false', iso_3166_2: ''}
    }
    return {
      name: country.name,
      alpha2: country.alpha2,
      alpha3: country.alpha3,
      code: country.code,
      isindependent: country.is_independent,
      iso31662: country.iso_3166_2
    }
  },
  methods: {
    save: function () {
      EditCountry(this.$data, this.countryid)
      this.$router.push({name: 'CountryView', params: {countryid: this.countryid}})
    },
    deleteCountry: function () {
      DeleteCountry(this.countryid)
      this.$router.push({name: 'CountriesGrid'})
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
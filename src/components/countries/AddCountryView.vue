<template>
  <div class="country">
    <input v-model="name" placeholder="Country Name" type="text"/>
    <input v-model="alpha2" placeholder="alpha2" type="text" maxlength="2"/>
    <input v-model="alpha3" placeholder="alpha3" type="text" maxlength="3"/>
    <input v-model="code" placeholder="code" type="text"/>
    Is Independent? <input v-model="is_independent" type="checkbox"/>
    <input v-model="iso_3166_2" placeholder="Iso 3166 2" type="text"/>
    <button v-on:click='addCountry'>Add Country</button>
    <router-link :to="{name:'CountriesGrid'}">Back To Countries</router-link>
  </div>
</template>
<script>
import {AddCountry} from '../../core/fakeapimiddleware'
export default {
  name: 'country',
  props: ['countryid'],
  data () {
    return {
      name: '',
      alpha2: '',
      alpha3: '',
      code: '',
      'is_independent': false,
      'iso_3166_2': ''
    }
  },
  methods: {
    addCountry: function () {
      let lastIndex = AddCountry(this.$data)
      this.$router.push({name: 'CountryView', params: {countryid: lastIndex}})
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
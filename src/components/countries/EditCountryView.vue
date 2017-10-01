<template>
  <div class="country">
    <input v-model="name" :placeholder='computeCountry.name' type="text"/>
    <input v-model="alpha2" :placeholder='computeCountry.alpha2' type="text" maxlength="2"/>
    <input v-model="alpha3" :placeholder='computeCountry.alpha3' type="text" maxlength="3"/>
    <input v-model="code" :placeholder='computeCountry.code' type="text"/>
    Is Independent? <input v-model="is_independent" type="checkbox" :placeholder='computeCountry.isindependent'/>
    <input v-model="iso_3166_2" :placeholder='computeCountry.iso31662' type="text"/>
    <button v-on:click='save'>Save</button>
    <router-link :to="{name:'CountriesGrid'}">Back To Countries</router-link>
  </div>
</template>
<script>
import {GetCountry, EditCountry} from '../../core/fakeapimiddleware'
export default {
  name: 'country',
  props: ['countryid'],
  data () {
    return {
      name: '',
      alpha2: '',
      alpha3: '',
      code: '',
      isindependent: false,
      iso31662: ''
    }
  },
  methods: {
    save: function () {
      let lastIndex = EditCountry(this.$data, this.countryid)
      this.$router.push({name: 'CountryView', params: {countryid: lastIndex}})
    }
  },
  computed: {
    computeCountry: function () {
      return GetCountry(this.countryid)
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
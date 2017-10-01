<template>
  <div class="country">
    <p>{{computedCountry.name}}</p>
    <router-link :to="{name:'CountriesGrid'}" v-on:click='computedCountry'>Add Country</router-link>
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
      name: 'yo'
    }
  },
  computed: {
    computedCountry: function () {
      return AddCountry
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
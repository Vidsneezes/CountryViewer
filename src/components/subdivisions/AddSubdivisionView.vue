<template>
  <div class="country">
    <input v-model="name" placeholder="Country Name" type="text"/>
    <input v-model="code" placeholder="Code" type="text"/>
    <button v-on:click='addSubdivision'>Add Subdivision</button>
    <router-link :to="{name:'SubdivisionsGrid'}">Back To Subdivisions</router-link>
  </div>
</template>
<script>
import {AddSubdivision} from '../../core/fakeapimiddleware'
export default {
  name: 'country',
  props: ['countryid'],
  data () {
    return {
      name: '',
      code: ''
    }
  },
  methods: {
    addSubdivision: function () {
      let lastIndex = AddSubdivision(this.$data)
      this.$router.push({name: 'SubdivisionView', params: {subdivisionid: lastIndex}})
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
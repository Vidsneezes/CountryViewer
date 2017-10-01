<template>
  <div class="country">
    <b-nav fill class="nav-bar">
      <b-nav-item><b-link :to="{name:'SubdivisionsGrid', params:{countryid: country_id}}">Back To Subdivisions</b-link></b-nav-item>
    </b-nav> 
    <b-container class="country-entry-form" style="width: 280px;">
      <b-row class="country-entry">
        <b-col>
          Name: 
        </b-col>
        <b-col>
          <input v-model="name" placeholder="Country Name" type="text"/>
        </b-col>
      </b-row>
      <b-row class="country-entry">
        <b-col>
          Code: 
        </b-col>
        <b-col>
          <input v-model="code" placeholder="Code" type="text"/>
        </b-col>
      </b-row>
    <button v-on:click='addSubdivision'>Add Subdivision</button>
    </b-container>
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
      code: '',
      country_id: this.countryid
    }
  },
  methods: {
    addSubdivision: function () {
      let lastIndex = AddSubdivision(this.countryid, this.$data)
      this.$router.push({name: 'SubdivisionView', params: {countryid: this.countryid, subdivisionid: lastIndex}})
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
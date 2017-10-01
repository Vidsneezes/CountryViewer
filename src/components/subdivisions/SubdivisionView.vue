<template>
  <div class="subdivision">
    <b-nav fill class="nav-bar">
      <b-nav-item :to="{name:'EditSubdivisionView', params:{countryid: country_id, subdivisionid: subdivision_id}}">Edit</b-nav-item>
      <b-nav-item :to="{name:'SubdivisionsGrid', params:{countryid: country_id}}">Back To Subdivisions</b-nav-item>
    </b-nav> 
    <div class="mx-auto" style="width: 400px;">
      <b-container class="country-view">
        <p>Name: {{subdivision.name}}</p>
        <p>Code: {{subdivision.code}}</p>
      </b-container>
    </div>
    
  </div>
</template>
<script>
import {GetSubdivision, GetCountry} from '../../core/fakeapimiddleware'
export default {
  name: 'subdivision',
  props: ['countryid', 'subdivisionid'],
  data () {
    let country = GetCountry(this.countryid)
    let subdivision
    if (country !== undefined) {
      subdivision = GetSubdivision(this.countryid, this.subdivisionid)
      if (subdivision === undefined) {
        this.$router.push({name: 'PageNotFound404'})
        subdivision = {subdivision: {id: '', name: '', code: ''}}
      }
    } else {
      this.$router.push({name: 'PageNotFound404'})
      subdivision = {subdivision: {id: '', name: '', code: ''}}
    }
    return {
      country_id: this.countryid,
      subdivision_id: this.subdivisionid,
      subdivision: subdivision
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-weight: bold;
  font-size: x-large;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.nav-bar{
  background: lightseagreen;
  padding-bottom: 15px;
  padding-top: 10px;
  
}
.nav-bar a {
  color: white;
}
.country-view {
  margin-top: 50px;
}
</style>
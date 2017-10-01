<template>
  <div class="subdivision">
    <p>{{subdivision.name}}</p>
    <p>{{subdivision.code}}</p>
    <router-link :to="{name:'EditSubdivisionView', params:{countryid: country_id, subdivisionid: subdivision.id}}">Edit</router-link>
    <router-link :to="{name:'SubdivisionsGrid', params:{countryid: country_id}}">Back To Subdivisions</router-link>
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
        return {subdivision: {id: '', name: '', code: ''}}
      }
    } else {
      this.$router.push({name: 'PageNotFound404'})
      return {subdivision: {id: '', name: '', code: ''}}
    }
    return {
      country_id: this.countryid,
      subdivision: subdivision
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
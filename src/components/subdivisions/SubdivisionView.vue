<template>
  <div class="subdivision">
    <p>{{computedSubdivision.name}}</p>
    <p>{{computedSubdivision.code}}</p>
    <router-link :to="{name:'EditSubdivisionView', params:{subdivisionid: computedSubdivision.id}}">Edit</router-link>
    <router-link :to="{name:'SubdivisionsGrid'}">Back To Subdivisions</router-link>
  </div>
</template>
<script>
import {GetSubdivision} from '../../core/fakeapimiddleware'
export default {
  name: 'subdivision',
  props: ['countryid', 'subdivisionid'],
  data () {
    return {
      countryID: this.countryid
    }
  },
  computed: {
    computedSubdivision: function () {
      let subdivision = GetSubdivision(this.countryid, this.subdivisionid)
      if (subdivision === null) {
        return {name: '', code: ''}
      }
      return GetSubdivision(this.countryid, this.subdivisionid)
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
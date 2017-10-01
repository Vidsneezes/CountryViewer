<template>
  <div class="subdivision">
    <p>{{computedSubdivision.name}}</p>
    <router-link :to="{name:'SubdivisionsGrid'}">Back To Subdivisions</router-link>
  </div>
</template>
<script>
import {GetSubdivision} from '../core/fakeapimiddleware'
export default {
  name: 'subdivision',
  props: ['subdivisionid'],
  computed: {
    computedSubdivision: function () {
      return GetSubdivision(this.subdivisionid - 1)
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
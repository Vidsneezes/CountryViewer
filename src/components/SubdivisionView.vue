<template>
  <div class="subdivision">
    <p>{{name}}</p>
    <p>{{code}}</p>
    <router-link :to="{name:'SubdivisionsGrid'}">Back To Subdivisions</router-link>
  </div>
</template>
<script>
import {GetSubdivision} from '../core/fakeapimiddleware'

var subdivision = GetSubdivision()

export default {
  name: 'subdivision',
  data () {
    return {
      id: 1,
      name: subdivision.name,
      code: subdivision.code
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
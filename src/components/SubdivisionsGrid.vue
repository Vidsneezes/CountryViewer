<template>
  <div class="subdivisions">
    <ul id="subdivisions-list" >
        <li v-for="subdivision in subdivisions" :key="subdivision">
            <router-link :to="{name:'SubdivisionView'}">{{subdivision.name}}</router-link>
        </li>
    </ul>
  </div>
</template>
<script>
import {GetSubdivisions} from '../core/fakeapimiddleware'

var subdivisions = GetSubdivisions()

export default {
  name: 'subdivisions',
  data () {
    return {
      subdivisions: subdivisions
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
  color: #42b983;
}
</style>
<template>
  <div class="subdivisions">
    <ul id="subdivisions-list" >
        <li v-for="subdivision in subdivisions" :key="subdivision">
            <router-link :to="{name:'SubdivisionView'}">{{subdivision}}</router-link>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'subdivisions',
  data () {
    return {
      subdivisions: ['peten', 'mixco', 'quetzaltenango']
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
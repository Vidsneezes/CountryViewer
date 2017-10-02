<template>
  <div class="pagenotfound">
    <b-nav fill class="nav-bar">
      <b-nav-item :to="{name:'CountriesGrid'}">Countries</b-nav-item>
    </b-nav> 
    <p>404 error page not found</p>
  </div>
</template>
<script>
export default {
  name: 'pagenotfound'
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
</style>
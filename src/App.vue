<template>
  <b-container id="app" fluid fill>
    <b-nav fill class="nav-bar">
      <b-nav-item Active><b-link :to="{name:'CountriesGrid'}">Countries</b-link></b-nav-item>
    </b-nav>  
    <router-view></router-view>
  </b-container>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  margin: 0px;
  padding: 0px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.nav-bar{
  background: lightseagreen;
  padding-bottom: 40px;
}
.nav-bar a {
  color: white;
  
}
</style>

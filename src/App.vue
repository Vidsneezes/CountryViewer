<template>
  <b-container id="app" fluid fill>
   
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

</style>

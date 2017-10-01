<template>
  <div class="country">
    <p>{{name}}</p>
    <p>{{code}}</p>
    <router-link :to="{name:'CountryView'}">Back To Country</router-link>
  </div>
</template>
<script>
export default {
  name: 'country',
  data () {
    return {
      id: 1,
      name: 'Peten',
      code: 'Silve'
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
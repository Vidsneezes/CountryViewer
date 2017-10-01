<template>
  <div class="country">
    <input v-model="name" :placeholder='computedSubdivision.name' type="text"/>
    <input v-model="code" :placeholder='computedSubdivision.code' type="text"/>
    <button v-on:click='save'>Save</button>
    <router-link :to="{name:'SubdivisionsGrid'}">Back To Subdivisions</router-link>
  </div>
</template>
<script>
import {EditSubdivision, GetSubdivision} from '../../core/fakeapimiddleware'
export default {
  name: 'country',
  props: ['subdivisionid'],
  data () {
    return {
      name: '',
      code: ''
    }
  },
  methods: {
    save: function () {
      EditSubdivision(this.$data, this.subdivisionid - 1)
      this.$router.push({name: 'SubdivisionView', params: {subdivisionid: this.subdivisionid}})
    }
  },
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
<template>
  <div class="country">
    <input v-model="name" placeholder="Name" type="text"/>
    <input v-model="code" placeholder="Code" type="text"/>
    <button v-on:click='save'>Save</button>
    <button v-on:click='deleteSubdivision'>Delete</button>
    <router-link :to="{name:'SubdivisionsGrid', params:{countryid: country_id}}">Back To Subdivisions</router-link>
  </div>
</template>
<script>
import {EditSubdivision, GetSubdivision, DeleteSubdivision} from '../../core/fakeapimiddleware'
export default {
  name: 'country',
  props: ['countryid', 'subdivisionid'],
  data () {
    let subdivision = GetSubdivision(this.countryid, this.subdivisionid)
    return {
      name: subdivision.name,
      code: subdivision.code,
      country_id: this.countryid
    }
  },
  methods: {
    save: function () {
      EditSubdivision(this.$data, this.subdivisionid)
      this.$router.push({name: 'SubdivisionView', params: {subdivisionid: this.subdivisionid}})
    },
    deleteSubdivision: function () {
      DeleteSubdivision(this.subdivisionid)
      this.$router.push({name: 'SubdivisionsGrid'})
    }
  },
  computed: {
    computedSubdivision: function () {
      return GetSubdivision(this.subdivisionid)
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
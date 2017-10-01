<template>
  <div class="country">
    <b-nav fill class="nav-bar">
      <b-nav-item :to="{name:'SubdivisionsGrid', params:{countryid: country_id}}">Back To Subdivisions</b-nav-item>
    </b-nav> 
     <b-container class="country-entry-form" style="width: 280px;">
    <b-row class="country-entry">
      <b-col>
        Name: 
      </b-col>
      <b-col>
        <input v-model="name" placeholder="Name" type="text"/>
      </b-col>
    </b-row>
    <b-row class="country-entry">
      <b-col>
        Code:
      </b-col>
      <b-col>
        <input v-model="code" placeholder="Code" type="text"/>
      </b-col>
    </b-row>
    <b-button variant="primary" v-on:click='save'>Save</b-button>
     <b-btn variant="danger" v-b-modal.modalDelete>Delete</b-btn>
     </b-container>
     <b-modal id="modalDelete"
             ref="modal"
             title="Delete?"
             @ok="deleteSubdivision"
             >Are you sure you want to delete?
    </b-modal>
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
      EditSubdivision(this.countryid, this.$data, this.subdivisionid)
      this.$router.push({name: 'SubdivisionView', params: {countryid: this.countryid, subdivisionid: this.subdivisionid}})
    },
    deleteSubdivision: function () {
      DeleteSubdivision(this.countryid, this.subdivisionid)
      this.$router.push({name: 'SubdivisionsGrid', params: {countryid: this.countryid}})
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
.nav-bar{
  background: lightseagreen;
  padding-bottom: 15px;
  padding-top: 10px;
  
}
.nav-bar a {
  color: white;
}
.country-entry{
  margin-bottom: 20px;
  
}
.country-entry-form {
  margin-top: 30px;
}
</style>
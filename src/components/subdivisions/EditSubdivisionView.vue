<template>
  <div class="country">
    <b-nav fill class="nav-bar">
      <b-nav-item :to="{name:'SubdivisionsGrid', params:{countryid: country_id}}">Back To Subdivisions</b-nav-item>
    </b-nav> 

    <b-container v-if='loaded && !updating' class="country-entry-form" style="width: 280px;">
    <b-row class="country-entry">
      <b-col>
        Name: 
      </b-col>
      <b-col>
        <input v-model="subdivision.name" placeholder="Name" type="text"/>
      </b-col>
    </b-row>
    <b-row class="country-entry">
      <b-col>
        Code:
      </b-col>
      <b-col>
        <input v-model="subdivision.code" placeholder="Code" type="text"/>
      </b-col>
    </b-row>
    <b-button variant="primary" v-on:click='save'>Save</b-button>
     <b-btn variant="danger" v-b-modal.modalDelete>Delete</b-btn>
     </b-container>
     <div v-else>
       <p>Modifying...</p>
     </div>
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
    return {
      country_id: this.countryid,
      subdivision: {},
      updating: false,
      loaded: false
    }
  },
  methods: {
    save: function () {
      this.updating = true
      EditSubdivision(this.countryid, this.$data.subdivision, this.subdivisionid, (response) => {
        this.$router.push({name: 'SubdivisionView', params: {countryid: this.countryid, subdivisionid: this.subdivisionid}})
      }, (error) => {
        console.log(error)
      })
    },
    deleteSubdivision: function () {
      this.updating = true
      DeleteSubdivision(this.countryid, this.subdivisionid, (response) => {
        this.$router.push({name: 'SubdivisionsGrid', params: {countryid: this.countryid}})
      })
    }
  },
  mounted: function () {
    GetSubdivision(this.countryid, this.subdivisionid, (response) => {
      this.subdivision = response.data.data
      this.loaded = true
    })
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
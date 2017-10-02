<template>
  <div class="country">
    <b-nav fill class="nav-bar">
      <b-nav-item :to="{name:'SubdivisionsGrid', params:{countryid: subdivision.country_id}}">Back To Subdivisions</b-nav-item>
    </b-nav> 
    <b-container v-if="!saving" class="country-entry-form" style="width: 280px;">
      <b-row class="country-entry">
        <b-col>
          Name: 
        </b-col>
        <b-col>
          <input v-model="subdivision.name" placeholder="Country Name" type="text"/>
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
    <b-button variant="primary" v-on:click='addSubdivision'>Add Subdivision</b-button>
    </b-container>
    <div v-else>
      Saving...
    </div>
     <b-modal v-model="modalError" id="Error"
             ref="modal"
             title="There was an error"
              @ok="modalConfirm"
     >Make sure to include a *Name and *Code
    </b-modal>
  </div>
</template>
<script>
import {AddSubdivision} from '../../core/fakeapimiddleware'
export default {
  name: 'country',
  props: ['countryid'],
  data () {
    return {
      subdivision: {name: '',
        code: '',
        country_id: this.countryid
      },
      saving: false,
      lastIndex: 0,
      modalError: false
    }
  },
  methods: {
    addSubdivision: function () {
      this.saving = true
      AddSubdivision(this.countryid, this.$data.subdivision, (response) => {
        console.log(response)
        this.lastIndex = response.data.data.id
        this.$router.push({name: 'SubdivisionView', params: {countryid: this.countryid, subdivisionid: this.lastIndex}})
      }, (error) => {
        this.modalError = true
        console.log(error)
      })
    },
    modalConfirm: function () {
      this.saving = false
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
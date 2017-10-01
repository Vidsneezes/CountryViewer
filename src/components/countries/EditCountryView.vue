<template>
  <div class="country">
    <b-nav fill class="nav-bar">
      <b-nav-item :to="{name:'CountriesGrid'}">Back To Countries</b-nav-item>
    </b-nav> 
    <b-container class="country-entry-form" style="width: 280px;">
    <b-row class="country-entry">
      <b-col>
        Country:
      </b-col>
      <b-col> 
        <input v-model="name" placeholder="Country Name" type="text"/>
      </b-col>
    </b-row>
    <b-row class="country-entry">
      <b-col>
        Alpha2:
      </b-col>
      <b-col>
       <input v-model="alpha2" placeholder="alpha2" type="text" maxlength="2"/>
      </b-col>
    </b-row>
    <b-row class="country-entry">
      <b-col>
        Alpha3:
      </b-col>
      <b-col>
        <input v-model="alpha3" placeholder="alpha3" type="text" maxlength="3"/>
      </b-col>
    </b-row>
    <b-row class="country-entry">
      <b-col>
        Code:
      </b-col>
      <b-col>
        <input v-model="code" placeholder="code" type="text"/>
      </b-col>
    </b-row>
    <b-row class="country-entry">
      <b-col>
      Is Independent?
      </b-col>
      <b-col>
        <input v-model="isindependent" type="checkbox"/>
      </b-col>
    </b-row>
    <b-row class="country-entry">
      <b-col>
      Iso 3166 2: 
      </b-col>
      <b-col>
        <input v-model="iso31662" placeholder="Iso 3166 2" type="text"/>
      </b-col>
    </b-row>
     <b-row>
       <b-col>
      <b-button variant="primary" v-on:click='save'>Save</b-button>
       </b-col>
     </b-row>
      <b-btn variant="danger" v-b-modal.modalDelete>Delete</b-btn>
     </b-container>
     <b-modal id="modalDelete"
             ref="modal"
             title="Delete?"
             @ok="deleteCountry"
             >Are you sure you want to delete?
    </b-modal>
  </div>
</template>
<script>
import {GetCountry, EditCountry, DeleteCountry} from '../../core/fakeapimiddleware'
export default {
  name: 'country',
  props: ['countryid'],
  data () {
    let country = GetCountry(this.countryid)
    if (country === null) {
      country = {name: '', alpha2: '', alpha3: '', code: '', is_independent: 'false', iso_3166_2: ''}
    }
    return {
      name: country.name,
      alpha2: country.alpha2,
      alpha3: country.alpha3,
      code: country.code,
      isindependent: country.is_independent,
      iso31662: country.iso_3166_2
    }
  },
  methods: {
    save: function () {
      EditCountry(this.$data, this.countryid)
      this.$router.push({name: 'CountryView', params: {countryid: this.countryid}})
    },
    deleteCountry: function () {
      DeleteCountry(this.countryid)
      this.$router.push({name: 'CountriesGrid'})
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
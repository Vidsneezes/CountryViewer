<template>
  <div class="country">
    <b-nav fill tabs class="nav-bar">
      <b-nav-item  :to="{name:'CountriesGrid'}">Back To Countries</b-nav-item>
    </b-nav> 
    <b-container v-if='!saving' class="country-entry-form" style="width: 280px;">
    <b-row class="country-entry">
      <b-col>
        Country:
      </b-col>
      <b-col> 
        <input v-model="country.name" placeholder="Country Name" type="text"/>
      </b-col>
    </b-row>
    <b-row class="country-entry">
      <b-col>
        Alpha2:
      </b-col>
      <b-col>
       <input v-model="country.alpha2" placeholder="alpha2" type="text" maxlength="2"/>
      </b-col>
    </b-row>
    <b-row class="country-entry">
      <b-col>
        Alpha3:
      </b-col>
      <b-col>
        <input v-model="country.alpha3" placeholder="alpha3" type="text" maxlength="3"/>
      </b-col>
    </b-row>
    <b-row class="country-entry">
      <b-col>
        Code:
      </b-col>
      <b-col>
        <input v-model="country.code" placeholder="code" type="text"/>
      </b-col>
    </b-row>
    <b-row class="country-entry">
      <b-col>
      Is Independent?
      </b-col>
      <b-col>
        <input v-model="country.is_independent" type="checkbox"/>
      </b-col>
    </b-row>
    <b-row class="country-entry">
      <b-col>
      Iso 3166 2: 
      </b-col>
      <b-col>
        <input v-model="country.iso_3166_2" placeholder="Iso 3166 2" type="text"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
      <b-button variant="primary" v-on:click='addCountry'>Add Country</b-button>
      </b-col>
    </b-row>
    </b-container>
    <div v-else>
      <p>Saving..</p>
    </div>
   <b-modal v-model="modalError" id="Error"
             ref="modal"
             title="There was an error"
             @ok="modalConfirm"
     >Make sure to include a *Name and an *alpha2
    </b-modal>
  </div>
</template>
<script>
import {AddCountry} from '../../core/fakeapimiddleware'
export default {
  name: 'country',
  props: ['countryid'],
  data () {
    return {
      country: {name: '',
        alpha2: '',
        alpha3: '',
        code: '',
        'is_independent': false,
        'iso_3166_2': ''
      },
      lastIndex: 0,
      saving: false,
      modalError: false
    }
  },
  methods: {
    addCountry: function () {
      this.saving = true
      AddCountry(this.$data.country, (response) => {
        this.lastIndex = response.data.data.id
        this.$router.push({name: 'CountryView', params: {countryid: this.lastIndex}})
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
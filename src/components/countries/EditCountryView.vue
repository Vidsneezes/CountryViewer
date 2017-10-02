<template>
  <div class="country">
    <b-nav fill class="nav-bar">
      <b-nav-item :to="{name:'CountriesGrid'}">Back To Countries</b-nav-item>
    </b-nav> 
    <b-container v-if='loaded && !updating' class="country-entry-form" style="width: 280px;">
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
      <b-button variant="primary" v-on:click='save'>Save</b-button>
       </b-col>
     </b-row>
      <b-btn variant="danger" v-b-modal.modalDelete>Delete</b-btn>
     </b-container>
     <div v-else>
       <p>Modifying...</p>
     </div>
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
    return {
      country: {},
      loaded: false,
      updating: false
    }
  },
  methods: {
    save: function () {
      this.updating = true
      EditCountry(this.$data.country, this.countryid, (response) => {
        this.$router.push({name: 'CountryView', params: {countryid: this.countryid}})
      }, (error) => {
        console.log(error)
      })
    },
    deleteCountry: function () {
      this.updating = true
      DeleteCountry(this.countryid, (response) => {
        console.log('ok')
        this.$router.push({name: 'CountriesGrid'})
      })
    }
  },
  mounted: function () {
    GetCountry(this.countryid, (response) => {
      this.country = response.data.data
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
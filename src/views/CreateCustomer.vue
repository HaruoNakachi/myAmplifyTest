<template>
  <div id='app'>
    <div class="form-group">
      <label for="name">Customer Name</label>
      <input type="text"
            id="name"
            class="form-control"
            v-model="customer.name">
    </div>

    <div class="form-group">
      <label for="description">Customer Description</label>
      <input type="text"
            id="description"
            class="form-control"
            v-model="customer.description">
    </div>

    <button @click="createNewCustomer">Add Customer</button>
  </div>
</template>

<script>
import API, { graphqlOperation } from '@aws-amplify/api';
import { createCustomer } from '../graphql/mutations';

export default {
  name: 'createCustomer',
  data(){
    return {
      customer: {
        name: '',
        description: ''
      }
    }
  },
  methods:{
    async createNewCustomer(){
      await API.graphql(graphqlOperation(createCustomer, { input: this.customer })) 
    }
  }
}
</script>
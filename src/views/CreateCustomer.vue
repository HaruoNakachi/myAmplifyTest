<template>
  <div id='app'>
    <CustomerForm v-bind:customer="customer"/>
    <button @click="createNewCustomer">Add Customer</button>
  </div>
</template>

<script>
import API, { graphqlOperation } from '@aws-amplify/api';
import { createCustomer } from '../graphql/mutations';
import CustomerForm from '@/components/CustomerForm.vue'

export default {
  name: 'createCustomer',
  components: {
    CustomerForm
  },
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
<template>
  <div id='app'>
    <CustomerForm v-bind:customer="customer"/>
    <v-btn @click="createNewCustomer">Add Customer</v-btn>
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
        companyName: '',
        postalCode: '',
        address1: '',
        address2: '',
        position: '',
        recipient: '',
        invoiceNumber: '',
        memo: '',
      }
    }
  },
  methods:{
    async createNewCustomer(){
      try {
        console.log('TRY')
        await API.graphql(graphqlOperation(createCustomer, { input: this.customer }))
        this.$router.push('customers')
        console.log('Moved')
      } catch (e) {
        console.error('GraphQL Operation Failed: ', e)
        console.error(this.customer)
      }
    }
  }
}
</script>
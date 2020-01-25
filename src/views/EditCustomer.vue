<template>
  <div id='app'>
    <CustomerForm v-bind:customer="customer"/>
    <v-btn @click="saveCustomer">Save Customer</v-btn>
  </div>
</template>

<script>
import API, { graphqlOperation } from '@aws-amplify/api';
import { getCustomer } from '../graphql/queries';
import { updateCustomer } from '../graphql/mutations';
import CustomerForm from '@/components/CustomerForm.vue'

export default {
  name: 'customer',
  components: {
    CustomerForm
  },
  data(){
    return {
      customer: {
      }
    }
  },
  methods: {
    async getData(){
      const customerData = await API.graphql(graphqlOperation(getCustomer, { id: this.$route.params.id}))
      this.customer = customerData.data.getCustomer
    },
    async saveCustomer(){
      try {
        await API.graphql(graphqlOperation(updateCustomer, {
          input: {
            id: this.customer.id,
            companyName: this.customer.companyName,
            postalCode: this.customer.postalCode,
            address1: this.customer.address1,
            address2: this.customer.address2,
            position: this.customer.position,
            recipient: this.customer.recipient,
            invoiceNumber: this.customer.invoiceNumber,
            memo: this.customer.memo,
            to: this.customer.to,
            cc: this.customer.cc,
            mailName: this.customer.mailName,
          }
        }))
        this.$router.push('/customers/' + this.customer.id)
      } catch(e) {
        console.error('GraphQL Operation Failed: ', e)
        console.error(this.customer)
      }
    }
  },
  created(){
    this.getData()
  }
}
</script>


<template>
  <div id='app'>
    <CustomerForm v-bind:customer="customer"/>
    <v-btn color='dark' @click="editCustomer">Edit Customer</v-btn>
  </div>
</template>

<script>
import API, { graphqlOperation } from '@aws-amplify/api';
import { getCustomer } from '../graphql/queries';
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
    async editCustomer(){
      this.$router.push('/edit_customer/' + this.customer.id)
    }
  },
  created(){
    this.getData()
  }
}
</script>


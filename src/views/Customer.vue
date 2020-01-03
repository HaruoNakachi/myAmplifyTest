<template>
  <div id='app'>
    <CustomerForm v-bind:customer="customer"/>
    <v-btn @click="editCustomer">Edit Customer</v-btn>
    <v-btn @click="addBillingItem">Add Billing Item</v-btn>

    <ul>
      <li v-for="billingItem in billingItems" :key="billingItem.id">
        <ul>
          <li>
            {{billingItem.name}}
            <router-link :to="'/customers/' + billingItem.customerId + '/billingItems/' + billingItem.id"><v-btn>Detail</v-btn></router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import API, { graphqlOperation } from '@aws-amplify/api';
import { getCustomer, listBillingItems } from '../graphql/queries';
import CustomerForm from '@/components/CustomerForm.vue'

export default {
  name: 'customer',
  components: {
    CustomerForm
  },
  data(){
    return {
      customer: {
      },
      billingItems: []
    }
  },
  methods: {
    async getData(){
      const customerData = await API.graphql(graphqlOperation(getCustomer, { id: this.$route.params.id}))
      const billingItemsData = await API.graphql(graphqlOperation(listBillingItems))
      this.customer = customerData.data.getCustomer
      this.billingItems = billingItemsData.data.listBillingItems.items
    },
    editCustomer(){
      this.$router.push('/edit_customer/' + this.customer.id)
    },
    addBillingItem(){
      this.$router.push('/customers/' + this.customer.id +'/create_billing_item/')
    }
  },
  created(){
    this.getData()
  }
}
</script>


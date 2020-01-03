<template>
  <div id='app'>
    <BillingItemForm v-bind:billingItem="billingItem"/>
    <v-btn @click="createNewBillingItem">Create Billing Item</v-btn>
  </div>
</template>

<script>
import API, { graphqlOperation } from '@aws-amplify/api';
import { createBillingItem } from '../graphql/mutations';
import BillingItemForm from '@/components/BillingItemForm.vue'

export default {
  name: 'createBillingItem',
  components: {
    BillingItemForm
  },
  data(){
    return {
      billingItem: {
        customerId: this.$route.params.customerId,
        name: '',
        price: '',
        unit: '',
        quantity: '',
      }
    }
  },
  methods:{
    async createNewBillingItem(){
      try {
        await API.graphql(graphqlOperation(createBillingItem, { input: this.billingItem }))
        this.$router.push('/customer/' + this.billingItem.customerId)
      } catch (e) {
        console.error('GraphQL Operation Failed: ', e)
        console.error(this.billingItem)
      }
    }
  }
}
</script>

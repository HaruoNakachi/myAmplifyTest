<template>
  <div id='app'>
    <BillingItemForm v-bind:billingItem="billingItem"/>
    <v-btn @click="editBillingItem">Edit Billing Item</v-btn>
    <br>
    <v-btn @click="returnToCustomer">Return to Customer Detail</v-btn>
  </div>
</template>

<script>
import API, { graphqlOperation } from '@aws-amplify/api';
import { getBillingItem } from '../graphql/queries';
import BillingItemForm from '@/components/BillingItemForm.vue';

export default {
  name: 'billingItem',
  components: {
    BillingItemForm
  },
  data(){
    return {
      billingItem: {}
    }
  },
  methods: {
    async getData(){
      const billingItemData = await API.graphql(graphqlOperation(getBillingItem, { id: this.$route.params.billingItemId }))
      this.billingItem = billingItemData.data.getBillingItem
    },
    editBillingItem(){
      this.$router.push('/customers/' + this.billingItem.customerId + '/edit_billing_item/' + this.billingItem.id)
    },
    returnToCustomer(){
      this.$router.push('/customers/' + this.billingItem.customerId)
    }
  },
  created(){
    this.getData()
  }
}
</script>
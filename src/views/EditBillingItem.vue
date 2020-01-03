<template>
  <div id='app'>
    <BillingItemForm v-bind:billingItem="billingItem" />
    <v-btn @click="saveBillingItem">Save Billing Item</v-btn>
  </div>
</template>

<script>
import API, { graphqlOperation } from '@aws-amplify/api';
import { getBillingItem } from '../graphql/queries';
import { updateBillingItem } from '../graphql/mutations';
import BillingItemForm from '@/components/BillingItemForm.vue'

export default {
  name: 'editBillingItem',
  components: {
    BillingItemForm
  },
  data(){
    return {
      billingItem: {
      }
    }
  },
  methods: {
    async getData(){
      const billingItemData = await API.graphql(graphqlOperation(getBillingItem, { id: this.$route.params.billingItemId }))
      this.billingItem = billingItemData.data.getBillingItem
    },
    async saveBillingItem(){
      try {
        await API.graphql(graphqlOperation(updateBillingItem, {
          input: {
            id: this.billingItem.id,
            customerId: this.billingItem.customerId,
            name: this.billingItem.name,
            price: this.billingItem.price,
            unit: this.billingItem.unit,
            quantity: this.billingItem.quantity,
          }
        }))
        this.$router.push('/customers/' + this.billingItem.customerId + '/billing_items/' + this.billingItem.id)
      } catch(e) {
        console.error('GraphQL Operation Failed: ', e)
        console.error(this.billingItem)
      }
    },
  },
  created(){
    this.getData()
  }
}
</script>
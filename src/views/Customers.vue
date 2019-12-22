<template>
  <div id='app'>
    <router-link to="/create_customer"><button>Add Customer</button></router-link>
    <ul>
      <li v-for="customer in customers" :key="customer.id">
        <ul>
          <li>{{customer.id}}</li>
          <li>{{customer.name}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import API, { graphqlOperation } from '@aws-amplify/api';
import { listCustomers } from '../graphql/queries';

export default {
  name: 'customers',
  data(){
    return {
      customers: []
    }
  },
  methods :{
    async getData(){
      const customerData = await API.graphql(graphqlOperation(listCustomers))
      this.customers.push(...this.customers, ...customerData.data.listCustomers.items)
    }
  },
  created(){
    this.getData()
  }
}
</script>
<template>
  <div id='app'>
    <router-link to="/create_customer"><v-btn>Add Customer</v-btn></router-link>
    <ul>
      <li v-for="customer in customers" :key="customer.id">
        <ul>
          <li>
            {{customer.companyName}}
            <router-link :to="'/customers/' + customer.id"><v-btn>Detail</v-btn></router-link>
          </li>
        </ul>
      </li>
    </ul>
    <v-btn @click="genPdf">TEST</v-btn>
  </div>
</template>

<script>
import API, { graphqlOperation } from '@aws-amplify/api';
import { listCustomers } from '../graphql/queries';
import pdfMakeJa from "../plugins/pdfMakeJa";
import invoicePdfDefinitionBuilder from '../plugins/invoicePdfDefinitionBuilder';

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
    },
    genPdf(){
      console.log('genPdf start');
      const docDefinition = invoicePdfDefinitionBuilder.build()
      pdfMakeJa.createPdf(docDefinition).download()
    }
  },
  created(){
    this.getData()
  }
}
</script>
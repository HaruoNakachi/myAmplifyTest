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
    <v-btn @click="genPdf">TEST</v-btn>
  </div>
</template>

<script>
import API, { graphqlOperation } from '@aws-amplify/api';
import { listCustomers } from '../graphql/queries';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import pdfDefinitionBuilder from '../plugins/pdfmakeDefinitionBuilder';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
  GenShin: {
    normal: 'GenShinGothic-Normal-Sub.ttf',
    bold: 'GenShinGothic-Normal-Sub.ttf',
    italics: 'GenShinGothic-Normal-Sub.ttf',
    bolditalics: 'GenShinGothic-Normal-Sub.ttf',
  },
};

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
      const docDefinition = pdfDefinitionBuilder.build()
      pdfMake.createPdf(docDefinition).download()
    }
  },
  created(){
    this.getData()
  }
}
</script>
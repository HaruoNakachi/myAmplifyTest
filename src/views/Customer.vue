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
            <router-link :to="'/customers/' + billingItem.customerId + '/billing_items/' + billingItem.id"><v-btn>Detail</v-btn></router-link>
          </li>
        </ul>
      </li>
    </ul>
    <v-btn @click="genPdf">Generate Invoice PDF</v-btn>
    <v-btn @click="createDraftMail">Create Draft Mail</v-btn>
  </div>
</template>

<script>
import API, { graphqlOperation } from '@aws-amplify/api';
import { getCustomer } from '../graphql/queries';
import CustomerForm from '@/components/CustomerForm.vue';
import pdfMakeJa from "../plugins/pdfMakeJa";
import invoicePdfDefinitionBuilder from '../plugins/invoicePdfDefinitionBuilder';
const Base64 = require('js-base64').Base64;
const moment = require('moment');
moment.locale('ja');
const currentDate = moment();

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
      this.customer = customerData.data.getCustomer
      this.billingItems = customerData.data.getCustomer.billingItems.items
    },
    editCustomer(){
      this.$router.push('/edit_customer/' + this.customer.id)
    },
    addBillingItem(){
      this.$router.push('/customers/' + this.customer.id +'/create_billing_item/')
    },
    genPdf(){
      const docDefinition = invoicePdfDefinitionBuilder.build(this.customer, this.billingItems)
      pdfMakeJa.createPdf(docDefinition).download()
    },
    createDraftMail(){
      const currentYear = currentDate.year()
      const currentMonth = currentDate.month() + 1
      let messageParts = [
        'From: ビズアプリ製作所 仲地 <haruo.nakachi@biz-app.biz>',
        'To: <' + this.customer.to + '>'
      ]
      if (this.customer.cc == null || this.customer.cc.trim() == "") {
        messageParts = messageParts.concat(
          [
            'Cc: <' + this.customer.cc + '>'
          ]
        )
      }
      messageParts = messageParts.concat([
        'Content-Type: text/html; charset=utf-8',
        'Content-Transfer-Encoding: base64',
        'MIME-Version: 1.0',
        'Subject: =?UTF-8?B?' + Base64.encodeURI('【ビズアプリ製作所】ご請求書（' + currentYear + '年' + currentMonth + '月度）') + '?=',
        '',
        '<div>' + this.customer.companyName + '</div>',
        '<div>' + this.customer.mailName + '様</div>',
        '<div><br></div>',
        '<div>いつもお世話になっております。ビズアプリ製作所の仲地です。</div>',
        '<div><br></div>',
        '<div>表題の件につきまして、</div>',
        '<div>ご請求書を送付させて頂きます。</div>',
        '<div><br></div>',
        '<div>お手数をお掛けしますが、</div>',
        '<div>ご査収の上、記載のお振込先に' + currentDate.endOf('month').format("M月D日") + '（休日の場合は銀行翌営業日）までにお振込み頂くようお願い申し上げます。</div>',
        '<div><br></div>',
        '<div>□■──────────────────────────■□</div>',
        '<div>　　ビズアプリ製作所</div>',
        '<div>　　仲地 春雄 / Nakachi Haruo</div>',
        '<div>　　〒107-0062</div>',
        '<div>　　東京都港区南青山3-10-41</div>',
        '<div>　　ジュエル青山ビル202号（郵送のみ）</div>',
        '<div>　　Email: haruo.nakachi@biz-app.biz</div>',
        '<div>　　URL:  http://biz-app.biz</div>',
        '<div>□■──────────────────────────■□</div>',
      ]);
      const message = messageParts.join('\n');
      this.$gapi.getGapiClient()
        .then(gapi => {
          const request = gapi.client.gmail.users.drafts.create({
            'userId': 'me',
            'resource': {
              'message': {
                'raw': Base64.encodeURI(message)
              }
            }
          })
          request.execute(()=>{
            console.log('DRAFT MAIL CREATED')
          })
        })
    }
  },
  created(){
    this.getData()
  }
}
</script>

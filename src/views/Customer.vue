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
    <div class="button-row">
      <div><span>請求書関連</span></div>
      <v-btn @click="genPdf">請求書PDF生成</v-btn>
      <v-btn @click="createDraftMail">請求書PDF付きドラフトメール生成</v-btn>
    </div>
    <div class="button-row">
      <div><span>領収書関連</span></div>
      <v-btn @click="genReceiptPdf">領収書PDF生成</v-btn>
      <v-btn @click="createDraftReceiptMail">領収書PDF付きドラフトメール作成</v-btn>
    </div>

  </div>
</template>

<script>
import API, { graphqlOperation } from '@aws-amplify/api';
import { getCustomer } from '../graphql/queries';
import CustomerForm from '@/components/CustomerForm.vue';
import pdfMakeJa from "../plugins/pdfMakeJa";
import invoicePdfDefinitionBuilder from '../plugins/invoicePdfDefinitionBuilder';
import receiptPdfDefinitionBuilder from '../plugins/receiptPdfDefinitionBuilder';
const Base64 = require('js-base64').Base64;
const moment = require('moment');
moment.locale('ja');
const currentDate = moment();
const endOfMonthDate = moment().endOf('month');

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
    genReceiptPdf(){
      const docDefinition = receiptPdfDefinitionBuilder.build(this.customer, this.billingItems)
      pdfMakeJa.createPdf(docDefinition).download()
    },
    async createDraftMail(){
      const nl = "\r\n";
      const boundary = "__ctrlq_dot_org__";
      const currentYear = currentDate.year()
      const currentMonth = currentDate.month() + 1
      let messageParts = [
        "MIME-Version: 1.0",
        'From: ビズアプリ製作所 仲地 <haruo.nakachi@biz-app.biz>',
        'To: <' + this.customer.to + '>'
      ]
      if (this.customer.cc != null && this.customer.cc.trim() != "") {
        messageParts = messageParts.concat(
          [
            'Cc: <' + this.customer.cc + '>'
          ]
        )
      }
      const mailContent = [
        '<div>' + this.customer.companyName + '</div>',
        '<div>' + this.customer.mailName + '様</div>',
        '<div><br></div>',
        '<div>いつもお世話になっております。ビズアプリ製作所の仲地です。</div>',
        '<div><br></div>',
        '<div>表題の件につきまして、</div>',
        '<div>ご請求書を送付させて頂きます。</div>',
        '<div><br></div>',
        '<div>お手数をお掛けしますが、</div>',
        '<div>ご査収の上、記載のお振込先に' + endOfMonthDate.format("M月D日") + '（休日の場合は銀行翌営業日）までにお振込み頂くようお願い申し上げます。</div>',
        '<div><br></div>',
        '<div>□■──────────────────────────■□</div>',
        '<div>　　ビズアプリ製作所</div>',
        '<div>　　仲地 春雄 / Nakachi Haruo</div>',
        '<div>　　〒161-0033</div>',
        '<div>　　東京都新宿区下落合2－5－3</div>',
        '<div>　　千成ビル203</div>',
        '<div>　　Email: haruo.nakachi@biz-app.biz</div>',
        '<div>　　URL:  https://biz-app.biz</div>',
        '<div>□■──────────────────────────■□</div>',
        '<div><br></div>',
      ].join('\n');

      const docDefinition = invoicePdfDefinitionBuilder.build(this.customer, this.billingItems)
      pdfMakeJa.createPdf(docDefinition).getBase64((convertedContent) => {
        console.log('PDF GENERATED')

        messageParts = messageParts.concat([
          'Subject: =?UTF-8?B?' + Base64.encodeURI('【ビズアプリ製作所】ご請求書（' + currentYear + '年' + currentMonth + '月度）') + '?=',
          "Content-Type: multipart/alternate; boundary=" + boundary + nl,

          "--" + boundary,
          "Content-Type: text/html; charset=UTF-8",
          "Content-Transfer-Encoding: base64" ,
          mailContent + nl,

          "--" + boundary,
          "Content-Type: application/pdf; name=" + this.customer.companyName + "様_ご請求書_" + currentDate.format("YYYY_MD") + '.pdf',
          "Content-Disposition: attachment; filename=" + this.customer.companyName + "様_ご請求書_" + currentDate.format("YYYY_MD") + '.pdf',
          "Content-Transfer-Encoding: base64" + nl,
          convertedContent + nl,

          "--" + boundary + "--" + nl,
        ])
        console.log(messageParts)

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
            request.execute((response)=>{
              console.log('DRAFT MAIL CREATED')
              console.log(response)
            })
          })

        return convertedContent;
      })
    },
    async createDraftReceiptMail(){
      const nl = "\r\n";
      const boundary = "__ctrlq_dot_org__";
      const currentYear = currentDate.year()
      const currentMonth = currentDate.month() + 1
      let messageParts = [
        "MIME-Version: 1.0",
        'From: ビズアプリ製作所 仲地 <haruo.nakachi@biz-app.biz>',
        'To: <' + this.customer.to + '>'
      ]
      if (this.customer.cc != null && this.customer.cc.trim() != "") {
        messageParts = messageParts.concat(
          [
            'Cc: <' + this.customer.cc + '>'
          ]
        )
      }
      const mailContent = [
        '<div>' + this.customer.companyName + '</div>',
        '<div>' + this.customer.mailName + '様</div>',
        '<div><br></div>',
        '<div>いつもお世話になっております。ビズアプリ製作所の仲地です。</div>',
        '<div><br></div>',
        '<div>表題の件につきまして、</div>',
        '<div>領収書を送付させて頂きます。</div>',
        '<div><br></div>',
        '<div>お手数をお掛けしますが、</div>',
        '<div>ご確認をお願い致します。</div>',
        '<div><br></div>',
        '<div>□■──────────────────────────■□</div>',
        '<div>　　ビズアプリ製作所</div>',
        '<div>　　仲地 春雄 / Nakachi Haruo</div>',
        '<div>　　〒161-0033</div>',
        '<div>　　東京都新宿区下落合2－5－3</div>',
        '<div>　　千成ビル203</div>',
        '<div>　　Email: haruo.nakachi@biz-app.biz</div>',
        '<div>　　URL:  https://biz-app.biz</div>',
        '<div>□■──────────────────────────■□</div>',
        '<div><br></div>',
      ].join('\n');

      const docDefinition = receiptPdfDefinitionBuilder.build(this.customer, this.billingItems)
      pdfMakeJa.createPdf(docDefinition).getBase64((convertedContent) => {
        console.log('PDF GENERATED')

        messageParts = messageParts.concat([
          'Subject: =?UTF-8?B?' + Base64.encodeURI('【ビズアプリ製作所】領書（' + currentYear + '年' + currentMonth + '月度）') + '?=',
          "Content-Type: multipart/alternate; boundary=" + boundary + nl,

          "--" + boundary,
          "Content-Type: text/html; charset=UTF-8",
          "Content-Transfer-Encoding: base64" ,
          mailContent + nl,

          "--" + boundary,
          "Content-Type: application/pdf; name=" + this.customer.companyName + "様_領収書_" + currentDate.format("YYYY_MD") + '.pdf',
          "Content-Disposition: attachment; filename=" + this.customer.companyName + "様_領収書_" + currentDate.format("YYYY_MD") + '.pdf',
          "Content-Transfer-Encoding: base64" + nl,
          convertedContent + nl,

          "--" + boundary + "--" + nl,
        ])
        console.log(messageParts)

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
            request.execute((response)=>{
              console.log('DRAFT MAIL CREATED')
              console.log(response)
              alert('メールのタイトルは『領収書』の文字を入れて下さい。')
            })
          })

        return convertedContent;
      })
    },
  },
  created(){
    this.getData()
  }
}
</script>

<style scoped>
.button-row {
  width: 80%;
  max-width: 500px;
  border: 1px solid #b1b1b1;
  padding: 5px 0;
  margin: 0 auto;
}
.button-row button {
  margin: 5px;
}
</style>
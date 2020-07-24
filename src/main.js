import Vue from 'vue'
import App from './App.vue'

import API from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import awsconfig from './aws-exports';
import router from './router'
import vuetify from './plugins/vuetify';
import VueGAPI from "vue-gapi";

API.configure(awsconfig);
PubSub.configure(awsconfig);

Vue.config.productionTip = false

const apiConfig = {
  // devs
  apiKey: "AIzaSyA_dt24x3ReUF2jlrdMbNNlwgco6S0nrXo",
  clientId: "643015492832-rk2jnn4f8rn3dfpckl770r1a55lh9ojl.apps.googleusercontent.com",
  // stg
  // apiKey: "AIzaSyA_dt24x3ReUF2jlrdMbNNlwgco6S0nrXo",
  // clientId: "643015492832-o1r06neifpkc6hv2bt208cv6nhlf8388.apps.googleusercontent.com",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"],
  scope: "https://www.googleapis.com/auth/gmail.compose"
  // see all available scopes here: https://developers.google.com/identity/protocols/googlescopes'
};
Vue.use(VueGAPI, apiConfig);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')


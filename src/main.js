import Vue from 'vue'
import App from './App.vue'

import StartApp from './components/StartApp.vue'
import QuestionApp from './components/QuestionApp.vue'
import MessageApp from './components/MessageApp.vue'

Vue.component('StartApp',StartApp);
Vue.component('QuestionApp',QuestionApp);
Vue.component('MessageApp',MessageApp);

new Vue({
  el: '#app',
  render: h => h(App)
})

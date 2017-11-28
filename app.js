// var Vue = require('vue')
// var Vue = require('vue/dist/vue.js');
// var hello = require('vue!./components/hello.vue')
// var hello = require('vue-loader!./components/hello.vue');﻿

import Vue from './node_modules/vue/dist/vue.js'
import hello from './components/hello.vue'

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(hello),
    components: {
        hello: hello
    }
})
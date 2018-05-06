import Vue from 'vue'

// As a plugin
const VueInputMask = require('vue-inputmask').default
Vue.use(VueInputMask)


var app = new Vue({
      el: '#app',
      data: {
        d1: '0',
        message: 'Hello Vue!'
      }
    })
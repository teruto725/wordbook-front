import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "./router";
import store from '@/store';
import axios from 'axios'

Vue.config.productionTip = false

// 1. グローバル変数を定義する
let GlobalData = new Vue({
  data: {
    $is_logined: false, // グローバル変数
  }
});

// 2. mixin でグローバル変数をラッピングする
Vue.mixin({
  methods: {
    // 2-1. 各コンポーネント内の<script>タグ内でグローバル変数を参照するための関数
    $_is_logined(){
      return GlobalData.$data.$is_logined
    },
    $_setIsLogined(newIsLogined){
      GlobalData.$data.$is_logined = newIsLogined;
    },
  },
  computed: {
    // 2-2. 各コンポーネント内の<template>タグ内でグローバル変数を参照するための処置
    $is_logined: {
      get: function () { return GlobalData.$data.$is_logined },
      set: function (newIsLogined) { GlobalData.$data.$is_logined = newIsLogined; }
    }
  }
})





new Vue({
  vuetify,
  router,
  store,
  axios,
  render: h => h(App),

}).$mount('#app')

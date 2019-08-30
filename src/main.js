import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from "./api"
import alert from "../tools/alert"

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$alert = alert

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
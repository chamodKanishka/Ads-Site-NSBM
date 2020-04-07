import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'foundation-sites';
import 'foundation-sites/dist/css/foundation.css';
import 'foundation';
import 'script-loader!jquery/dist/jquery.min'
import 'script-loader!foundation-sites/dist/js/foundation.min'
import 'jquery';
import VueSwal from 'vue-swal'
import 'vue-slider-component/theme/antd.css'
import './registerServiceWorker'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueSwal)

Vue.use(router)
Vue.use(VueMaterial)


Vue.config.productionTip = false



new Vue({
    el: '#app',
    router,
    component: { App },
    template: '<App>',
  render: h => h(App),
}).$mount('#app')


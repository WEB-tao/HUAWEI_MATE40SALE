import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'


// ajax
axios.defaults.baseURL = 'http://127.0.0.1'
Vue.prototype.axios = axios;
Vue.config.productionTip = false


//导入mintui所有组件
import MintUI from 'mint-ui';
//导入mintui的样式文件
import 'mint-ui/lib/style.min.css';
//通过Vue.use()方法将Mint UI注册为Vue的插件
Vue.use(MintUI);


//让页头变成组件
// import Header from './components/Header'
// Vue.component("Mete-herder",Header);

// 让页脚变成组件
import Footer from "./components/Footer" 
Vue.component("Mete-footer",Footer);

// 让轮播图变成HOME的组件
// import Slideshow from "./components/home/Slideshow" 
// Vue.component("Mete-slideshow",Slideshow);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

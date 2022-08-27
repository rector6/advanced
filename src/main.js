import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import { Vue } from "vue";
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

createApp(App).use(store).use(router).mount("#app");

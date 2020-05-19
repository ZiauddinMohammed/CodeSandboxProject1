import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";
import Details from "./components/Details.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const Error = {
  template: "<template><h2>Something is not right</h2></template>"
};

const router = new VueRouter({
  routes: [
    { path: "/", component: HelloWorld },
    {
      path: "/Details/:SportName",
      component: Details,
      props: true
    },
    { path: "*", component: Error }
  ],
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

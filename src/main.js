import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";
import VueFirestore from "vue-firestore";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueResource, VueFirestore);

// handling updating metadata
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    el => el.parentNode.removeChild(el)
  );
  if (!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement("meta");
      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
    });
      tag.setAttribute("data-vue-router-controlled", "");
      return tag;
   })
    .forEach(tag => document.head.appendChild(tag));
  next();
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

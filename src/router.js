import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Aaron McGuire Front End Website Developer | Stockport Based",
        metaTags: [
          {
            name: " description ",
            content: " Test "
          }
        ]
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/work",
      name: "work",
      component: () => import(/* webpackChunkName: "work" */ "./views/Work.vue")
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import(/* webpackChunkName: "blog" */ "./views/Blog.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "contact" */ "./views/Contact.vue")
    },
    {
      path: "/blog/:post",
      name: "post",
      component: () => import(/*webpackChunkName: "post" */ "./views/Post.vue")
    }
  ]
});

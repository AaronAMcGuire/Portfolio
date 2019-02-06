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
            content: "  "
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
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
        meta: {
          title: "About Aaron McGuire | Front End Website Developer From Stockport ",
          metaTags: [
            {
              name: " description ",
              content: "  "
            }
          ]
        }
    },
    {
      path: "/work",
      name: "work",
      component: () => import(/* webpackChunkName: "work" */ "./views/Work.vue"),
      meta: {
        title: "Aarons Latest Projects | Front End Website Developer From Stockport ",
        metaTags: [
          {
            name: " description ",
            content: "  "
          }
        ]
      }
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import(/* webpackChunkName: "blog" */ "./views/Blog.vue"),
      meta: {
        title: "All of Aarons latest articles | Front End Website Developer From Stockport ",
        metaTags: [
          {
            name: " description ",
            content: "  "
          }
        ]
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "contact" */ "./views/Contact.vue"),
        meta: {
          title: "Get in contact with Aaron | Front End Website Developer From Stockport ",
          metaTags: [
            {
              name: " description ",
              content: "  "
            }
          ]
        }
    },
    {
      path: "/blog/:post",
      name: "post",
      component: () => import(/*webpackChunkName: "post" */ "./views/Post.vue")
      
    }
  ]
});

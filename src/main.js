import Vue from 'vue'
// import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'

import Brands from './views/Brands.vue'
import Contacts from './views/Contacts.vue'
import Projects from './views/Projects.vue'
import Blog from './views/Blog.vue'
import Post from './views/Post.vue'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/brands', component: Brands },
    { path: '/contacts', component: Contacts },
    { path: '/projects', component: Projects },
    { path: '/blog', component: Blog },
    { path: '/post/:id', name: 'post', component: Post }
  ]
})
new Vue({
  el: '#app',
  router: router
})
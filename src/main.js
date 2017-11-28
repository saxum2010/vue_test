import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)

new Vue({
  el: '#app',
  	data: {
        endpoint: 'https://jsonplaceholder.typicode.com/posts',
        posts: [],
        post: {}
    },
 	computed: {
        resource: function() {
            return this.$resource('https://jsonplaceholder.typicode.com/posts{/id}')
        }
    },
	methods: {
		savePost: function() {

            this.resource.save(this.post)

        },
        getSinglePost: function(post_id) {

            this.resource.get({ id: post_id }).then(function(response) {

                this.post = response.data

            })

        },
		 getAllPosts: function() {

            var options = {
                params: {
                    _start: 10,
                    _limit: 5
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            // this.$http.get(this.endpoint, options).then(function(response) {
            this.resource.get().then(function(response) {
                this.posts = response.data

            }, function(error) {
                // ошибка
            })

        }
	},
    created: function() {
        this.getSinglePost(100)
        this.getAllPosts()
    }
  // render: h => h(App)
})

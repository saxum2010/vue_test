var Vue = require('vue')
var hello = require('./components/hello.vue')

new Vue({
	el : '#app',
	render: h => h(hello),
	components:{
		hello: hello
	}
})
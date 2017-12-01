<template>
  <div class="alert alert-secondary">
    <h3>Are you ready?</h3>
    <button class="btn btn-success" @click="$emit('onStart')">Start</button>
    <button class="btn btn-success" @click="test()">test</button>
  </div>
</template>

<script>
export default {
	methods:{
		test: function(){
			console.log('test');
		}
	}
}
</script>

<style scoped>

</style>

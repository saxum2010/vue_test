<template>
  <div class="alert alert-secondary" :class="'alert-'+ type">
	<h2>{{ text }}</h2>
	<hr>
	<button class="btn" @click="$emit('onNext')">Continue</button>
  </div>
</template>

<script>
export default {
	props:['type','text']
}
</script>

<style scoped>

</style>

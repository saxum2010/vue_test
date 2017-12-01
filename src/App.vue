<template>
  <div>
  <h1>Training</h1>
  <hr>
  <start-app
    v-if="state == 'start'"
    @onStart="onStart"
  >
  </start-app>
  <question-app
    v-else-if="state == 'question'"
    @success="onQuestionSuccess"
    @error="onQuestionError"
  >
  </question-app>
  <message-app
    v-else-if="state == 'message'"
    @onNext="onNext"
    :type="message.type"
    :text="message.text"
  >
  </message-app>
  <div v-else>Error</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      state: 'start',
      message:{
        type : '',
        text : ''
      }
    }
  },
  methods: {
    onStart(){
      this.state = 'question';
    },
    onQuestionSuccess(){
      this.state = 'message';
      this.message.text = 'Good job!';
      this.message.type = 'success';
    },
    onQuestionError(msg){
      this.state = 'message';
      this.message.text = msg;
      this.message.type = 'warning';
    },
    onNext(){
       this.state = 'question';
    }
  }
}
</script>

<style scoped>
</style>

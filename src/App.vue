<template>
  <div class="training">
  <h1>Training Level {{ level + 1}}</h1>
  <hr>
  <div class="progress">
    <div class="progress-bar" :style="progressStyles"></div>
  </div>
    <div class="box">
      <transition name="flip" mode="out-in">
    <start-app
      v-if="state == 'start'"
      @onStart="onStart"
    >
    </start-app>
    <question-app
      v-else-if="state == 'question'"
      @success="onQuestionSuccess"
      @error="onQuestionError"
      :settings="levels[level]"
    >
    </question-app>
    <message-app
      v-else-if="state == 'message'"
      @onNext="onNext"
      :type="message.type"
      :text="message.text"
    >
    </message-app>
    <result-app
      v-else-if="state == 'result'"
      :stats="stats"
      @repeat="onStart"
      @nextLevel="onNextLevel"
    >
    </result-app>
    <div v-else>Error</div>
    </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      state: 'start',
      stats:{
        success:0,
        error:0
      },
      message:{
        type : '',
        text : ''
      },
      questMax : 3,
      level:0,
      levels:[
         {
          from:10,
          to:40,
          range:5,
          varians:2
        },
        {
          from:100,
          to:200,
          range:20,
          varians:4
        },
        {
          from:500,
          to:900,
          range:40,
          varians:6
        }
      ]
    }
  },
  computed: {
      questDone(){
        return this.stats.success + this.stats.error;
      },
      progressStyles(){
        return{
          width: (this.questDone / this.questMax * 100) + '%'
        };
      }
  },
  methods: {
    onStart(){
      this.state = 'question';
      this.stats.success=0;
      this.stats.error=0;
    },
    onQuestionSuccess(){
      this.state = 'message';
      this.message.text = 'Good job!';
      this.message.type = 'success';
      this.stats.success++;
    },
    onQuestionError(msg){
      this.state = 'message';
      this.message.text = msg;
      this.message.type = 'warning';
      this.stats.error++;
    },
    onNext(){
      if(this.questDone < this.questMax){
       this.state = 'question';
      }else{
       this.state = 'result';
      }
    },
    onNextLevel(){
      this.level++;
      this.onStart();
    }
  }
}
</script>

<style scoped>
.box{
  margin: 10px 0;
}

.progress-bar{
  transition:  width 0.5s;
}

.trainig{
  max-width: 700px;
  margin: 20px auto;
}

.flip-enter{
}

.flip-enter-active{
    animation: flipInX 0.3s linear;
}

.flip-leave{
}

.flip-leave-active{
    animation: flipOutX 0.3s linear;
}

@keyframe flipInX{
  from{transform : rotateX(90deg);}
  to{transform : rotateX(0deg);}
}

@keyframe flipOutX{
  from{transform : rotateX(0deg);}
  to{transform : rotateX(90deg);}
}

</style>

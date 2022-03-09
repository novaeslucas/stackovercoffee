<script setup>
import HeaderPage from '../components/HeaderPage.vue';
import Tags from '../components/Tags.vue';
import { useRoute } from 'vue-router';
import QuestaoContent from '../components/QuestaoContent.vue';
import QuestaoAnswers from '../components/QuestaoAnswers.vue';

const route = useRoute();  
const id = route.params.id;

</script>

<template>
  <HeaderPage :tittle="String(question.titulo)"/>
  <QuestaoContent :question="question"/>
  <div class="row border-bottom mb-2">
    <div class="col-md-12">
      <h1 class="h4">{{ question.respostas.length }} respostas</h1>
    </div>
  </div>
  <QuestaoAnswers :respostas="question.respostas"/>
</template>

<script>
  export default {
    name: "questao",
	  data() {
      return {
        question: Object,
      }
    },
    created() {
      fetch("/api/questao/" + this.id)
        .then((res) => res.json())
        .then((json) => {
          this.question = json.question
        })
    },
    
  }

</script>
<script setup>
import HeaderPage from '../components/HeaderPage.vue';
import Tags from '../components/Tags.vue';
import { useRoute } from 'vue-router';
import QuestaoContent from '../components/QuestaoContent.vue';
import QuestaoAnswers from '../components/QuestaoAnswers.vue';
import QtdAnswers from '../components/QtdAnswers.vue';

const route = useRoute();  
const id = route.params.id;

</script>

<template>
  <div v-if="question.id > 0">
    <HeaderPage :tittle="String(question.titulo)"/>
    <QuestaoContent :question="question"/>
    <QtdAnswers :qtd="qtdAnswers"/>
    <QuestaoAnswers :respostas="respostas"/>
  </div>
  <div v-else>
    <p>Carregando...</p>
  </div>
  
</template>

<script>
  export default {
    name: "questao",
	  data() {
      return {
        question: Object,
        qtdAnswers: String,
        respostas: [],
      }
    },
    mounted() {
      fetch("/api/questao/" + this.id)
        .then(res => res.json())
        .then(json => {
          this.question = json.question
          this.qtdAnswers = String(json.question.respostas.length)
          this.respostas = json.question.respostas
        })
    },
    
  }

</script>
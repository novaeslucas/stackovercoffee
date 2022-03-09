<script setup>
import HeaderPage from '../components/HeaderPage.vue';
import Tags from '../components/Tags.vue';
import { useRoute } from 'vue-router';

const route = useRoute();  
const id = route.params.id;

</script>

<template>
  <HeaderPage :tittle="String(question.titulo)"/>
  <div class="row border-bottom mb-2">
    <div class="row mb-2">
      <div class="col-md-1 border-sidebar-right">

      </div>
      <div class="col-md-11">
        <div>
          {{question.conteudo}}
        </div>
      </div>
    </div>
    <div class="row mb-2">
      <div class="col-md-11 offset-md-1">
        <Tags :tags="question.tags" :badge_color="String('badge-secondary')"/>
      </div>
    </div>
  </div>
  <div class="row border-bottom mb-2">
    <div class="col-md-12">
      <h1 class="h4">{{ question.respostas.length }} respostas</h1>
    </div>
  </div>
  <div class="row border-bottom mb-2 pb-2" v-for="resposta in question.respostas" v-bind:key="resposta.id">
    <div class="col-md-1 border-sidebar-right">

      </div>
      <div class="col-md-11">
        <div>
          {{resposta.conteudo}}
        </div>
      </div>
  </div>
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
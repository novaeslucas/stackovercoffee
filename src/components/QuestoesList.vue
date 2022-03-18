<script setup>
import Tags from './Tags.vue';
</script>
<template>
  <div v-if="questions.length">
    <div class="card text-white bg-secondary mb-3" v-for="question in questions" v-bind:key="question.id">
      <div class="card-body">
        <div class="row">
          <div class="col-md-2 card-indicadores text-right">
              <div class="row">
              <div class="col-md-12" >{{ question.votos }} votos</div>
              </div>
              <div class="row">
              <div class="col-md-12" >{{ question.respostas.length }} respostas</div>
              </div>
              <div class="row">
              <div class="col-md-12" >{{ question.visualizacoes }} views</div>
              </div>
          </div>
          <div class="col-md-10">
            <div class="row">
              <div class="col-md-12 pb-2 pt-2">
                  <router-link :to="{ name: 'questao', params: { id: question.id } }" class="text-white">{{ question.titulo }}</router-link>
              </div>
            </div>
            <div class="row pb-2 pt-2">
              <div class="col-md-8">
                <Tags :tags="question.tags" :badge_color="String('badge-light')"/>
              </div>
              <div class="col-md-4 text-right font-size-80">
                {{ question.usuario.login }} | {{ $filters.formatarData(question.data) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Carregando...</p>
  </div>
    
</template>

<script>
  export default {
    name: "questoesList",

    data() {
      return {
        questions: [],
      }
    },

    mounted() {
      fetch("/api/questoes")
        .then(res => res.json())
        .then(json => {
          this.questions = json.questions
        })
    },

  }
</script>

<style scoped>
@import '../assets/base.css';
@import 'bootstrap/dist/css/bootstrap.css';

.card-indicadores {
  border-right: solid 1px lightgrey;
}

.text-right{
  text-align: right;
}

.font-size-80 {
  font-size: 80%;
}
</style>

<script setup>
import Tags from './Tags.vue';
</script>
<template>
  <div class="card text-white bg-secondary mb-3" v-for="question in questions" v-bind:key="question.id">
    <div class="card-body">
        <div class="row">
          <div class="col-md-2 card-indicadores text-right">
              <div class="row">
              <div class="col-md-12" >{{ question.votos }} votos</div>
              </div>
              <div class="row">
              <div class="col-md-12" >{{ question.respostas }} respostas</div>
              </div>
              <div class="row">
              <div class="col-md-12" >{{ question.visualizacoes }} views</div>
              </div>
          </div>
          <div class="col-md-10">
              <div class="row">
                <div class="col-md-12">
                    {{ question.pergunta }}
                </div>
              </div>
              <Tags :tags="question.tags"/>
          </div>
        </div>
    </div>
    </div>
</template>

<script>
  export default {
    name: "questoesHome",

    data() {
      return {
        questions: [],
      }
    },

    created() {
      fetch("/api/questoes")
        .then((res) => res.json())
        .then((json) => {
          this.questions = json.questions
        })
    },

  }
</script>

<style scoped>
.card-indicadores {
  border-right: solid 1px lightgrey;
  text-align: right;
}
</style>

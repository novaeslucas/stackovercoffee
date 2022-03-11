<script setup>
import CardUser from './CardUser.vue';
import VoteControls from './VoteControls.vue';
</script>

<template>
    <div class="row border-bottom mb-2 pb-2" v-for="resposta in respostas" v-bind:key="resposta.id">
        <div class="col-md-12">
          <div class="row mb-2">
            <div class="col-md-1 border-sidebar-right">
              <VoteControls/>
            </div>
            <div class="col-md-11 pb-3 pt-3">
                <div>
                {{resposta.conteudo}}
                </div>
            </div>
          </div>
          <CardUser :login="resposta.usuario.login" :data_criacao="$filters.formatarDataHora(resposta.data)"/>   
        </div>
    </div>
</template>

<script>
export default {
    name: "questaoAnswers",
    props: {
      respostas: {
        type: Array,
        required: true,
      },
    },
}
</script>
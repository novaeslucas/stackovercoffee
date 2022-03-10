<template>
    <div class="row border-bottom mb-2 pb-2" v-for="resposta in respostas" v-bind:key="resposta.id">
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
    name: "questaoAnswers",
    props: {
      respostas: {
        type: Array,
        required: true,
      },
    }
}
</script>
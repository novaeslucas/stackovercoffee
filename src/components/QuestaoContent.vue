<script setup>
import Tags from './/Tags.vue';
import CardUser from './CardUser.vue';
</script>

<template>
    <div class="row border-bottom mb-2">
        <div class="row mb-2">
            <div class="col-md-1 border-sidebar-right">

            </div>
            <div class="col-md-11 pb-3 pt-3">
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
        <CardUser :login="question.usuario.login" :data_criacao="$filters.formatarDataHora(question.data)"/>
    </div>
</template>

<script>
export default {
    name: "questaoContent",
    props: {
      question: {
        type: Object,
        required: true,
      },
    },
}
</script>

<template>
    <div class="row border-bottom mb-2">
        <div class="col-md-12">
        <h1 class="h4">{{ qtd }} respostas</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "qtdAnswers",
    props: {
      qtd: {
        type: String,
        required: true,
      },
    }
}
</script>
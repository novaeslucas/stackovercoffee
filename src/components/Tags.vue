<template>
    <span class="badge badge-light" v-for="tag in tags" v-bind:key="tag.id">
        {{ tag.descricao }}
    </span>
</template>

<script>
  export default {
    name: "tags",
    props: {
      tags: {
        type: [Array, Object],
        required: false,
      },
    },
  }
</script>

<style scoped>

</style>
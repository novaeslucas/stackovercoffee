<template>
    <span :class="['badge', badge_color]" v-for="tag in tags" v-bind:key="tag.id">
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
      badge_color: {
        type: String,
        required: true,
      }
    },
  }
</script>

<style scoped>

</style>
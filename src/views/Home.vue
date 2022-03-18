<script setup>
import QuestoesList from './../components/QuestoesList.vue'
import HeaderPage from '../components/HeaderPage.vue';
</script>

<template>
  
  <HeaderPage :tittle="this.tittleHeader"/>
  <QuestoesList/>
        
</template>

<script>
  export default {
    name: "home",
  }

  const tittleHeader = "Página principal";
</script>
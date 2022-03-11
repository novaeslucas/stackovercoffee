<script setup>
import QuestoesHome from './../components/QuestoesHome.vue'
import HeaderPage from '../components/HeaderPage.vue';
</script>

<template>
  
  <HeaderPage :tittle="this.tittleHeader"/>
  <QuestoesHome/>
        
</template>

<script>
  export default {
    name: "home",
  }

  const tittleHeader = "Página principal";
</script>
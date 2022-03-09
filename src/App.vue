<script setup>
import Header from './components/Header.vue';
</script>

<template>

  <Header/>

  <main>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block sidebar border-sidebar-right" style="height: calc(100vh - 4rem);">

        </nav>
        <div class="col-md-8 col-lg-8 pt-3 px-4">
          <router-view/>
        </div>
        <nav class="col-md-2 d-none d-md-block sidebar border-sidebar-left" style="height: calc(100vh - 4rem);">

        </nav>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: "app",
  }
</script>

<style>
@import './assets/base.css';
@import 'bootstrap/dist/css/bootstrap.css';

.navbar {
  padding: 0.5rem 1rem;
}

.form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
}

.form-buscar {
    margin-right: 0.5rem!important;
}

.border-sidebar-right {
  border-right: solid 1px lightgrey;
}

.border-sidebar-left {
  border-left: solid 1px lightgrey;
}

</style>

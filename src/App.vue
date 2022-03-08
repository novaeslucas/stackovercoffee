<script setup>
import QuestoesHome from './components/QuestoesHome.vue'
</script>

<template>
  <header>
    <nav class="navbar navbar-dark bg-dark justify-content-between">
      <a class="navbar-brand" href="#">
        <img src="./assets/coffee-icon.png" width="43" height="30" class="d-inline-block align-top" alt="">
        Stackover Coffee
      </a>
      <form class="form-inline">
        <input class="form-control form-buscar" type="search" placeholder="Procurar" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Procurar</button>
      </form>
    </nav>
  </header>

  <main>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block sidebar border-sidebar-right" style="height: calc(100vh - 4rem);">

        </nav>
        <div class="col-md-8 col-lg-8 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Página inicial</h1>
          </div>
          <QuestoesHome/>
        </div>
        <nav class="col-md-2 d-none d-md-block sidebar border-sidebar-left" style="height: calc(100vh - 4rem);">

        </nav>
      </div>
    </div>
  </main>

  <footer>
    
  </footer>
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

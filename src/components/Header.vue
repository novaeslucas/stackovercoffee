<template>
  <header>
    <nav class="navbar navbar-dark bg-dark justify-content-between">
      <a class="navbar-brand" href="/">
        <img src="./../assets/coffee-icon.png" width="43" height="30" class="d-inline-block align-top" alt="">
        Stackover Coffee
      </a>
      <form class="form-inline">
        <input class="form-control form-buscar" type="search" placeholder="Procurar" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Procurar</button>
      </form>
    </nav>
  </header>
</template>

<style>
@import './../assets/base.css';
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

</style>

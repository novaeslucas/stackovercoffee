<template>
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

<style>
@import './../assets/base.css';
@import 'bootstrap/dist/css/bootstrap.css';

</style>

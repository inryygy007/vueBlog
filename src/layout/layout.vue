<script setup>
import { RouterView, RouterLink } from "vue-router";
import NavBar from "./NavBar.vue";
</script>
<template>
  <div class="main">
    <header class="header">
      <NavBar />
    </header>
    <div class="container">
      <div><banner></banner></div>

      <RouterView></RouterView>
    </div>
    <footer class="">底部</footer>
  </div>
</template>

<style lang="scss">
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/base/minireset.sass";
@import "bulma/sass/components/navbar.sass";
@import "bulma/sass/elements/container.sass";
@import "bulma/sass/elements/box.sass";
</style>

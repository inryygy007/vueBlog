<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>
<template>
  <div class="main">
    <header class="header">
      <nav
        class="navbar is-spaced has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.zcopy.site">
              <img
                src="https://bulma.zcopy.site/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </a>

            <a
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item"> Home </a>

              <a class="navbar-item"> Documentation </a>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link"> More </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item"> About </a>
                  <a class="navbar-item"> Jobs </a>
                  <a class="navbar-item"> Contact </a>
                  <hr class="navbar-divider" />
                  <a class="navbar-item"> Report an issue </a>
                </div>
              </div>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <a-space>
                  <a-button type="primary">Login</a-button>
                  <a-button>Register</a-button>
                </a-space>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <div class="container">
      <RouterView></RouterView>
    </div>
    <footer class="">底部</footer>
  </div>
</template>

<style lang="scss">
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/components/navbar.sass";
@import "bulma/sass/elements/container.sass";
@import "bulma/sass/elements/box.sass";
</style>

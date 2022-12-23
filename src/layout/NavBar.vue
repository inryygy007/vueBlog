<template>
  <nav class="navbar is-spaced has-shadow" role="navigation" aria-label="main navigation">
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
          <RouterLink :to="{ name: 'home' }" class="navbar-item"> Home </RouterLink>

          <div v-for="item in categoryData">
            <RouterLink
              :to="{ name: 'category', params: { id: item.id } }"
              class="navbar-item"
              :key="item.id"
              v-if="item.children.length == 0"
            >
              {{ item.name }}
            </RouterLink>

            <div
              class="navbar-item has-dropdown is-hoverable"
              v-if="item.children.length > 0"
            >
              <RouterLink
                :to="{ name: 'category', params: { id: item.id } }"
                class="navbar-link"
              >
                {{ item.name }}
              </RouterLink>

              <div class="navbar-dropdown">
                <RouterLink
                  :to="{ name: 'category', params: { id: subitem.id } }"
                  class="navbar-item"
                  v-for="subitem in item.children"
                  :key="subitem.id"
                >
                  {{ subitem.name }}
                </RouterLink>
              </div>
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
</template>

<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";
import { useCategoryStore } from "../stores/";

const store = useCategoryStore();
// const data = reactive({
//   categoryData: [],
// });
const categoryData = store.comCategoryDatas;
if (!categoryData.length) {
  store.apiCategory();
}
console.log(categoryData);
</script>

<style lang="scss" scoped></style>

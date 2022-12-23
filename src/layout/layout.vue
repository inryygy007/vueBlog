<script setup>
import { reactive,ref, computed } from "vue";
import { RouterView, RouterLink } from "vue-router";
import NavBar from "./NavBar.vue";
import AsideBox from "../components/AsideBox.vue";

const searchValue1 = ref("");
const searchValue2 = ref("");

const newsData = [
  {
    title:
      "html11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
  },
  {
    title: "css",
  },
  {
    title: "js",
  },
];
const newsDataComp = computed(() => {
  let itemNewsData = newsData.map((item) => {
    let { title } = item;
    if (title.length > 33) {
      return { title: title.substring(0, 33) + "..." };
    }
    return item;
  });
  return itemNewsData;
});
const tagsData = [
  { name: "tag1", color: "#87d068" },
  { name: "tag2", color: "#f50" },
];
const archiveData = [
  { data: "2020年11月28日" },
  { data: "2021年3月26日" },
  { data: "2022年12月8日" },
];

const search1CallBack = () => {
  console.log("search1CallBack", searchValue1.value);
};
const search2CallBack = () => {
  console.log("search2CallBack", searchValue2.value);
};
</script>
<template>
  <div class="main">
    <header class="header">
      <NavBar />
    </header>
    <div class="container">
      <a-row :gutter="[16, 16]">
        <a-col :span="18">
          <!-- banner -->
          <banner></banner>
          <!-- 文本列表 -->
          <RouterView></RouterView>
        </a-col>

        <a-col :span="6">
          <aside-box
            type="search"
            @some-search="search1CallBack"
            v-model:searchValue="searchValue1"
          >
          </aside-box>
          {{ `父组件：${searchValue1}` }}
          <aside-box
            type="search"
            @some-search="search2CallBack"
            v-model:searchValue="searchValue2"
          >
          </aside-box>
          {{ `父组件：${searchValue2}` }}

          <aside-box name="最新文章" type="news" :news-data="newsDataComp"> </aside-box>
          <aside-box name="标签" type="tag" :tags-data="tagsData"> </aside-box>
          <aside-box name="归档" type="archive" :archive-data="archiveData"> </aside-box>
        </a-col>
      </a-row>
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

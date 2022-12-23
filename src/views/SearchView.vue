<script setup>
import { ref, reactive, getCurrentInstance, watch } from "vue";
import getHomeArticle from "../api/homeApi";
import { useRoute } from "vue-router";
const { proxy } = getCurrentInstance();

const obj = reactive({
  data: [],
});
const route = useRoute();

watch(
  () => route.query,
  (newValue, oldValue) => {
    getHomeArticle(route.query).then((res) => {
      if (res.status == 200 && route.query.search) {
        console.log(res.data);
        obj.data = res.data;
      }
    });
  },
  {
    immediate: true,
  }
);
// apiCallAFunction();

// console.log(import.meta.env.VITE_APP_TITLE);
// console.log(import.meta.env);
</script>

<template>
  <article-item
    v-for="item in obj.data"
    :title="item.title"
    :link="`/article/${item.id}`"
    :desc="item.desc"
    :key="item.id"
  >
    <template #author>
      {{ item.author }}
    </template>
    <template #category>
      {{ item.category }}
    </template>
    <template #pubdate>
      {{ item.pub_date }}
    </template>
  </article-item>
</template>

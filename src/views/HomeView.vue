<script setup>
import { ref, reactive, getCurrentInstance, computed } from "vue";
import getHomeArticle from "../api/homeApi";
const { proxy } = getCurrentInstance();

const obj = reactive({
  data: [],
});
const apiCallAFunction = async () => {
  let res = await getHomeArticle();
  if (res.status == 200) {
    obj.data = res.data;
  }
  console.log(obj.data);
};
apiCallAFunction();

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

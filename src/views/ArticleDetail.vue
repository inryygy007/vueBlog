<template>
  <div>
    <article-item :title="obj.article.title" :link="`/article/${obj.article.id}`">
      <template #author>
        {{ obj.article.author }}
      </template>
      <template #category>
        {{ obj.article.category }}
      </template>
      <template #pubdate>
        {{ obj.article.pub_date }}
      </template>
    </article-item>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import { useRoute } from "vue-router";
import getArticleDetail from "../api/articleDetail";
const obj = reactive({
  article: {},
});
const route = useRoute();

watch(
  () => route.params,
  async (newValue, oldValue) => {
    if (newValue.id) {
      let res = await getArticleDetail(newValue.id);
      if (res.status == 200) {
        console.log(res.data);
        obj.article = res.data;
      }
    }
  },
  {
    //当watch创建时就触发回调
    immediate: true,
  }
);
</script>

<style lang="scss" scoped></style>

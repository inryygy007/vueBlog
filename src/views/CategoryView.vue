<template>
  <a-spin :spinning="obj.spinning">
    <div class="empty">
      <a-empty v-if="obj.article_set.length == 0" :description="null" />
    </div>
  </a-spin>

  <article-item
    v-for="item in obj.article_set"
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

<script setup>
import { reactive, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import getCategoryArticleList from "../api/categoryApi";

const obj = reactive({
  article_set: [],
  spinning: false,
});
const route = useRoute();
// watch(()=>route.params,(new))
watch(
  () => route.params,
  async (newValue, oldValue) => {
    // console.log(newValue);
    if (newValue.id) {
      let res = await getCategoryArticleList(newValue.id);
      if (res.data.id) {
        obj.spinning = true;
      }
      if (res.status == 200) {
        obj.article_set = res.data.article_set;
      }
    }
  },
  {
    //当watch创建时就触发回调
    immediate: true,
  }
);
</script>

<style lang="scss" scoped>
.empty {
  padding-top: 80px;
}
</style>

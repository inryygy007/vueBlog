<template>
  <aside class="box is-size-5 has-text-weight-semibold">
    <h1 class="side-title">{{ name }}</h1>
    <div class="" v-if="type == 'search'">
      <a-input-search
        placeholder="input search text"
        @search="$emit('someSearch', value)"
        @change="$emit('update:searchValue', $event.target.value)"
      />
      {{ `子组件:${searchValue}` }}
    </div>

    <div class="news" v-if="type == 'news' && newsData.length > 0">
      <ul>
        <li v-for="(item, index) in newsData" :key="index">
          <a href="">{{ item.title }}</a>
        </li>
      </ul>
    </div>

    <div class="" v-if="type == 'tag' && tagsData.length > 0">
      <a-tag v-for="(item, index) in tagsData" :key="index" :color="item.color">{{
        item.name
      }}</a-tag>
    </div>

    <div class="archive" v-if="type == 'archive' && archiveData.length > 0">
      <ul class="pl-2 pr-2">
        <li v-for="(item, index) in archiveData" :key="index">
          <a href="">{{ item.data }}</a>
        </li>
      </ul>
    </div>
    <slot name="box" v-if="type == 'box'"></slot>
  </aside>
</template>

<script setup>
import { ref } from "vue";
defineEmits(["update:searchValue", "someSearch"]);
const props = defineProps({
  name: {
    type: String,
    default: "搜索",
  },
  type: {
    type: String,
    default: "search",
    validator(value) {
      return ["search", "news", "tag", "archive", "box"].includes(value);
    },
  },
  newsData: {
    type: Array,
    default: [],
  },
  tagsData: {
    type: Array,
    default: [],
  },
  archiveData: {
    type: Array,
    default: [],
  },
  searchValue: "",
});

const value = ref("");
</script>

<style lang="scss" scoped>
.side-title {
  font-size: 18px;
  font-weight: bold;
  border-bottom: solid 1px #eee;
  padding-bottom: 0.3em;
  margin-bottom: 0.3em;
}
.news,
.archive {
  li {
    line-height: 2.5em;
    border-bottom: 1px solid #ccc;
  }
}
</style>

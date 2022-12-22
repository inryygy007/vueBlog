<template>
  <a-typography class="box">
    <a-typography-title :level="3">
      <RouterLink :to="{ path: '/' }">{{ title }}</RouterLink>
    </a-typography-title>
    <a-space>
      <a-space>
        <user-outlined></user-outlined>
        <span
          >作者：<slot name="author">{{ author }} </slot></span
        >
      </a-space>

      <a-space>
        <folder-outlined></folder-outlined>
        <span
          >分类：<slot name="category">{{ category }} </slot></span
        >
      </a-space>

      <a-space>
        <clock-circle-outlined></clock-circle-outlined>
        <span
          >发布日期：<slot name="pubdate">{{ pubdate }} </slot></span
        >
      </a-space>
    </a-space>

    <a-typography-paragraph type="secondary">
      {{ desc }}
    </a-typography-paragraph>
  </a-typography>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  title: {
    type: String,
    default: "Introduction",
  },
  link: String || Object,
  author: {
    type: String,
    default: "张三",
  },
  category: {
    type: String,
    default: "Vue3",
  },
  pubdate: {
    type: String,
    default: "2002年11月8日",
  },
  desc: {
    type: String,
    default: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur unde ipsam,
      quos, harum voluptatum numquam necessitatibus, modi a officiis sed corporis
      explicabo corrupti. Repellat quibusdam molestias temporibus doloribus magnam modi?`,
  },
});
</script>

<style lang="scss" scoped></style>

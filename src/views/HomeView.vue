<script setup>
import { ref, reactive, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();

const obj = reactive({
  data: [
    {
      title: "html",
      link: "/",
      author: "李四",
      category: "html",
      pubdate: "2022年18月",
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur unde ipsam,
      quos, harum voluptatum numquam necessitatibus, modi a officiis sed corporis
      explicabo corrupti. Repellat quibusdam molestias temporibus doloribus magnam modi?`,
    },
    {
      title: "css",
      link: "/",
      author: "王五",
      category: "css",
      pubdate: "2022年16月",
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur unde ipsam,
      quos, harum voluptatum numquam necessitatibus, modi a officiis sed corporis
      explicabo corrupti. Repellat quibusdam molestias temporibus doloribus magnam modi?`,
    },
    {
      title: "javascript",
      link: "/",
      author: "赵六",
      category: "javascript",
      pubdate: "2022年14月",
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur unde ipsam,
      quos, harum voluptatum numquam necessitatibus, modi a officiis sed corporis
      explicabo corrupti. Repellat quibusdam molestias temporibus doloribus magnam modi?`,
    },
  ],
});
</script>

<template>
  <a-row :gutter="[16, 16]">
    <a-col :span="18">
      <!-- banner -->
      <banner></banner>

      <!-- 文本列表 -->
      <article-item
        v-for="(item, index) in obj.data"
        :title="item.title"
        :link="item.link"
        :desc="item.desc"
      >
        <template #author>
          {{ item.author }}
        </template>
        <template #category>
          {{ item.category }}
        </template>
        <template #pubdate>
          {{ item.pubdate }}
        </template>
      </article-item>
    </a-col>

    <a-col :span="6"></a-col>
  </a-row>
</template>

<script setup>
import AsideBox from "../components/AsideBox.vue";
import { ref, reactive, getCurrentInstance, computed } from "vue";
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
  console.log("itemNewsData", itemNewsData, newsData);
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

    <a-col :span="6">
      <aside-box type="search"> </aside-box>
      <aside-box name="最新文章" type="news" :news-data="newsDataComp"> </aside-box>
      <aside-box name="标签" type="tag" :tags-data="tagsData"> </aside-box>
      <aside-box name="归档" type="archive" :archive-data="archiveData"> </aside-box>
    </a-col>
  </a-row>
</template>

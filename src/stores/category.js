import { ref, computed } from "vue";
import { defineStore } from "pinia";
import getCategory from "../api/navBarApi";
export const useCategoryStore = defineStore("category", () => {
  //state状态
  const categoryData = ref([]);

  //
  const comCategoryDatas = computed(() => {
    return JSON.parse(sessionStorage.getItem("CategoryData")) || categoryData;
  });

  async function apiCategory() {
    let res = await getCategory();
    if (res.status === 200) {
      categoryData.value = res.data;
      sessionStorage.setItem("CategoryData", JSON.stringify(res.data));
    }
  }

  return { categoryData, comCategoryDatas, apiCategory };
});

import { get } from "../utils";

const getCategoryArticleList = async (id) => {
  let data = await get(`categorys/${id}`);
  return data;
};

export default getCategoryArticleList;

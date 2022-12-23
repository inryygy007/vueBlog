import { get } from "../utils";

const getArticleDetail = async (id) => {
  let data = await get(`article/${id}/`);
  return data;
};
export default getArticleDetail;

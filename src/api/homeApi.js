import { get } from "../utils";
const getHomeArticle = async() => {
  let data = await get("article");
  return data;
};

export default getHomeArticle;

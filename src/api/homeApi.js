import { get } from "../utils";
const getHomeArticle = () => {
  let data = get("article");
  return data;
};

export default getHomeArticle;

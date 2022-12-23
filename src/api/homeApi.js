import { get } from "../utils";
const getHomeArticle = async (params = {}) => {
  let data = await get("/article/", params);
  // /search?search=python
  // /article/?search=python
  return data;
};

export default getHomeArticle;

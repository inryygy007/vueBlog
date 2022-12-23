import { get } from "../utils/";

const getCategory = async () => {
  let data = await get("/categorys/");
  return data;
};

export default getCategory;

import { get } from "../utils/";

const categoryData = async () => {
  let data = await get("/categorys/");
  console.log(data);
  return data;
};

export default categoryData;

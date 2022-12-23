import { get } from "../utils/";

const categoryRequest = () => {
  let data = get("/categorys/");
  return data;
};

export default categoryRequest;

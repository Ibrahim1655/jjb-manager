import { instance } from "./axios";
export const getLicencies = async () => {
  return await instance.get("/licencies");
};

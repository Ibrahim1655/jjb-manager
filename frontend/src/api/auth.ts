import { instance } from "./axios";

export const login = async (email: string, password: string) => {
  const request = await instance.post("auth/login", { email, password });
  return request;
};

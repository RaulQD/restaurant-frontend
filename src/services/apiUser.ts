import { isAxiosError } from "axios";
import api from "../lib/axios";
import { User } from "../types/auth";

export const currentUser = async () => {
  try {
    const url = '/user/current-user';
    const { data } = await api.get<User>(url);
    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
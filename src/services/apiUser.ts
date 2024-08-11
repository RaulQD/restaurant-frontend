import { isAxiosError } from "axios";
import api from "../lib/axios";
import { UserRegisterform } from "../types/auth";

export const createAccount = async (formUser: UserRegisterform) => {
  try {
    const url = '/auth/register';
    const { data } = await api.post(url, formUser);
    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
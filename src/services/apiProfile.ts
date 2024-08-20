import { isAxiosError } from "axios";
import api from "../lib/axios";
import { UpdateCurrentUserPassword, User } from "../types/auth";


export const updateProfile = async (formData: User) => {
  try {
    const url = '/auth/profile';
    const { data } = await api.put(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
export const changePassword = async (formData: UpdateCurrentUserPassword) => {
  try {
    const { data } = await api.put('/auth/update-password', formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }

}
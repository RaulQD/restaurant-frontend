import { isAxiosError } from "axios";
import api from "../lib/axios";
import { ForgotPasswordForm, ResetPasswordForm, UserLoginForm, UserRegisterform } from "../types/auth";

export const createAccount = async (formData: UserRegisterform) => {
  try {
    const url = '/auth/register';
    const { data } = await api.post(url, formData);
    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export const authenticateUser = async (formData: UserLoginForm) => {
  try {
    const url = '/auth/login';
    const { data } = await api.post(url, formData);
    localStorage.setItem('AUTH_TOKEN', JSON.stringify(data));
    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export const forgotPassword = async (formData: ForgotPasswordForm) => {
  try {
    const url = '/auth/forgot-password';
    const { data } = await api.post(url, formData);
    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export const updatePasswordToken = async ({ formData, token }: { formData: ResetPasswordForm, token: string }) => {
  try {
    const url = `/auth/update-password/${token}`;
    const { data } = await api.post(url, formData);
    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
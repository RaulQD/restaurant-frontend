import { isAxiosError } from "axios";
import api from "../lib/axios";
import { ForgotPasswordForm, ResetPasswordForm, AuthLoginForm, AuthRegisterform } from "../types/auth";

export const createAccount = async (formData: AuthRegisterform) => {
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

export const authenticateUser = async (formData: AuthLoginForm) => {
  try {
    const url = '/auth/login';
    const { data } = await api.post(url, formData);
    localStorage.setItem('AUTHENTICATION', JSON.stringify(data));
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
import { isAxiosError } from "axios";
import api from "../lib/axios";
import { CategoryFormData, categoryListSchema } from "../types/category";
// import { CategoriesSchema } from "../../types/category";


export const getCategories = async () => {
  try {
    const { data } = await api.get('/category');
    const response = categoryListSchema.safeParse(data)
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    } else {
      throw new Error('Error desconocido al crear una categoria');
    }
  }
};

export const createCategory = async (formData: CategoryFormData) => {
  try {
    const { data } = await api.post('/category', formData)
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}

export const updateCategory = async () => {
  console.log('updateCategory');
}
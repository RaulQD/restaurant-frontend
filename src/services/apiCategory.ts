import { isAxiosError } from "axios";
import api from "../lib/axios";
import { Categories, CategoryFormData } from "../types/category";
// import { CategoriesSchema } from "../../types/category";


export const getCategories = async () => {
  try {
    const { data } = await api.get('/category');
    return data;
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

export const getCategoryById = async (categoryId: Categories['id']) => {
  try {
    const { data } = await api.get(`/category/${categoryId}`);
    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}
type UpdateAPIType = {
  formData: CategoryFormData;
  categoryId: Categories['id'];
}

export const updateCategory = async ({formData, categoryId}: UpdateAPIType) => {

  try {
    const { data } = await api.put(`/category/${categoryId}`, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
    
  }
  const { data } = await api.put('/category').then((res) => res.data).catch((error) => {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  });
  return data;
}

export const deleteCategory = async (categoryId: Categories['id']) => {
  try {
    const { data } = await api.delete(`/category/${categoryId}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}
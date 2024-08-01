import { isAxiosError } from 'axios';
import api from '../lib/axios';

export const createDishes = async (formData: FormData) => {
  try {
    const { data } = await api.post('/dishes', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    } else {
      throw new Error('Error desconocido al crear una categoria');
    }
  }
}

export const getDishes = async ({ page = 1, limit = 10 }: { page: number, limit: number }) => {
  try {
    const { data } = await api.get(`/dishes?page=${page}&limit=${limit}`);
    console.log(data);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    } else {
      throw new Error('Error desconocido al crear una categoria');
    }
  }
}



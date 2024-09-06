import { isAxiosError } from "axios"
import api from "../lib/axios"
import {  CartForm, CartItemsList } from "../types/cart"


export const createCart = async (formData: CartForm) => {
  try {
    const { data } = await api.post('/cart', formData)
    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}


// Función para obtener el carrito
export const getCart = async (userId: string) => {
  try {
    const {data} = await api.get<CartItemsList>(`/cart/${userId}`);
    console.log(data);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error('Error desconocido al obtener el carrito');
    }
  }
};
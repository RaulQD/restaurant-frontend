import { isAxiosError } from "axios"
import api from "../lib/axios"
import { CartDelete, CartForm, CartItemsList, UpdateCartItems } from "../types/cart"


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
    const { data } = await api.get<CartItemsList>(`/cart/${userId}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error('Error desconocido al obtener el carrito');
    }
  }
};

// Función para aumentar la cantidad del carrito
export const increaseQuantity = async (formData: UpdateCartItems) => {
  try {
    const { data } = await api.put('/cart/increase', formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error('Error desconocido al obtener el carrito');
    }
  }
}
// Función para disminuir la cantidad del carrito
export const decreaseQuantity = async (formData: UpdateCartItems) => {
  try {
    const { data } = await api.put('/cart/decrease', formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error('Error desconocido al obtener el carrito');
    }
  }
}


export const deleteCartItem = async ({ dishId, userId }: CartDelete) => {
  try {
    const { data } = await api.delete(`/cart/${userId}/${dishId}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error('Error desconocido al obtener el carrito');
    }
  }
}
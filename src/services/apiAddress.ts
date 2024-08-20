import { isAxiosError } from "axios"
import api from "../lib/axios"


export const getUserAddress = async () => {
  try {
    const { data } = await api.get('/address')
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    } else {
      throw new Error('Error desconocido al obtener una plato');
    }
  }
}

export const createAddress = () => { }

export const updateAddress = () => { }

export const deleteAddress = () => { }
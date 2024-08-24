import { isAxiosError } from "axios"
import api from "../lib/axios"
import { Address, AddressFormData } from "../types/auth";


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

export const createAddress = async (formData: AddressFormData) => {
  try {
    const { data } = await api.post('/address', formData)
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}

export const getAddressById = async (addressId: Address['id']) => {
  try {
    const { data } = await api.get(`/address/${addressId}`)
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}

type UpdateAPIType = {
  formData: AddressFormData;
  addressId: Address['id'];
}

export const updateAddress = async ({ formData, addressId }: UpdateAPIType) => {
  try {
    const { data } = await api.put(`/address/${addressId}`, formData)
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}

export const deleteAddress = async (addressId: Address['id']) => {
  try {
    const { data } = await api.delete(`/address/${addressId}`)
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}
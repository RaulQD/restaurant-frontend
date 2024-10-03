import { isAxiosError } from "axios"
import api from "../lib/axios"
import { Address } from "../types/auth"

type Order = {
  addressId: Address['id']
}

export const createOrder = async (payload: Order) =>{
  try {
    const { data } = await api.post('/orders/mercado-pago', payload)
    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    } else {
      throw new Error('Error desconocido al obtener una plato');
    }

  }
}
// export const getOrders = async () => { }
// export const getOrder = async (id: string) => { }
// export const updateOrder = async (id: string, order: Order) => { }
// export const deleteOrder = async (id: string) => { }

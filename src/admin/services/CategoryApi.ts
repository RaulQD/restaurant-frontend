import api from "../../lib/axios";
import { CategoriesSchema } from "../../types/category";


export const getCategories = async () => {

  try {
    const { data } = await api.get('/category');
    const result = CategoriesSchema.safeParse(data);
    if (result.success) {
      return result.data;
    }
  } catch (error) {
    console.error(error);
  }
};

import { z } from "zod";
import { CategoriesSchema, CategorySchema } from "./category";
import { DishesSchema, DishSchema } from "./dishes";

type DishesForm = {
    id_dish: number;
    dishes_name: string;
    description: string;
    price: number;
    id_category: number;
    image_url: File | null;

}
export type DishesFormData = Pick<DishesForm, 'dishes_name' | 'description' | 'id_category' | 'price' | 'image_url'>


export type Categories = z.infer<typeof CategoriesSchema>
export type Category = z.infer<typeof CategorySchema>
export type Dishes = z.infer<typeof DishesSchema>
export type Dish = z.infer<typeof DishSchema>


// export type Dishes = {
//     id: number;
//     src: string;
//     title: string;
//     price: string;
//     description?: string;
//     availability: string;
// }


export type NavLinks = {
    name: string;
    path: string;
}; 

import { Category, Dishes, NavLinks } from "../types";

//DISHES
export const dishes: Dishes[] = [
    {
        id: 1,
        src: './lomo-saltado.jpg',
        title: 'Lomo Saltado',
        price: 'S/15.90',
        description: 'Lomo Saltado jugoso y salteado con papas fritas y arroz blanco.',
        availability: 'Disponible',
    },
    {
        id: 2,
        src: './ceviche.jpg',
        title: 'Ceviche de pescado',
        price: 'S/35.00',
        description: 'Pescado fresco marinado en limón, acompañado de camote,choclo y cebolla.',
        availability: 'Disponible',
    },
    {
        id: 3,
        src: './salpicon-de-pollo.webp',
        title: 'Ensalada de Pollo',
        price: 'S/18.50',
        description: 'Ensalada de pollo con verduras frescas, con palta y mayonesa.',
        availability: 'Disponible',
    },
    {
        id: 4,
        src: './Tallarines-verdes-bistec.webp',
        title: 'Tallarines verdes con bistec',
        price: 'S/15.90',
        description: 'Tallarines verdes con bistec a la parrilla, acompañado de arroz blanco y papas fritas.',
        availability: 'Disponible',
    },
    {
        id: 5,
        src: './arroz-con-mariscos.jpg',
        title: 'Arroz con mariscos',
        price: 'S/20.00',
        description: 'Arroz con mariscos, conchas, camarones y calamares, acompañado de salsa criolla.',
        availability: 'Disponible',
    },
    {
        id: 6,
        src: './tallarines-a-lo-alfredo.webp',
        title: 'Tallarines a lo Alfredo',
        price: 'S/18.50',
        description: 'El clásico fetuccini alfredo cremosito, sencillo y muy rico. ',
        availability: 'Disponible',
    },

];

export const CategoryDishes: Category[] = [
    {
        id: 1,
        title: 'Principales',
    },
    {
        id: 2,
        title: 'Ensaladas',
    },
    {
        id: 3,
        title: 'Bebidas',
    },
    {
        id: 4,
        title: 'Sopas',
    },
    {
        id: 5,
        title: 'Postres',
    },
    {
        id: 6,
        title: 'Entradas',
    },
    {
        id: 7,
        title: 'Complementos',
    }

]
export const navLinks: NavLinks[] = [
    { name: 'Inicio', path: '/' },
    { name: 'Nuestros platos', path: '/menu' },
    { name: 'Sobre Nosotros', path: '/about' },
];

export type Dishes = {
    id: number;
    src: string;
    title: string;
    price: string;
    description?: string;
    availability: string;
}

export type Category = {
    id: number;
    title: string;
}
export type NavLinks = {
    name: string;
    path: string;
}; 
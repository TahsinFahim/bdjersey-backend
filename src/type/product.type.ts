export type IProduct = {
    name: string;
    brand : string;
    price : number;
    image : string;
    size: ("S" | "M" | "L" | "XL")[];
    inStock?: boolean;
} 
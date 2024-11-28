// export type ProductProps = {
//   id: number;
//   img: string;
//   title: string;
//   price: number;
//   discount: number;
//   rate: number;
//   attribute: string;
//   count: number;
//   isFavourite: boolean;
//   description?: string;
// }

// export type ArrayOfProductsProps = {
//   products: ProductProps[];
// }

// export type ArrayFunction<T> = (inputArr: T[], attribute: string) => T[];

// export type SectionOfProductsProps = {
//   products: ProductProps[];
//   fn: ArrayFunction<ProductProps> 
//   attribute: string; 
//   title: string;
// }

// export type ActionsProducts = {
//   editProductCount?: (id: number, newCount: number) => void;
//   toggleProductFavourite?: (id: number) => void;
//   saveToSessionStorage?: (data: ProductProps[]) => void;
//   loadFromSessionStorage?: () => void;
// }

// export type ActionsShoppingCart = {
//   addProduct?: (product: ProductProps) => void;
//   removeProduct?: (id: number) => void;
// }

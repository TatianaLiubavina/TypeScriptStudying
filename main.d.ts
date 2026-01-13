export interface Entity {
    id: string;
}
export interface User extends Entity {
    name: string;
    age: number;
    isAdmin: boolean;
}
export interface Product extends Entity {
    title: string;
    price: number;
    inStock: boolean;
}
//# sourceMappingURL=main.d.ts.map
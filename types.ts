
interface Entity {
  id: string;
}

interface User extends Entity {
  name: string;
  age: number;
  isAdmin: boolean;
}

interface Product extends Entity {
  title: string;
  price: number;
  inStock: boolean;
}

type OrderStatus = "draft" | "paid" | "shipped" | "cancelled";

type Order = {
  id: number;
  user: User;
  products: Product[];
  total: number;
  status: OrderStatus;
  createdAt: Date;
  coupon?: { code: string; discountPercent: number };
};

type WithMeta<T> = {
  data: T;
  meta: { createdAt: Date; updatedAt: Date };
};

function calcTotal(products: Product[]): number {
  return products.reduce((totalSum, product) => {
    return product.inStock ? totalSum + product.price : totalSum;
  }, 0);
}

function canUserBuy(user: User, total: number): boolean {
  if (user.age < 18 && total > 1000) {
    return false;
  }
  return true;
}

function attachMeta<T>(data: T): WithMeta<T> {
  const dateNew = new Date();
  return {
    data: data,
    meta: {
      createdAt: dateNew,
      updatedAt: dateNew,
    },
  };
}

function getById<T extends Entity>(items: T[], id: string): T | undefined {
  return items.find((item) => item.id === id);
}

const users: User[] = [
  { id: "1", name: "София", age: 21, isAdmin: false },
  { id: "2", name: "Алексей", age: 36, isAdmin: true },
  { id: "3", name: "Марьяна", age: 32, isAdmin: true },
  { id: "4", name: "Иван", age: 25, isAdmin: false },
  { id: "5", name: "Вера", age: 41, isAdmin: true },
];

const products: Product[] = [
  { id: "1", title: "Смартфон Samsung", price: 87000, inStock: true },
  { id: "2", title: "Чехол для телефона", price: 1500, inStock: true },
  { id: "3", title: "Смартфон iPhone", price: 115000, inStock: false },
  { id: "4", title: "Смартфон Xiami", price: 26000, inStock: true },
  { id: "5", title: "Ноутбук Macbook", price: 235000, inStock: true },
];

const totalPrice: number = calcTotal(products);

console.log(totalPrice)

console.log(getById(users, "2"));
console.log(getById(products, "5"));
console.log(attachMeta(Date));
import type { Product } from "./main";

const products: Product[] = [
  { id: "1", title: "Смартфон Samsung", price: 87000, inStock: true },
  { id: "2", title: "Чехол для телефона", price: 1500, inStock: true },
  { id: "3", title: "Смартфон iPhone", price: 115000, inStock: false },
  { id: "4", title: "Смартфон Xiami", price: 26000, inStock: true },
  { id: "5", title: "Ноутбук Macbook", price: 235000, inStock: true },
];

export function getProductsInStock(products: Product[]): Product[] {
  return products.filter((product) => {
    return product.inStock ? true : false;
  });
}

export function getProductsOutOfStock(products: Product[]): Product[] {
  return products.filter((product) => {
    return !product.inStock ? true : false;
  });
}

export function formatPrice(price: number): string {
  return price.toLocaleString("ru-RU", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "RUB",
  });
}

export function printProducts(products: Product[]): void {
  products.map((product) => {
    product.inStock
      ? console.log(
          product.title + " - " + formatPrice(product.price) + " (в наличии)"
        )
      : console.log(
          product.title +
            " - " +
            formatPrice(product.price) +
            " (нет в наличии)"
        );
  });
}

console.log(getProductsInStock(products));
console.log(getProductsOutOfStock(products));
printProducts(products);
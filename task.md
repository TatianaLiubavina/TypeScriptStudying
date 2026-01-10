## Git
- Создать ветку `feature/product-catalog`
- После завершения создать merge request в main и кинуть мне в тг

## Файл
- `catalog.ts` - функции для работы с товарами

## Функциональность

1. **Функция `getProductsInStock(products: Product[]): Product[]`**
   - Возвращает только товары в наличии

2. **Функция `getProductsOutOfStock(products: Product[]): Product[]`**
   - Возвращает только товары не в наличии

3. **Функция `formatPrice(price: number): string`**
   - Форматирует цену: `87000` → `"87 000 ₽"`

4. **Функция `printProducts(products: Product[]): void`**
   - Выводит в консоль список товаров:
     ```
     Смартфон Samsung - 87 000 ₽ (в наличии)
     Смартфон iPhone - 115 000 ₽ (нет в наличии)
     ```


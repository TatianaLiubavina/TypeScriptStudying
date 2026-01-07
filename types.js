function calcTotal(products) {
    return products.reduce(function (totalSum, product) {
        return product.inStock ? totalSum + product.price : totalSum;
    }, 0);
}
function canUserBuy(user, total) {
    if (user.age < 18 && total > 1000) {
        return false;
    }
    return true;
}
function attachMeta(data) {
    var dateNew = new Date();
    return {
        data: data,
        meta: {
            createdAt: dateNew,
            updatedAt: dateNew,
        },
    };
}
function getById(items, id) {
    return items.find(function (item) { return item.id === id; });
}
var users = [
    { id: "1", name: "София", age: 21, isAdmin: false },
    { id: "2", name: "Алексей", age: 36, isAdmin: true },
    { id: "3", name: "Марьяна", age: 32, isAdmin: true },
    { id: "4", name: "Иван", age: 25, isAdmin: false },
    { id: "5", name: "Вера", age: 41, isAdmin: true },
];
var products = [
    { id: "1", title: "Смартфон Samsung", price: 87000, inStock: true },
    { id: "2", title: "Чехол для телефона", price: 1500, inStock: true },
    { id: "3", title: "Смартфон iPhone", price: 115000, inStock: false },
    { id: "4", title: "Смартфон Xiami", price: 26000, inStock: true },
    { id: "5", title: "Ноутбук Macbook", price: 235000, inStock: true },
];
var totalPrice = calcTotal(products);
console.log(totalPrice);
console.log(getById(users, "2"));
console.log(getById(products, "5"));
console.log(attachMeta(Date));

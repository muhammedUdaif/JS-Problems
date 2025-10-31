// 5. Define a type Product with id, name, price, and inStock.
// Then, write a function that takes a Product and returns a formatted string:
// "Product [id]: name costs $price".

function isproduct(id: number, name: string, price: number, inStock: boolean): string {
    return (`${[id]}: ${name} price is $${price} and the stock is ${inStock ? "available" : "Out of stock"}`)
}
console.log(isproduct(3,"iPhone 16", 1299, true));
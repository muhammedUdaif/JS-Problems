// Write a function filterProducts(products, searchText) that returns all products whose
// name includes the search text (case-insensitive).
// [
// { name: "Laptop", price: 60000 },
// { name: "Mouse", price: 800 },
// { name: "Monitor", price: 12000 }
// ]

type Product = { name: string; price: number };

function filterProducts(products: Product[], searchText: string): Product[] {
	if (!searchText) return products.slice();

	const query = searchText.toLowerCase();
	return products.filter(p => p.name.toLowerCase().includes(query));
}

const products: Product[] = [
	{ name: "Laptop", price: 60000 },
	{ name: "Mouse", price: 800 },
	{ name: "Monitor", price: 12000 },
	{ name: "Phone", price: 30000 },
];

console.log(filterProducts(products, "monitor"));

const testFileterProducts = [
    {input: products, input1: "laptop",  expected: [{ name: "Laptop", price: 60000 }] },
    {input: products, input1: "mouse", expected: [{ name: "Mouse", price: 800 }]},
    {input: products, input1: "monitor", expected: [{ name: 'Monitor', price: 12000 }]},
    {input: products, input1: "phone", expected: [{ name: 'Phone', price: 30000}]},
]

testFileterProducts.forEach((test, index) => {
    const actual = filterProducts(test.input, test.input1);
    const result = JSON.stringify(actual) === JSON.stringify(test.expected) ? "Pass" : "Fail";

    console.log(`Test Case ${index + 1}: ${result}`);
})
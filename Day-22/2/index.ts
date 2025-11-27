// 2. Implement Fractional Knapsack algorithm.

interface Item {
    value: number;
    weight: number;
}

function fractionalKnapsack(item: Item[], capacity: number): number {
    const ratio = item.map(i => ({
        ...i,
        valuePerWeight: i.value / i.weight
    }))
    console.log(ratio);
    ratio.sort((a, b) => b.valuePerWeight - a.valuePerWeight);

    let totalValue = 0;
    let remainingCapacity = capacity;

    for(const i of ratio) {
        if(remainingCapacity === 0) break;

        if(i.weight <= remainingCapacity) {
            totalValue += i.value;
            remainingCapacity -= i.weight;
        } else {
            totalValue += i.valuePerWeight * remainingCapacity;
            remainingCapacity = 0;
        }
    }
    return totalValue;
}

console.log("Fractional knapsack: ", fractionalKnapsack([
    { value: 60, weight: 10 },
    { value: 100, weight: 20 },
    { value: 120, weight: 30 }
], 50));


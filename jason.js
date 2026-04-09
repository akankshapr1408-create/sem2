let jsonString = `{"productName":"Laptop","price":75000,"brand":"Dell"}`;
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject.productName);

console.log(jsonObject.price);
console.log(jsonObject.brand);
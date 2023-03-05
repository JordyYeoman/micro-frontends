// import faker from "faker";

let products = "";

for (let i = 0; i < 20; i++) {
  const name = Math.random().toString();
  products += `<div>${name}</div>`;
}

console.log(products);

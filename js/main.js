let plants = [
  ["Aloe Vera", "P001", 500, "plant"], // agregar imagen en carpeta img
  ["Cactus", "P002", 200, "plant"],
  ["Azalea", "P003", 400, "plant"],
  ["Estrella Federal", "P004", 450, "plant"],
];

let plant1 = new Product(plants[0]);
let plant2 = new Product(plants[1]);
let plant3 = new Product(plants[2]);
let plant4 = new Product(plants[3]);


let cart = new ShoppingCart();

cart.addNewProduct(plant1);
console.log(cart.getTotalProducts());


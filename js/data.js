const products = [{
  "id" : 1,
  "code" : "P0001",
  "name" : "Aloe Vera",
  "image" : "../img/aloe_vera.webp",
  "price" : 500,
  "available" : true,
  tags : ["aloe vera", "suculenta"]
},{
  "id" : 2,
  "code" : "P0002",
  "name" : "Cactus",
  "image" : "../img/cactus.jpg",
  "price" : 200,
  "available" : true,
  tags : ["cactus", "suculenta"]
},{
  "id" : 3,
  "code" : "P0003",
  "name" : "Azalea",
  "image" : "../img/azalea.jpg",
  "price" : 400,
  "available" : true,
  tags : ["azalea", "flor"]
},{
  "id" : 4,
  "code" : "P0004",
  "name" : "Estrella Federal",
  "image" : "../img/estrella-federal.jpg",
  "price" : 450,
  "available" : true,
  tags : ["estrella federal", "flor"]
},{
  "id" : 5,
  "code" : "P0005",
  "name" : "Alegria del hogar",
  "image" : "../img/Alegria.jpg",
  "price" : 450,
  "available" : true,
  tags : ["alegria del hogar", "flor"]
},{
  "id" : 6,
  "code" : "P0006",
  "name" : "Cleistocactus",
  "image" : "../img/Cleistocactus.jpg",
  "price" : 500,
  "available" : true,
  tags : ["cactus", "suculenta"]
},{
  "id" : 7,
  "code" : "P0007",
  "name" : "Cleistocactus",
  "image" : "../img/cleistocactus2.jpg",
  "price" : 600,
  "available" : true,
  tags : ["cactus", "suculenta"]
},{
  "id" : 8,
  "code" : "P0008",
  "name" : "Cactus",
  "image" : "../img/claistocactus3.jpg",
  "price" : 550,
  "available" : true,
  tags : ["cactus", "suculenta"]
},{
  "id" : 9,
  "code" : "P0009",
  "name" : "Astrophytum",
  "image" : "../img/astrophytum.jpg",
  "price" : 450,
  "available" : true,
  tags : ["cactus", "suculenta"]
}];

let selectedProducts = localStorage.getItem("Selected Products");
 if(!selectedProducts) {
   selectedProducts = [];
} else {
  selectedProducts = JSON.parse(selectedProducts);
}


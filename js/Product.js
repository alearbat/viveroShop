class Product {

  constructor(name, code, price) {
    this.name = name;
    this.code = code;
    this.price = price;
  }
  totalPrice() {
    return this.price * 1.21;
  }

  promoPrice(discount) {
    let totalPrice = this.totalPrice();
    return totalPrice * discount;
  }
}

let Product1 = new Product('Aloe Vera', 'P001', 500);
console.log(Product1.totalPrice());
console.log(Product1.promoPrice(0.8));

let Product2 = new Product('Cactus', 'P002', 200);
console.log(Product2.totalPrice());
console.log(Product2.promoPrice(0.8));

// A partir de aqui deberian continuar declarandose el resto de los productos
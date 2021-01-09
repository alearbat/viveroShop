class Product {

  constructor(name, code, price, img){
    this.name = name;
    this.code = code;
    this.price = price;
    this.img = img;
  }

  totalPrice(){
    return this.price * 1.21;
  }

  promoPrice(discount){
    let totalPrice = this.totalPrice();
    return totalPrice * discount;
  }

  getProduct(){
    return (this.name, this.code, this.price, this.img);
  }
}

class Product {

  constructor(infoPlant){
    this.name = infoPlant[0];
    this.code = infoPlant[1];
    this.price = infoPlant[2];
    this.img = infoPlant[3];
  }

  totalPrice(){
    return this.price * 1.21;
  }

  promoPrice(discount){
    let totalPrice = this.totalPrice();
    return totalPrice * discount;
  }

  getProduct(){
    console.log(infoPlant);
  }
}

// class ShoppingCart {

//   constructor() {
//     this.cart = [];
//   }

/*  addNewProduct(product){
    this.cart.push(product);
  }

  changeQuantity(){
    //sumar o restar cantidad de un producto
  }

  removeFromCart(){
    //borrar un producto del carrito
  }

  calcTotalPrice(){
    //calcular la suma total de todos los productos del carrito
  }

  calcPromo(){
    //calcular alguna eventual promocion
  }

  calcDelivery(){
    //calcular cuanto saldria el delivery de los productos segun ubicacion
  }

  getTotalProducts(){
    return this.cart;
  }

}*/

const domBuilder = new DOMBuilder();

function buildProductList(product) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const code = domBuilder.h5(product.code);
    const title = domBuilder.h5(product.name);
    const image = domBuilder.img(product.image, product.name);
    const price = domBuilder.p(product.price);
    const quantity = domBuilder.h5('1');
    const buttonLess = domBuilder.button('-', '', );
    const buttonPlus = domBuilder.button('-', '', );


    li.classList.add('row');
    li.classList.add('align-items-center');
    li.appendChild(image);
    li.appendChild(code);
    li.appendChild(title);
    li.appendChild(div);
    div.appendChild(buttonLess);
    div.appendChild(quantity);
    div.appendChild(buttonPlus);
    li.appendChild(price);

    return li;
}

// {/* <li class="row align-items-center">
//   <img src="../img/cactus.jpg" alt="cactus" class="cart__img col-xl-1 col-md-1 col-sm-1 col-2">
//   <p class="name col-xl-7 col-md-7 col-sm-5 col-2">P002 - Cactus</p>
//   <div class="d-flex align-items-center quant col-xl-2 col-md-2 col-sm-2 col-2">
//     <button type="button">-</button>
//     <p>1</p>
//     <button type="button">+</button>
//   </div>
//   <h4 class="price col-xl-2 col-md-2 col-sm-1 col-2">$ 200.-</h4>
// </li> */}

// To add number of items to button "carrito(0)" at navbar
let numberOfItems = localStorage.getItem("Number of items");
const shoppingCartButton = document.getElementById('shoppingCart');
shoppingCartButton.textContent = ("Carrito (" + numberOfItems + ")");

function addNumberOfItems() {
    numberOfItems++;
    shoppingCartButton.textContent = ("Carrito (" + numberOfItems + ")");
    localStorage.setItem("Number of items", numberOfItems);
}
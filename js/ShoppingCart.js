const domBuilder = new DOMBuilder();

// To build each item of the shopping Cart list 
function buildProductList(product) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const codeAndTitle = domBuilder.h6(product.code + " - " + product.name);
    const image = domBuilder.img2(product.image, product.name);
    const price = domBuilder.p2(product.price);
    const quantity = domBuilder.quantity(units); // I still have to correct the quantity of selected items
    const buttonLess = domBuilder.button2('-'); // I still have to add functionality to this button
    const buttonPlus = domBuilder.button2('+'); // I still have to add functionality to this button
    const trash = domBuilder.trash();
    const trashi = document.createElement('i');

    li.className = 'row d-flex align-items-center justify-content-between';
    div.className = 'd-flex align-items-center justify-content-center quant col-xl-2 col-md-2 col-sm-2 col-2';
    trashi.className = 'fas fa-trash-alt';
    buttonLess.className = 'remove';
    buttonPlus.className = 'add';

    // Here I'm trying to add click event to trash button ???
    // trash.addEventListener('click', (event)=> {
    //   const selectedId = event.target.dataset; ??????
    //   }  
    //   removeProduct(selectedId);
    // });

    li.appendChild(image);
    li.appendChild(codeAndTitle);
    li.appendChild(div);
    div.appendChild(buttonLess);
    div.appendChild(quantity);
    div.appendChild(buttonPlus);
    li.appendChild(trash);
    trash.appendChild(trashi);
    li.appendChild(price);

    return li;
}

// To generate all cards
window.addEventListener('DOMContentLoaded', ()=> {  //when the DOM loads
  // To load the shopping cart list, if it exists
  selectedProducts.forEach(product=> {
    const cartCard = buildProductList(product);
    selectedProductsContainer.appendChild(cartCard);
  });
  calcTotalPrice();
});

// To add number of items to button "carrito(0)" at navbar
const shoppingCartButton = document.getElementById('shoppingCart');
shoppingCartButton.textContent = ("Carrito (" + selectedProducts.length + ")");

function addNumberOfItems() {
    shoppingCartButton.textContent = ("Carrito (" + selectedProducts.length + ")");
}

//To show the products selected
const selectedProductsContainer = document.getElementById('selectedProductsContainer');

function buildSelectedProducts() {
  const lastProduct = selectedProducts[selectedProducts.length-1];

  const card = buildProductList(lastProduct);
  selectedProductsContainer.appendChild(card);
}

// To empty shopping cart
const emptyCart = document.getElementById('emptyCart');
emptyCart.addEventListener('click', function onBtnClick(){
  // Resets counter on "Carrito()"
  selectedProducts = [];
  localStorage.setItem("Selected Products", []);
  shoppingCartButton.textContent = ("Carrito (" + selectedProducts.length + ")");
  // Deletes all <li> added before
  let list = document.getElementById('selectedProductsContainer');
  while (list.hasChildNodes()) {  
    list.removeChild(list.firstChild);
  }
  calcTotalPrice();
});

// To add units to an item
let units = 1;

// To remove units to an item


// To delete an item
function removeProduct(productId){
  for(let i=0; i<selectedProducts.length; i++) {
    if (selectedProducts[i].id == productId) {
      break;
    }
  }
  selectedProducts.splice(i, 1);
}  

// To calculate total price
function calcTotalPrice() {
  const totalPrice = document.getElementById('totalPrice');
  let productPrice = 0;
  if(!selectedProducts) {
    productPrice = 0;
  } else {
    selectedProducts.forEach(selectedProduct =>{
      let price = selectedProduct.price;
      productPrice += price;
      console.log(productPrice);
    });
    totalPrice.textContent = ('$ ' + productPrice);
  }
}

// Tareas pendientes:
// hacer que funcionen los botones de + y - unidades
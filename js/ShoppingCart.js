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

    // To add click event to trash button
    trash.addEventListener('click', () => {
      removeProduct(product.id);
    });

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

const selectedProductsContainer = $("#selectedProductsContainer");

$(window).ready(function() {showList()});//when the DOM loads, to load the shopping cart list, if it exists

// To add number of items to button "carrito(0)" at navbar
const shoppingCartButton = $("#shoppingCart");
shoppingCartButton.text("Carrito (" + selectedProducts.length + ")");

function addNumberOfItems() {
    shoppingCartButton.text("Carrito (" + selectedProducts.length + ")");
}

//To show the products selected
function showList() {
    selectedProductsContainer.empty();
  // To load the shopping cart list, if it exists
  selectedProducts.forEach(product=> {
    const cartCard = buildProductList(product);
    selectedProductsContainer.append(cartCard);
  });
  calcTotalPrice();
  addNumberOfItems();
}

// To empty shopping cart
const emptyCart = $("#emptyCart");

emptyCart.click(function empty(){
  // Resets counter on "Carrito()"
  selectedProducts = [];
  localStorage.setItem("Selected Products", []);
  shoppingCartButton.text("Carrito (" + selectedProducts.length + ")");
  // Deletes all <li> added before
  $("#selectedProductsContainer").empty();
  
  calcTotalPrice();
});

// To add units to an item
let units = 1;

// To remove units to an item


// To delete an item
function removeProduct(productId){
  let i;
  for(i=0; i<selectedProducts.length; i++) {
    if (selectedProducts[i].id == productId) {
      break;
    }
  }
  selectedProducts.splice(i, 1);
  localStorage.setItem("Selected Products", JSON.stringify(selectedProducts));
  showList();
}

// To calculate total price
function calcTotalPrice() {
  const totalPrice = $("#totalPrice");
  let productPrice = 0;
  if(!selectedProducts) {
    productPrice = 0;
  } else {
    selectedProducts.forEach(selectedProduct =>{
      let price = selectedProduct.price;
      productPrice += price;
      console.log(productPrice);
    });
    totalPrice.text('$ ' + productPrice);
  }
}

// Tareas pendientes:
// hacer que funcionen los botones de + y - unidades
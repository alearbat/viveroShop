let selectedProducts = localStorage.getItem("Selected Products");
 if(!selectedProducts) {
   selectedProducts = [];
} else {
  selectedProducts = JSON.parse(selectedProducts);
}

// To save on localStorage the selected products
function saveLocal() {
  localStorage.setItem("Selected Products", JSON.stringify(selectedProducts));
}

const domBuilder = new DOMBuilder();

// To build each item of the shopping Cart list 
function buildProductList(product) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const codeAndTitle = domBuilder.h6(product.code + " - " + product.name);
    const image = domBuilder.img2(product.image, product.name);
    const price = domBuilder.p2(product.price * product.units);
    const quantity = domBuilder.quantity(product.units); // I still have to correct the quantity of selected items
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

    //To remove 1 unit to an item
    buttonLess.addEventListener('click', () => {
      removeOne(product.id);
    });

    //To remove 1 unit to an item
    buttonPlus.addEventListener('click', () => {
      addOne(product.id);
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

// To display hide or show element when cart isn't / is empty
function showNotEmpty(){
  $(".noItem").hide();
  $(".emptyCart").show();
  $(".name").show();
  $(".price").show();
} 
function showEmpty(){
  $(".noItem").show(1000);
  $(".emptyCart").hide(1000);
  $(".name").hide(500);
  $(".price").hide(500);
} 

// To generate all cards
const selectedProductsContainer = $("#selectedProductsContainer");

// To calculate number of total units
let totalUnits;
function totalQ() {
  totalUnits = 0;
  if(selectedProducts.length > 0) {
    for(let i = 0; i<selectedProducts.length; i++){
    let count = selectedProducts[i].units;
    totalUnits = totalUnits + count;
    }
  }
}

// To add number of items to button "carrito(0)" at navbar
const shoppingCartButton = $("#shoppingCart");
totalQ();
shoppingCartButton.text("Carrito (" + totalUnits + ")");

function addNumberOfItems() {
  totalQ(); 
  shoppingCartButton.text("Carrito (" + totalUnits + ")");
}

//To show the products selected (add message if no products)
function showList() {
  selectedProductsContainer.empty();
  // To load the shopping cart list, if it exists
  selectedProducts.forEach(product=> {
    const cartCard = buildProductList(product);
    selectedProductsContainer.append(cartCard);
  });
  if (selectedProducts.length > 0) {
    showNotEmpty();
  } else {
    showEmpty();
  }
  calcTotalPrice();
  addNumberOfItems();
} 

showList();

// To empty shopping cart
const emptyCart = $(".emptyCart");

emptyCart.click(function empty(){
  // Resets counter on "Carrito()"
  selectedProducts = [];
  saveLocal();
  shoppingCartButton.text("Carrito (" + selectedProducts.length + ")");
  // Deletes all <li> added before
  $("#selectedProductsContainer").empty();
  showEmpty();
  calcTotalPrice();
});

// To add 1 unit to an item
function addOne(productId) {
  let i;
  for(i=0; i<selectedProducts.length; i++) {
    if (selectedProducts[i].id == productId) {
      break;
    }
  }
  selectedProducts[i].units++;
  localStorage.setItem("Selected Products", JSON.stringify(selectedProducts));
  showList();
}

// To remove 1 unit to an item
function removeOne(productId) {
  let i;
  for(i=0; i<selectedProducts.length; i++) {
    if (selectedProducts[i].id == productId) {
      break;
    }
  }
  selectedProducts[i].units--;
  // To remove product if there are no units
  if (selectedProducts[i].units == 0){
    removeProduct(selectedProducts[i].id);
  }
  saveLocal();
  showList();
}

// To delete an item
function removeProduct(productId){
  let i;
  for(i=0; i<selectedProducts.length; i++) {
    if (selectedProducts[i].id == productId) {
      break;
    }
  }
  selectedProducts.splice(i, 1);
  saveLocal();
  showList();
}

// To calculate total price
function calcTotalPrice() {
  const totalPrice = $("#totalPrice");
  let productPrice = 0;
  if(selectedProducts.length > 0) {
    selectedProducts.forEach(selectedProduct =>{
      let price = selectedProduct.price * selectedProduct.units;
      productPrice += price;
    });
  }
  totalPrice.text('$ ' + productPrice);
}

//To redirect to home
$(".submit").click(function(e){
  e.preventDefault();
  $(".modal-content").slideUp(500);
  setTimeout(() => {
    location.href = "../index.html";
    }, 500);
});

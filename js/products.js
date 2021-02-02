let selectedProducts = localStorage.getItem("Selected Products");
 if(!selectedProducts) {
   selectedProducts = [];
} else {
  selectedProducts = JSON.parse(selectedProducts);
}

let products = [];

const domBuilder = new DOMBuilder();

// To build the card which contains each product
function buildProductCard(product) {
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const title = domBuilder.h5(product.name);
    const image = domBuilder.img(product.image, product.name);
    const price = domBuilder.p(product.price);
    const button = domBuilder.button('Agregar al carrito', product.id);

    div.classList.add('card');
    div2.classList.add('card-body');
    
    //To add function to button when clicked
    button.addEventListener('click', () => {
        onSelectClick(product.id);
    });

    div.appendChild(image);
    div.appendChild(div2);
    div2.appendChild(title);
    div2.appendChild(price);
    div2.appendChild(button);

    return div;
}

// To call data.json
$(window).ready(function() { //when the DOM loads
    $.ajax({
        url: "js/data.json",
        datatype: "json",
        success: function(data) {
            products = data;
            showProducts();
        }
    });
});

// To generate all cards
function showProducts() {
    const productContainer = $("#productContainer");  //  const productContainer is generated, which represents this section
    productContainer.empty();    
    products.forEach(product=> {  // from data.js, products array, for each product:
        const card = buildProductCard(product); // it buids una card taking the structure writen inside the function buildProductCard
        productContainer.append(card); // it's saved inside the section "productContainer"
    });
}

// To add an item to "selectedProducts" by clicking the button
function onSelectClick(productId) {
    const selectedId = productId;
    
    let selectedProduct = {};
    for(let product of products){
        if(parseInt(product.id) === parseInt(selectedId)) {
            selectedProduct = product;
            break;
        }
    }
    let found = false;
    for(let entry of selectedProducts) {  
        if(parseInt(selectedProduct.id) === parseInt(entry.id)){ //If selectedProduct exists at selectedProducts array:
            entry.units ++;
            found = true;
            break;
        }
    } //If selectedProduct doesn't exist at selectedProducts array:
    if (!found) {
        const productToAdd = Object.assign({}, selectedProduct);
        productToAdd.units = 1;
        selectedProducts.push(productToAdd);
    }
    localStorage.setItem("Selected Products", JSON.stringify(selectedProducts));
    addNumberOfItems();
}

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

// To sort items by Name
function sortByName() {
    products.sort(function(a,b) {
        if(a.name < b.name) {
            return -1;
        }
        return 1;
    });
    showProducts();
} 

//To sort items by max price
function sortByMaxPrice() {
    products.sort(function(a,b) {
        if(a.price > b.price) {
            return -1;
        }
        return 1;
    });
    showProducts();
}

//To sort items by min price
function sortByMinPrice() {
    products.sort(function(a,b) {
        if(a.price < b.price) {
            return -1;
        }
        return 1;
    });
    showProducts();
}
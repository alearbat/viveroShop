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

    div.appendChild(image);
    div.appendChild(div2);
    div2.appendChild(title);
    div2.appendChild(price);
    div2.appendChild(button);

    return div;
}

// To generate all cards
window.addEventListener('DOMContentLoaded', ()=> {  //when the DOM loads
    const productContainer = document.getElementById('productContainer');  //  let productContainer is generated, which represents this section
    
    products.forEach(product=> {  // from data.js, products array, for each product:
        const card = buildProductCard(product); // it buids una card taking the structure writen inside the function buildProductCard
        productContainer.appendChild(card); // it's saved inside the section "productContainer"
    });

    // To access to buttons
    const btnProducts = document.querySelectorAll('.btnProduct'); //let btnProducts is generated for all the selectors with this class
    btnProducts.forEach(btnProduct => { // for each of this elements:
        btnProduct.addEventListener('click', onSelectClick); // executes onSelectedClick function on event click
    });

});

// To add an item to "selectedProducts" by clicking the button
function onSelectClick(event) {
    const selectedId = event.target.dataset.id;
    
    let selectedProduct = {};
    products.forEach(product => {
        if(parseInt(product.id) === parseInt(selectedId)) {
            selectedProduct = product;
        }
    });

    selectedProducts.push(selectedProduct);
    localStorage.setItem("Selected Products", JSON.stringify(selectedProducts));

    addNumberOfItems();
}

// To add number of items to button "carrito(0)" at navbar
const shoppingCartButton = document.getElementById('shoppingCart');
shoppingCartButton.textContent = ("Carrito (" + selectedProducts.length + ")");

function addNumberOfItems() {
    shoppingCartButton.textContent = ("Carrito (" + selectedProducts.length + ")");
}


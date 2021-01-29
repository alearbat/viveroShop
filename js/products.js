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
$(window).ready(function() { 
 //when the DOM loads
    const productContainer = $("#productContainer");  //  const productContainer is generated, which represents this section
    
    products.forEach(product=> {  // from data.js, products array, for each product:
        const card = buildProductCard(product); // it buids una card taking the structure writen inside the function buildProductCard
        productContainer.append(card); // it's saved inside the section "productContainer"
    });

    $(".btnProduct").click(onSelectClick);
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
const shoppingCartButton = $("#shoppingCart");
shoppingCartButton.text("Carrito (" + selectedProducts.length + ")");

function addNumberOfItems() {
    shoppingCartButton.text("Carrito (" + selectedProducts.length + ")");
}


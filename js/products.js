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

// // To build each item of the shopping Cart list 
// function buildProductList(product) {
//     const li = document.createElement('li');
//     const div = document.createElement('div');
//     const codeAndTitle = domBuilder.h6(product.code + " - " + product.name);
//     const image = domBuilder.img2(product.image, product.name);
//     const price = domBuilder.p2(product.price);
//     const quantity = domBuilder.h5('1'); // I still have to correct the quantity of selected items
//     const buttonLess = domBuilder.button2('-'); // I still have to add functionality to this button
//     const buttonPlus = domBuilder.button2('+'); // I still have to add functionality to this button

//     li.className = 'row align-items-center justify-content-between';
//     div.className = 'd-flex align-items-center quant col-xl-2 col-md-2 col-sm-2 col-2';

//     li.appendChild(image);
//     li.appendChild(codeAndTitle);
//     li.appendChild(div);
//     div.appendChild(buttonLess);
//     div.appendChild(quantity);
//     div.appendChild(buttonPlus);
//     li.appendChild(price);

//     return li;
// }

// To generate all cards
window.addEventListener('DOMContentLoaded', ()=> {  //when the DOM loads
    const productContainer = document.getElementById('productContainer');  //  let productContainer is generated, which represents this section
    
    // if(productContainer) {
        products.forEach(product=> {  // from data.js, products array, for each product:
            const card = buildProductCard(product); // it buids una card taking the structure writen inside the function buildProductCard
            productContainer.appendChild(card); // it's saved inside the section "productContainer"
        });

        // To access to buttons
        const btnProducts = document.querySelectorAll('.btnProduct'); //let btnProducts is generated for all the selectors with this class
        btnProducts.forEach(btnProduct => { // for each of this elements:
            btnProduct.addEventListener('click', onSelectClick); // executes onSelectedClick function on event click
        });
    

    // To load the shopping cart list, if it exists
    // selectedProducts.forEach(product=> {
    //     const cartCard = buildProductList(product);
    //     selectedProductsContainer.appendChild(cartCard);
    // });

    // calcTotalPrice();
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

    //buildSelectedProducts();
    addNumberOfItems();
    //calcTotalPrice();
}

//To show the products selected
// const selectedProductsContainer = document.getElementById('selectedProductsContainer');

// function buildSelectedProducts() {
//     const lastProduct = selectedProducts[selectedProducts.length-1];

//     const card = buildProductList(lastProduct);
//     selectedProductsContainer.appendChild(card);
//}

// To add number of items to button "carrito(0)" at navbar
const shoppingCartButton = document.getElementById('shoppingCart');
shoppingCartButton.textContent = ("Carrito (" + selectedProducts.length + ")");

function addNumberOfItems() {
    shoppingCartButton.textContent = ("Carrito (" + selectedProducts.length + ")");
}

// To empty shopping cart
// const emptyCart = document.getElementById('emptyCart');
// if(emptyCart){
//     emptyCart.addEventListener('click', function onBtnClick(){
//         // Resets counter on "Carrito()"
//         selectedProducts = [];
//         localStorage.setItem("Selected Products", []);
//         shoppingCartButton.textContent = ("Carrito (" + selectedProducts.length + ")");
//         // Deletes all <li> added before
//         var list = document.getElementById('selectedProductsContainer');
//         while (list.hasChildNodes()) {  
//             list.removeChild(list.firstChild);
//         }
//         calcTotalPrice();
//     })
// To calculate total price
// function calcTotalPrice() {
//     const totalPrice = document.getElementById('totalPrice');
//     let productPrice = 0;
//     if(!selectedProducts) {
//         productPrice = 0;
//     } else {
//         selectedProducts.forEach(selectedProduct =>{
//             let price = selectedProduct.price;
//             productPrice += price;
//             console.log(productPrice);
//         });
//         totalPrice.textContent = ('$ ' + productPrice);
//     }
// }
//}
// Tareas pendientes:
// hacer que funcionen los botones de + y - unidades


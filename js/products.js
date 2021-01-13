const domBuilder = new DOMBuilder();

function buildProductCard(product) {
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const title = domBuilder.h5(product.name);
    const image = domBuilder.img(product.image, product.name);
    const price = domBuilder.p(product.price);
    const button = domBuilder.button('Agregar al carrito', 'btnProduct', product.id);

    div.classList.add('card');
    div2.classList.add('card-body');
    div.appendChild(image);
    div.appendChild(div2);
    div2.appendChild(title);
    div2.appendChild(price);
    div2.appendChild(button);

    return div;
}

function buildSelectedProducts() {
    const selectedProductsContainer = document.getElementById('selectedProductsContainer');
    const lastProduct = selectedProducts[selectedProducts.length-1];

    const card = buildProductCard(lastProduct);
    selectedProductsContainer.appendChild(card);
}

function onSelectClick(event) {
    const selectedId = event.target.dataset.id;
    
    let selectedProduct = {};
    products.forEach(product => {
        if(parseInt(product.id) === parseInt(selectedId)) {
            selectedProduct = product;
        }
    });

    selectedProducts.push(selectedProduct);
    buildSelectedProducts();
}

// To generate all cards
window.addEventListener('DOMContentLoaded', ()=> {
    const productContainer = document.getElementById('productContainer');
    
    products.forEach(product=> {
        const card = buildProductCard(product);
        productContainer.appendChild(card);
    });

    const btnProducts = document.querySelectorAll('.btnProduct');
    btnProducts.forEach(btnProduct => {
        btnProduct.addEventListener('click', onSelectClick);
    })
});
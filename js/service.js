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
const shoppingCartButton = document.getElementById("shoppingCart");
totalQ();
shoppingCartButton.textContent = ("Carrito (" + totalUnits + ")");
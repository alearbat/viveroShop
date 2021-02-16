let selectedProducts = localStorage.getItem("Selected Products");
 if(!selectedProducts) {
   selectedProducts = [];
} else {
  selectedProducts = JSON.parse(selectedProducts);
}

let totalUnits;
function totalQ() {
  totalUnits = 0;
  if(selectedProducts.length > 0) {
    for(let i = 0; i<selectedProducts.length; i++) {
      let count = selectedProducts[i].units;
      totalUnits = totalUnits + count;
    }
  }
}

// To add number of items to button "carrito(0)" at navbar
const shoppingCartButton = document.getElementById("shoppingCart");
totalQ();
shoppingCartButton.textContent = ("Carrito (" + totalUnits + ")");

$('#bootstrapForm').submit(function (event) {
  event.preventDefault()
  var extraData = {}
  $('#bootstrapForm').ajaxSubmit({
    data: extraData,
    dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
    error: function () {
      // Submit of form should be successful but JSONP callback will fail because Google Forms
      // does not support it, so this is handled as a failure.
      alert('Form Submitted. Thanks.')
    }
  })
})
const DOMBuilder = function() {
    this.img = function(src, tag) {
    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = src;
    img.setAttribute('alt', tag);

    return img;
  }

  this.img2 = function(src, tag) {
    const img = document.createElement('img');
    img.className ='cart__img col-xl-1 col-md-1 col-sm-1 col-12';
    img.src = src;
    img.setAttribute('alt', tag);

    return img;
  }
  
  this.h5 = function(title) {
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.textContent = title;

    return h5;
  }

  this.h6 = function(title) {
    const h6 = document.createElement('h6');
    h6.className = 'name col-xl-5 col-md-5 col-sm-5 col-4';
    h6.textContent = title;

    return h6;
  }

  this.quantity = function(units) {
    const h6 = document.createElement('h6');
    h6.className = 'quant col-xl-2 col-md-2 col-sm-2 col-2';
    h6.textContent = units;

    return h6;
  }

  this.trash = function () {
    const a = document.createElement('a');
    a.className = 'deleteItem col-xl-1 col-md-1 col-sm-1 col-1';
    a.style = 'cursor: pointer; padding:20px';

    return a;
  }

  this.p = function(content) {
    const p = document.createElement('p');
    p.className = 'card-text';
    p.textContent = ("$ " + content);
    
    return p;
  }

  this.p2 = function(content) {
    const p = document.createElement('p');
    p.className = 'price col-xl-2 col-md-2 col-sm-2 col-4';
    p.textContent = ("$ " + content);

    return p;
  }

  this.button = function(content, id) {
    const button = document.createElement('button');
    button.textContent = content;
    button.className ='btnProduct btn btn-primary';
    button.setAttribute('data-id', id); // To add data-id atribute to button, to know which product is selected
    
    return button;
  }

  this.button2 = function(content) {
    const button = document.createElement('button');
    button.textContent = content;
    button.style = 'cursor: pointer';
    
    return button;
  }
}

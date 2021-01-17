const DOMBuilder = function() {
    this.img = function(src, tag) {
    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = src;
    img.setAttribute('alt', tag);

    return img;
  }

  this.img2 = function(src, tag) {
    const img = document.createElement('img');
    img.classList.add('cart__img');
    img.classList.add('col-xl-1');
    img.classList.add('col-md-1');
    img.classList.add('col-sm-1');
    img.classList.add('col-2');
    img.src = src;
    img.setAttribute('alt', tag);

    return img;
  }
  
  this.h5 = function(title) {
      const h5 = document.createElement('h5');
      h5.classList.add('card-title');
      h5.textContent = title;

      return h5;
  }

  this.h6 = function(title) {
    const h6 = document.createElement('h6');
    h6.className = 'name col-xl-4 col-md-4 col-sm-4 col-4';
    h6.textContent = title;

    return h6;
}

  this.p = function(content) {
      const p = document.createElement('p');
      p.classList.add('card-text');
      p.textContent = ("$ " + content);
      
      return p;
  }

  this.p2 = function(content) {
      const p = document.createElement('p');
      p.className = 'price col-xl-2 col-md-2 col-sm-2 col-2';
      p.textContent = ("$ " + content);

      return p;
  }

  this.button = function(content, className, id) {
      const button = document.createElement('button');
      button.textContent = content;
      button.classList.add(className);
      button.classList.add('btn');
      button.classList.add('btn-primary');
      button.setAttribute('data-id', id); // To add data-id atribute to button, to know which product is selected
      
      return button;
  }

  this.button2 = function(content) {
    const button = document.createElement('button');
    button.textContent = content;
    
    return button;
}
}

const DOMBuilder = function() {
    this.img = function(src, tag) {
    const img = document.createElement('img');
    img.classList.add('card-img-top');
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

  this.p = function(content) {
      const p = document.createElement('p');
      p.classList.add('card-text');
      p.textContent = ("$ " + content);
      
      return p
  }

  this.button = function(content, className, id) {
      const button = document.createElement('button');
      button.textContent = content;
      button.classList.add(className);
      button.classList.add('btn');
      button.classList.add('btn-primary');
      button.setAttribute('data-id', id)
      return button;
  }    
}
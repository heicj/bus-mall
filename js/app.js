'use strict';

//constructor for images 
function Product(name, src) {
    this.name = name;
    this.src = '/images/' + src;
    this.timesClicked = 0;
    this.timesShown = 0;
}
'/images/bag.jpg;'
const bag = new Product('bag', 'bag.jpg');
console.log(bag);


Product.prototype.render = function (){
    const section = document.getElementById('productChoices');
    const ele = document.createElement('img');
    ele.src = bag.src;
    section.appendChild(ele);
    
}

bag.render();
console.log(bag);
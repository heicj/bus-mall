'use strict';

//constructor for images 
function Product(name, src) {
    this.name = name;
    this.src = '/images/' + src;
    this.timesClicked = 0;
    this.timesShown = 0;
}

const products = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

for(let i = 0; i < products.length; i++){
    products[i] = new Product(products[i], products[i] + '.jpg');
    
}

// const bag = new Product('bag', 'bag.jpg');
// const banana = new Product('banana', 'banana.jpg');
// const bathroom = new Product('bathroom', 'bathroom.jpg');
// const boots = new Product('boots', 'boots.jpg');
// const breakfast = new Product('breakfast', 'breakfast.jpg');
// const bubblegum = new Product('bubblegum', 'bubblegum.jpg');
// const chair = new Product('chair', 'chair.jpg');
// const cthulhu = new Product('cthulhu', 'cthulhu.jpg');
// const dogDuck = new Product('dog-duck','dog-duck.jpg');
// const dragon = new Product('dragon','dragon.jpg');
// const pen = new Product()

//render method for Product
Product.prototype.render = function (){
    const section = document.getElementById('productChoices');
    const ele = document.createElement('img');
    ele.src = bag.src;
    section.appendChild(ele);
};

bag.render();
console.log(products);
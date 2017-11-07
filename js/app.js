'use strict';
let totalClicks = 0;

//constructor for images 
function Product(name, src) {
    this.name = name;
    this.src = '/images/' + src;
    this.timesClicked = 0;
    this.timesShown = 0;
}

const products = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

//creates instances of each product
for(let i = 0; i < products.length; i++){
    products[i] = new Product(products[i], products[i] + '.jpg');
}





//render method for Product
Product.prototype.render = function (){
    const section = document.getElementById('productChoices');
    const ele = document.createElement('img');
    ele.src = this.src;
    section.appendChild(ele);
    ele.classList.add(this.name);
};

// products[0].render();
console.log(products[0]);
// function randomThree (){
//     const availProducts = products;
//     const threeProducts = [];
//     const randomNumber = Math.floor((Math.random() * products.length));
//     for(let i = 0; i < 3; i++){
//         const randomProduct = products[randomNumber];
//         threeProducts.push(randomProduct);
//         availProducts.
//     }

// }
// randomThree();


function threeRandomNumbers(){
    const numbers = [];
    for(let i = 0; numbers.length < 3; i++){
        const randomNumber = Math.floor((Math.random() * products.length));
        if(randomNumber !== numbers.includes[randomNumber]){
            numbers.push(randomNumber);
        }
    }
    products[numbers[0]].render();
    products[numbers[0]].timesShown++;
    products[numbers[1]].render();
    products[numbers[1]].timesShown++;
    products[numbers[2]].render();
    products[numbers[2]].timesShown++;
}



console.log(threeRandomNumbers());



Product.prototype.wasClicked = function () {
    this.timesClicked ++;
};

const vote = document.getElementById('productChoices');
vote.addEventListener('click', clickHandler);

function clickHandler(e){
    const clickedProduct = e.target;
    if (clickedProduct.id === 'productChoices'){
        console.log(clickedProduct);
        return;
    }

    for(let i = 0; i < products.length; i++){
        const productClass = clickedProduct.classList.value;

        if(products[i].name === productClass){
            products[i].wasClicked();
            console.log(products[i].timesClicked);
        }
    }
    // threeRandomNumbers();
}
console.log(products[0]);
totalClicks++;
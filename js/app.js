'use strict';
let totalClicks = 0;

//constructor for images 
function Product(name, src) {
    this.name = name;
    this.src = './images/' + src;
    this.timesClicked = 0;
    this.timesShown = 0;
}

const products = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

//creates instances of each product
for(let i = 0; i < products.length; i++){
    if(products[i] === 'usb' ){
        products[i] = new Product(products[i], products[i] + '.gif');
    }else if (products[i] === 'sweep'){
        products[i] = new Product(products[i], products[i] + '.png');
    }else{
        products[i] = new Product(products[i], products[i] + '.jpg');
    }
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


function threeRandomNumbers(){
    const numbers = [];
    while (numbers.length < 3){
        const randomNumber = Math.floor((Math.random() * products.length));
        if(randomNumber !== numbers.includes[randomNumber]){
            numbers.push(randomNumber);

        }
    }
    // for(let i = 0; numbers.length < 3; i++){
    //     const randomNumber = Math.floor((Math.random() * products.length));
    //     if(randomNumber !== numbers.includes[randomNumber]){
    //         numbers.push(randomNumber);
    //     }
    // }
    console.log(numbers);
    products[numbers[0]].render();
    products[numbers[0]].timesShown++;
    products[numbers[1]].render();
    products[numbers[1]].timesShown++;
    products[numbers[2]].render();
    products[numbers[2]].timesShown++;
}

// threeRandomNumbers();

console.log(threeRandomNumbers());


// products.sweep.src = './images/sweep.png';
// console.log(products.sweep);

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


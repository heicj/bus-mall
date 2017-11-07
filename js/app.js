'use strict';

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
    ele.classList.add(this.type);
};

products[0].render();






// bag.render();
console.log(products);

// function RenderThree (){
//     const threeObjects = [];
//     const threeNames = [];
//     for (let i = 0; threeNames.length < 3; i++){
//         const randomNumber = Math.floor((Math.random() * products.length));
//         const productObject = products[randomNumber];
//         const productName = products[randomNumber].name;
//         threeNames.push(productName);
//         if(productName !== threeNames.includes(productName)){
//             threeObjects.push(productObject);
//         }
//     }
//     // return three;
//     for (let i = 0; i < 3; i++){
//         const section = document.getElementById('productChoices');
//         const ele = document.createElement('img');
//         ele.src = threeObjects[i].src;
//         debugger;
//         section.appendChild(ele);
//         return ele;
//     }
// }

// // console.log(RenderThree());
// RenderThree();

Product.prototype.wasClicked = function () {
    this.timesClicked ++;
};

const vote = document.getElementById('productChoices');
vote.addEventListener('click', clickHandler);

function clickHandler(e){
    const clickedProduct = e.target;
    if (clickedProduct.id === 'productChoices'){
        console.log(clickedProduct.id);
        return;
    }

    for(let i = 0; i < products.length; i++){
        const productClass = clickedProduct.classList.value;

        if(products[i].type === productClass){
            products[i].wasClicked();
            console.log(products[i].timesClicked);
        }
    }
}
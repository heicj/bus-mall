'use strict';
let totalClicks = 0;

//constructor for images 
function Product(name, src, timesClicked, timesShown) {
    this.name = name;
    this.src =  src;
    this.timesClicked = timesClicked || 0;
    this.timesShown = timesShown || 0;
}

const products = [];

if(localStorage.products){
    console.log('products exist');
    const productsArray = JSON.parse(localStorage.products);
    for (let i = 0; i < productsArray.length; i++){
        if(productsArray[i] === 'usb' ){
            productsArray[i] = new Product(productsArray[i].name, productsArray[i].src, productsArray[i].timesClicked, productsArray[i].timesShown);
            products.push(productsArray[i]);
        }else if (productsArray[i] === 'sweep'){
            productsArray[i] = new Product(productsArray[i].name, productsArray[i].src, productsArray[i].timesClicked, productsArray[i].timesShown);
            products.push(productsArray[i]);
        }else{
            productsArray[i] = new Product(productsArray[i].name, productsArray[i].src, productsArray[i].timesClicked, productsArray[i].timesShown);
            products.push(productsArray[i]);
        }
    }
}else{
//creates instances of each product
    const productsName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
    for(let i = 0; i < productsName.length; i++){

        if(productsName[i] === 'usb' ){
            products[i] = new Product(productsName[i], 'images/usb.gif');
        }else if (productsName[i] === 'sweep'){
            products[i] = new Product(productsName[i], 'images/sweep.png');
        }else{
            products[i] = new Product(productsName[i], 'images/' + productsName[i] + '.jpg');
        }
    } console.table(products);

}



//render method for Product
Product.prototype.render = function (){
    const section = document.getElementById('productChoices');
    const ele = document.createElement('img');
    ele.src = this.src;
    section.appendChild(ele);
    ele.classList.add(this.name);
};



console.log(products);

function threeRandomNumbers(){
    const numbers = [];
    while (numbers.length < 3){
        const randomNumber = Math.floor((Math.random() * products.length));
        if(!numbers.includes(randomNumber)){
            numbers.push(randomNumber);

        }
    }
    console.log(numbers);
    products[numbers[0]].render();
    products[numbers[0]].timesShown++;
    products[numbers[1]].render();
    products[numbers[1]].timesShown++;
    products[numbers[2]].render();
    products[numbers[2]].timesShown++;
}
threeRandomNumbers();


function endgame() {
    const game = document.getElementById('productChoices');
    game.removeEventListener('click', clickHandler);
    console.table(products);
    alert('You have used all your votes');
    drawChart('percentage');
    drawChart('absolute');
    localStorage.setItem('products', JSON.stringify(products));
}



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
    //remove node code from:  https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    const myNode = document.getElementById('productChoices');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    threeRandomNumbers();
    totalClicks++;
    if (totalClicks >= 25){
        endgame();
    }
}





function drawChart(chartType){
    const productNames = [];
    const productData = [];
    for (let i = 0; i < products.length; i++){
        productNames.push(products[i].name);
        if(chartType === 'percentage'){
            const percent = Math.round((products[i].timesClicked / products[i].timesShown) * 100);
            productData.push(percent);
        }else{
            productData.push(products[i].timesClicked);
        }
    }
    const canvas = document.getElementById(chartType + 'canvas');
    const context = canvas.getContext('2d');
    let chartTitle = '';
    if (chartType === 'percentage'){
        chartTitle = 'Clicked on Percentage';
    }else{
        chartTitle = 'Votes';
    }

    const chart = new Chart(
        context,
        {
            type: 'bar',
            data: {
                labels: productNames,
                datasets:[
                    {
                        label: chartType,
                        data: productData,
                        backgroundColor: 'rgb(255, 255, 255)'
                    }
                ]

            },
            options: {
                title: {
                    display: true,
                    text: chartTitle
                }
            }

        }
    );

}

// function drawChart(){
//     const productNames = [];
//     const productPercent = [];
//     for (let i = 0; i < products.length; i++){
//         productNames.push(products[i].name);
//         const percent = Math.round((products[i].timesClicked / products[i].timesShown) * 100);
//         productPercent.push(percent);
//     }
//     const percentCanvas = document.getElementById('percentCanvas');
//     const percentContext = percentCanvas.getContext('2d');

//     const chart = new Chart(
//         percentContext,
//         {
//             type: 'bar',
//             data: {
//                 labels: productNames,
//                 datasets:[
//                     {
//                         label: 'Clicked on Percentage',
//                         data: productPercent,
//                         backgroundColor: 'rgba(30,100,100,1)'
//                     }
//                 ]

//             },
//             options: {
//                 title: {
//                     display: true,
//                     text: 'Percentage of times voted for when shown'
//                 }
//             }

//         }
//     );

// }
// const title = document.getElementById('title');
// const description = document.getElementById('description');
// const price = document.getElementById('price');
// const category = document.getElementById('category');
// const brand = document.getElementById('brand');
// const color = document.getElementById('color');
// const quantity = document.getElementById('quantity');
// const addproductbtn = document.getElementById('addproductbtn');
// const productList = document.getElementById('productList');

// addproductbtn.addEventListener('click', () => {

//     let data = JSON.parse(localStorage.getItem('products')) || [];

//     data.push({
//         title: title.value,
//         description: description.value,
//         price: price.value,
//         category: category.value,
//         brand: brand.value,
//         color: color.value,
//         quantity: quantity.value,
//     });

//     localStorage.setItem('products', JSON.stringify(data));

//     loaddata();

//     title.value = "";
//     description.value = "";
//     price.value = "";
//     category.value = "";
//     brand.value = "";
//     color.value = "";
//     quantity.value = "";

//     alert('Product added successfully!');
// });

// function addtocart(product){
//   console.log("click");
//   let carts = JSON.parse(localStorage.getItem('cartdata')) || [];
//   carts.push(JSON.parse(product));
//   localStorage.setItem('cartdata ',JSON.stringify(carts));
  
// }

// const loaddata = () => {
//     const data = JSON.parse(localStorage.getItem('products')) || [];

//     productList.innerHTML = "";

//     data.forEach((prod) => {
//         const card = document.createElement('div');
//         card.classList.add('card', 'mb-3');
//         card.innerHTML = `
//           <div class="card-body">
//             <h5 class="card-title">${prod.title}</h5>
//             <p class="card-text">Description: ${prod.description}</p>
//             <p class="card-text">Price: $${prod.price}</p>
//             <p class="card-text">Category: ${prod.category}</p>
//             <p class="card-text">Brand: ${prod.brand}</p>
//             <p class="card-text">Color: ${prod.color}</p>
//             <p class="card-text">Quantity: ${prod.quantity}</p>
//             <a href="#" class="btn btn-primary(${JSON.stringify([prod])})">Add to Cart</a>
//           </div>
//         `;
//         productList.appendChild(card);
//     });
// };

// loaddata();


// Right

const title = document.getElementById('title');
const description = document.getElementById('description');
const price = document.getElementById('price');
const category = document.getElementById('category');
const brand = document.getElementById('brand');
const color = document.getElementById('color');
const quantity = document.getElementById('quantity');
const addproductbtn = document.getElementById('addproductbtn');
const productList = document.getElementById('productList');
const carts = document.getElementById('carts');

addproductbtn.addEventListener('click', () => {
    let data = JSON.parse(localStorage.getItem('products')) || [];

    data.push({
        title: title.value,
        description: description.value,
        price: price.value,
        category: category.value,
        brand: brand.value,
        color: color.value,
        quantity: quantity.value,
    });

    localStorage.setItem('products', JSON.stringify(data));

    loaddata();

    title.value = "";
    description.value = "";
    price.value = "";
    category.value = "";
    brand.value = "";
    color.value = "";
    quantity.value = "";

    alert('Product added successfully!');
});

function addtocart(product) {
    let cartData = JSON.parse(localStorage.getItem('cartdata')) || [];
    cartData.push(product);
    localStorage.setItem('cartdata', JSON.stringify(cartData));
    alert(`Product ${product.title} added to cart!`);
    loadcartdata();
}

const loaddata = () => {
    const data = JSON.parse(localStorage.getItem('products')) || [];
    productList.innerHTML = "";

    data.forEach((prod, index) => {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');
        card.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${prod.title}</h5>
            <p class="card-text">Description: ${prod.description}</p>
            <p class="card-text">Price: $${prod.price}</p>
            <p class="card-text">Category: ${prod.category}</p>
            <p class="card-text">Brand: ${prod.brand}</p>
            <p class="card-text">Color: ${prod.color}</p>
            <p class="card-text">Quantity: ${prod.quantity}</p>
            <button class="btn btn-primary" onclick='addtocart(${JSON.stringify(prod)})'>Add to Cart</button>
          </div>
        `;
        productList.appendChild(card);
    });
};

const loadcartdata = () => {
    const cartData = JSON.parse(localStorage.getItem('cartdata')) || [];
    carts.innerHTML = "";

    cartData.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `Title:- ${item.title} - Description:-  $${item.price} - Price:- ${item.description} - Category:- ${item.category} - Brand:-  ${item.brand} - Color:- ${item.color} - Quantity:-  ${item.quantity}`;
        carts.appendChild(li);
    });
};
// function addToCart() {
//   cartCount++;
//   updateCartCount();
// }

// setInterval(addToCart, 5000);
loaddata();
loadcartdata();
 
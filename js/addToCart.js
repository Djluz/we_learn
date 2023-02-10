let cart = JSON.parse(localStorage.getItem('cart')) || [];
let badge = document.querySelector('#badge');
let tableBody = document.querySelector('#cart-table-body');

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      let card = button.closest('.card');
      let title = card.querySelector('.card-title').textContent;
      let description = card.querySelector('.card-text').textContent;
      let image = card.querySelector('.card-img-top').src;
      let price = card.querySelector('.card-price').textContent;
      
      let cartItem = {
        title: title,
        description: description,
        image: image,
        price: price
      };
      
      cart.push(cartItem);
      localStorage.setItem('cart', JSON.stringify(cart));

      tableBody.innerHTML = '';

      displayCartItems();

      updateBadge();
    });
});

function displayCartItems() {
    cart.forEach(function(item) {
      let row = `
        <tr>
          <td><img src="${item.image}" alt="" class="d-none d-sm-block" style="width: 50px; height: 50px;"></td>
          <td>${item.title}</td>
          <td>${item.description.substr(0, 50)}...</td>
          <td>${item.price}</td>
          <td><button class="btn btn-danger delete-from-cart">Delete</button></td>
        </tr>
      `;
      tableBody.insertAdjacentHTML('beforeend', row);
    });
}

function updateBadge() {
    badge.textContent = cart.length;
}

tableBody.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-from-cart')) {
      let row = event.target.closest('tr');
      let title = row.querySelector('td:nth-child(2)').textContent;
    
      cart = cart.filter(function(item) {
        return item.title !== title;
      });
    
      localStorage.setItem('cart', JSON.stringify(cart));
    
      row.remove();
    
      updateBadge();
  }
});



window.addEventListener("beforeunload", function () {
    localStorage.setItem("cart", JSON.stringify(cart));
});


  


  

function displayCartItems() {
  let total = cart.reduce((sum, item) => sum + Number(item.price.replace(/[^0-9.-]+/g,"")), 0);
  let formatter = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP'
  });
  
  let tableFoot = document.querySelector('#cart-total');
  if (tableFoot) {
    tableFoot.textContent = `Total: ${formatter.format(total)}`;
  }

  cart.forEach(function(item, index) {
    let row = `
      <tr>
        <td><img src="${item.image}" alt="" class="d-none d-sm-block" style="width: 150px; height: 90px;"></td>
        <td>${item.title}</td>
        <td class="d-none d-sm-block">${item.description.substr(0, 50)}...</td>
        <td>${item.price}</td>
        <td><button class="btn btn-danger delete-item" data-index="${index}">Delete</button></td>
      </tr>
    `;

    tableBody.insertAdjacentHTML('beforeend', row);
  });
}




  
  displayCartItems();
  


tableBody.addEventListener('click', function(e) {
  if (!e.target.classList.contains('delete-item')) return;

  let index = e.target.dataset.index;
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));

  tableBody.innerHTML = '';
  displayCartItems();
  updateBadge();
});

window.addEventListener("storage", function (e) {
  if (e.key === 'cart') {
    cart = JSON.parse(e.newValue);
    tableBody.innerHTML = '';
    displayCartItems();
    updateBadge();
  }
});


  


  

  document.getElementById("checkout-button").addEventListener("click", function() {

    if (cart.length === 0) {
      alert("Your cart is empty, please add items to proceed to checkout");
      return;
      }
    document.getElementById("checkout-form").style.display = "block";
});

document.getElementById("submit-button").addEventListener("click", function() {
  var customerInfo = {
      name: document.getElementById("name").value,
      address: document.getElementById("address").value,
      paymentMethod: document.getElementById("payment-method").value
  };

  if (!customerInfo.name || !customerInfo.address || !customerInfo.paymentMethod) {
      alert("Please fill out all the fields");
      return;
  }

  alert("Payment successfully processed!\n" +
      "Name: " + customerInfo.name + "\n" +
      "Address: " + customerInfo.address + "\n" +
      "Payment Method: " + customerInfo.paymentMethod);
  document.getElementById("myModal").style.display = "none";

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));





    window.close();
  });
  






  document.getElementById("submit-button").addEventListener("click", function() {
    var itemImage = document.getElementById("item-image").value;
    var itemTitle = document.getElementById("item-title").value;
    var itemDescription = document.getElementById("item-description").value;
  
    $.ajax({
      type: "POST",
      url: "save_cart_item.php",
      data: { item_image: itemImage, item_title: itemTitle, item_description: itemDescription }
    })
    .done(function( msg ) {
      alert( "Data Saved: " + msg );
    });
  });






  function clickAlert() {
    alert("Sign in to your account First!");
  }


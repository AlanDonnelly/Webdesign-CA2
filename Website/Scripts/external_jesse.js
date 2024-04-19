// Jesse G: 23277815:
// These two filter functions return the list which is the parameter for both renderProducts* methods
function filterInstruments(category) {
  let filteredList;
  if (category === 'all') {
      return filteredList = INSTRUMENT_PRODUCTS_LIST;
  } else {
      return filteredList = INSTRUMENT_PRODUCTS_LIST.filter(product => product.category === category)
  }
}

function filterAudio(category) {
  let filteredList;
  if (category === 'all') {
      return filteredList = AUDIO_PRODUCTS_LIST;
  } else {
      return filteredList = AUDIO_PRODUCTS_LIST.filter(product => product.category === category)
  }
}

//creates cards which are styled as horizontal using a mixture of BS styles and CSS via ID selectors

//clears list and selects correct area of the dom
function renderProductsInstruments(filteredList = filterInstruments(category)) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  //Creates the cards for each item and appends each section to the card before adding the card to the DOM product-list
  filteredList.forEach(product => {
      let productCard = document.createElement('div');
      productCard.id = 'product-card';
      productCard.classList.add('card', 'mb-2', 'mt-1');
      productCard.style.height = '200px';

      //to allow the use of BS columns (used a large gutter to stop text clipping issues)
      let cardRow = document.createElement('div');
      cardRow.classList.add('row', 'g-10');

      // creating the image and using innerHTML to set the src attribute of the Img tag
      let cardImage = document.createElement('div');
      cardImage.id = 'card-image';
      cardImage.classList.add('col-md-3', 'img-fluid');
      cardImage.innerHTML = `<img src="${product.img}" alt="${product.name}">`;

      // main body of card styled with CSS and used template literals to allow me to access the object variable for DOM update
      let cardBody = document.createElement('div');
      cardBody.id = 'card-body';
      cardBody.classList.add('col-md-9');
      cardBody.innerHTML = `<h4 id="card-title">${product.brand} ${product.name}</h4>
                      <h5 id="card-subtitle">${product.type} in ${product.color}<h5>
                      <h6 id="card-location">Made in: ${product.from}<h6>
                      <span>Please click for item description and price</span>`;

      cardRow.appendChild(cardImage);
      cardRow.appendChild(cardBody);
      productCard.appendChild(cardRow);

      //used an anonymous function to allow me to manipulate the DOM more efficiently
      productCard.addEventListener('click', () => {
          cardBody.innerHTML = `<div id="product-details">${product.description}</div>
                      <p id="product-price">€ ${product.price}.00</p>`
      });
      productList.appendChild(productCard);
  });
}

function renderProductsAudio(filteredList = filterAudio(category)) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  filteredList.forEach(product => {
      let productCard = document.createElement('div');
      productCard.id = 'product-card';
      productCard.classList.add('card', 'mb-2', 'mt-1');
      productCard.style.height = '200px';

      let cardRow = document.createElement('div');
      cardRow.classList.add('row', 'g-10');

      let cardImage = document.createElement('div');
      cardImage.id = 'card-image';
      cardImage.classList.add('col-md-3', 'img-fluid');
      cardImage.innerHTML = `<img src="${product.img}" alt="${product.name}">`;

      let cardBody = document.createElement('div');
      cardBody.id = 'card-body';
      cardBody.classList.add('col-md-9');
      cardBody.innerHTML = `<h4 id="card-title">${product.brand} ${product.name}</h4>
                      <h5 id="card-subtitle">${product.type} in ${product.color}<h5>
                      <h6 id="card-location">Made in: ${product.from}<h6>
                      <span>Please click for item description and price</span>`;
      cardRow.appendChild(cardImage);
      cardRow.appendChild(cardBody);
      productCard.appendChild(cardRow);

      productCard.addEventListener('click', () => {
          cardBody.innerHTML = `<div id="product-details">${product.description}</div>
                          <p id="product-price">€ ${product.price}.00</p>`
      });
      productList.appendChild(productCard);
  });
}

function renderProductsSelect() {
  let allProducts = INSTRUMENT_PRODUCTS_LIST.concat(AUDIO_PRODUCTS_LIST);
  let selector = document.getElementById('products-selector');

  allProducts.forEach(product => {
      let listItem = document.createElement('option')
      listItem.value = product.name;
      listItem.textContent = product.name;

      selector.appendChild(listItem)
  });
}

function validateForm() {
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let email = document.getElementById('email').value;
  let date = document.getElementById('date').value;
  let select = document.getElementById('products-selector').value;
  let error = document.getElementById('error')
  const form = document.getElementById('rental-form');

  form.addEventListener('submit', (e) => {
    let messages = [];

    if (name === "" || name == null) {
    messages.push("You must input a Name");
    }
    if (phone.length < 10) {
    messages.push("Phone number must be 10 digits or More");
    }
    if (email === "") {
    messages.push("Your Email must be included");
    }
    if (date === "") {
      messages.push("You must select at valid date");
    }
    if (select === "") {
    messages.push("You must select at least one item");
    }
    
    if (messages.length > 0) {
    e.preventDefault();
    error.innerHTML = messages.join('<br>');
    }
    });
  }
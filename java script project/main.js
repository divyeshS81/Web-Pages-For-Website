// // function generateCards(numCards) {
// //     var container = document.getElementById('cardsContainer');
// //     container.innerHTML = ''; // Clear previous cards if any

// //     for (var i = 0; i < numCards; i++) {
// //       var card = document.createElement('div');
// //       card.className = 'card';
// //       card.textContent = 'Card ' + (i + 1);
// //       container.appendChild(card);
// //     }
// //   }

// //   // Call the function to generate 20 cards
// //   generateCards(20);

// // // Function to create a card element
// // function createCard(productName, category, price, rating, description, stock) {
// //   // Create main container for the card
// //   var cardContainer = document.createElement('div');
// //   cardContainer.classList.add('card');
  
// //   // Create front side of the card
// //   var frontSide = document.createElement('div');
// //   frontSide.classList.add('card-front');
// //   frontSide.innerHTML = `
// //       <img src="front-image.jpg" alt="Product Image">
// //       <h2>${productName}</h2>
// //       <p>Category: ${category}</p>
// //       <p>Price: ${price}</p>
// //       <p>Rating: ${rating}</p>
// //   `;
  
// //   // Create back side of the card
// //   var backSide = document.createElement('div');
// //   backSide.classList.add('card-back');
// //   backSide.innerHTML = `
// //       <p>Description: ${description}</p>
// //       <p>Stock: ${stock}</p>
// //   `;
  
// //   // Append front and back sides to the card container
// //   cardContainer.appendChild(frontSide);
// //   cardContainer.appendChild(backSide);
  
// //   // Add event listener to flip the card
// //   cardContainer.addEventListener('click', function() {
// //       this.classList.toggle('card-flipped');
// //   });
  
// //   // Return the constructed card element
// //   return cardContainer;
// // }

// // // Example usage:
// // var productName = "Product A";
// // var category = "Category A";
// // var price = "$19.99";
// // var rating = "4.5";
// // var description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit...";
// // var stock = "10";

// // // Create a card element
// // var cardElement = createCard(productName, category, price, rating, description, stock);

// // // Append the card element to the document body or any other container
// // document.body.appendChild(cardElement);


















// const cardsData = [
//   {
//     imageUrl: "IMG_7566.jpg",
//     productName: "Product 1",
//     category: "Category 1",
//     price: "$10.00",
//     rating: "4.5",
//     description: "Description of Product 1",
//     stock: "In Stock: 10"
//   },
//   {
//     imageUrl: "IMG_7566.jpg",
//     productName: "Product 2",
//     category: "Category 2",
//     price: "$20.00",
//     rating: "4.8",
//     description: "Description of Product 2",
//     stock: "In Stock: 20"
//   },

//   {
//     imageUrl: "IMG_7566.jpg",
//     productName: "Product 3",
//     category: "Category 3",
//     price: "$20.00",
//     rating: "4.8",
//     description: "Description of Product 2",
//     stock: "In Stock: 20"
//   }
//   // Add more card data as needed
// ];

// // Function to create card element
// function createCard(cardData) {
//   const card = document.createElement("div");
//   card.classList.add("card");

//   const cardInner = document.createElement("div");
//   cardInner.classList.add("card-inner");
//   card.appendChild(cardInner);

//   const cardFront = document.createElement("div");
//   cardFront.classList.add("card-front");
//   cardFront.innerHTML = `
//     <img src="${cardData.imageUrl}" alt="Product Image">
//     <h2>${cardData.productName}</h2>
//     <p>Category: ${cardData.category}</p>
//     <p>Price: ${cardData.price}</p>
//     <p>Rating: ${cardData.rating}</p>
//   `;
//   cardInner.appendChild(cardFront);

//   const cardBack = document.createElement("div");
//   cardBack.classList.add("card-back");
//   cardBack.innerHTML = `
//     <p>Description: ${cardData.description}</p>
//     <p>${cardData.stock}</p>
//   `;
//   cardInner.appendChild(cardBack);

//   card.addEventListener("click", function() {
//     card.classList.toggle("flipped");
//   });

//   return card;
// }

// // Function to initialize cards
// function init() {
//   const container = document.createElement("div");
//   container.classList.add("container");
//   document.body.appendChild(container);

//   cardsData.forEach(function(data) {
//     const card = createCard(data);
//     container.appendChild(card);
//   });
// }

// // Initialize cards
// init();


// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

function writeCards(names, event_name) {
  // returns an array of thank you messages for each name provided to the function
  const welcome_cards = [];
  for (let i = 0; i < names.length; i++) {
    let card_message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    welcome_cards.push(card_message);
  }

  return welcome_cards;
}

function countDown(number) {
  // invokes console.log once for each number, counting down from the number provided to zero
  // logs each number when counting down, starting from the number provided
  let counter = number;
  while (counter >= 0) {
    console.log(counter);
    counter--;
  }
}

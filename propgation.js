const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
const buyButtons = document.querySelectorAll('button.buy');

function handleClick() {
  console.log('I got clicked');
}

butts.addEventListener('click', handleClick);
// coolButon.addEventListener('click', handleClick);

function handleBuyButtonClick(event) {
  console.log(parseFloat(event.target.dataset.price));
  console.log('You are buying it');
  conssole.log(event.currentTarget);
}

buyButtons.forEach(function(buybutton) {
  buybutton.addEventListener('click', handleBuyButtonClick);
});

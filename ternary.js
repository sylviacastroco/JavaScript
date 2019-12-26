const count = 1;
const word = count === 1 ? 'item' : 'items';
const sentence = `You have ${count} item${count === 1 ? '' : 's'} in your cart`;
console.log(sentence);

function showAdminBar() {
  console.log('showing admin bar');
}

const isAdmin = true;
isAdmin ? showAdminBar() : null;

//AND AND TRICK!!
isAdmin && showAdminBar();

// Hint button

// 1. find the element to listen on
// 2. decide on the event type we care about
// 3. tell JS what to do when that element triggers this event.

// 1. hint button
// 2. click event
// 3. show hint

const hintButton = document.querySelector('#show-hint');
hintButton.addEventListener('click', () => {
  const hint = document.querySelector('.hint');
  hint.classList.toggle('active');
});


// Pseudocode: Puzzle Game
// Listen for a click on every square. When clicked:
//   If it's the neighbor of the empty square,
//     Switch the two squares
//     Check for winning

// How to tell if the clicked square is the neighbor of the empty square:
// - if the x is the same, but the difference in y is 1, OR
// - if the y is the same, but the difference in x is 1

// How to switch two squares
// - take innerText of the clicked item, assign it to the empty square's innerText
// - change the class of the clicked item to `.empty`
// - delete innerText of the clicked item

const blocks = document.querySelectorAll('td');
console.log(blocks);

const canMove = (cell) => {
  const x = cell.cellIndex;
  const y = cell.parentNode.rowIndex;

  const emptyX = document.querySelector('.empty').cellIndex;
  const emptyY = document.querySelector('.empty').parentNode.rowIndex;

  return (x === emptyX && Math.abs(y - emptyY) === 1
    || y === emptyY && Math.abs(x - emptyX) === 1);
}

blocks.forEach((item) => {
  item.addEventListener('click', (event) => {
    console.log('click!');

    if (canMove(item)) {
      // switch 'em!
      const empty = document.querySelector('.empty');
      empty.classList.remove('empty');
      empty.insertAdjacentText('afterbegin', item.innerText);
      item.innerText = '';
      item.classList.add('empty');

      // Check for win
      const numbers = Array.from(blocks).map((block) => {
        return block.innerText;
      });
      console.log(numbers.join(','));
      if (numbers.join(',') === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,') {
        alert('You win!');
      }
    }
  });
});

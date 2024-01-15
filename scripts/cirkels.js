// function to get random number between 1 and 2000
function getRandomNumber() {
  return Math.floor(Math.random() * 2000) + 1;
}

// function to get random value from list 
function getRandomValue(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const colors = [ ' gele', ' rode', ' blauwe', ' grijze', ' witte', ' zwarte', '', '', '' ];

const sizes = [ ' kleine', ' grote', ' middelgrote', '', '', '' ];

// function to get random color and size
function getRandomColorAndSize() {
  return {
      color: getRandomValue(colors),
      size: getRandomValue(sizes)
  };
}

//// function to get random color size in string format
function getRandomColorAndSizeString() {
  const colorSize = getRandomColorAndSize();
  return `een${colorSize.size}${colorSize.color} cirkel`;
}

// function to populate element with class 'distance-string' with random distance string
function populateCirkelStrings() {
  const cirkelStrings = document.getElementsByClassName('cirkel-string');
  for (let i = 0; i < cirkelStrings.length; i++) {
      cirkelStrings[i].innerHTML = getRandomColorAndSizeString();
  }
}

populateCirkelStrings();
const container = document.querySelector('#container');

// Creating an <h3> with blue text that says “I’m a blue h3!”.

const blueText = document.createElement('h3');

blueText.classList.add('blueText');
blueText.textContent = "I'm a blue h3!";
blueText.style.cssText = 'color: blue';

// Appending <h3> element to container.

container.appendChild(blueText);

// Creating a <p> with red text that says “Hey I’m red!”.

const redText = document.createElement('p');

redText.classList.add('redText');
redText.textContent = "Hey I'm red!";
redText.style.cssText = 'color: red';

// Appending <p> element to container.

container.appendChild(redText);

// Creating a <div> with a black border and pink background color.

const pinkBackground = document.createElement('div');

pinkBackground.classList.add('pinkBackground');
pinkBackground.style.backgroundColor = 'pink'; 
pinkBackground.style.boxSizing = 'border-box'; 
pinkBackground.style.border = '4px solid black';

// Creating <h1> inside div.

const divHeading = document.createElement('h1');

divHeading.classList.add('divHeading');
divHeading.textContent = "I'm in a div";

// Appending <h1> element to div.

pinkBackground.appendChild(divHeading);

// Creating <p> inside div.

const divPara = document.createElement('p');

divPara.classList.add('divPara');
divPara.textContent = "ME TOO!";

// Appending <p> element to div.

pinkBackground.appendChild(divPara);

// Appending <div> element to container.

container.appendChild(pinkBackground);


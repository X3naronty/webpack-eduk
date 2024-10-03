import _ from 'lodash';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  button.innerHTML = 'Click here to see message';
  button.onclick = printMe;

  element.appendChild(button);

  return element;
}

document.body.appendChild(component());

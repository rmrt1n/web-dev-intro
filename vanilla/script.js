function onSubmit(event) {
  // don't reload page
  event.preventDefault();

  // get & validate input value
  const task = event.target[0].value;
  if (task === '') return;

  // create new html element
  let container = document.getElementById('task-container');
  let newItem = document.createElement('div');
  newItem.innerHTML = `
  <p>${task}</p>
  <img class="task-remove-btn" src="trash.svg" onclick="removeTodo(event)"/>
  `;

  // add id and class to item
  newItem.setAttribute('id', GLOBAL_ID++);
  newItem.classList.add('task-item');

  // append item to container
  container.appendChild(newItem);
  event.target[0].value = '';
}

function removeTodo(event) {
  const element = document.getElementById(event.target.parentElement.id);
  document.getElementById('task-container').removeChild(element);
}

let GLOBAL_ID = 0;

document.getElementById('input-form').addEventListener('submit', onSubmit);

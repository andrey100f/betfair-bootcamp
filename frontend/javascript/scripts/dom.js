// Counter
(function () {
  // const buttons = document.querySelectorAll('[data-counter-button]');
  const output = document.querySelector('[data-counter-output]');
  const stepInput = document.querySelector('[data-counter-step-input]');

  // for (const button of buttons) {
  //   button.addEventListener('click', handleClick);
  // }

  // Event delegation
  document.addEventListener('click', handleClick);

  const initialCount = 0;
  const initialStep = 1;
  let count = initialCount;
  stepInput.value = initialStep;
  displayValue(count);

  function displayValue(val) {
    output.classList.remove('positive', 'negative');
    if (val > 0) {
      output.classList.add('positive');
    } else if (val < 0) {
      output.classList.add('negative');
    }

    output.innerText = val;
  }

  function handleClick(e) {
    const action = e.target.dataset.counterButton;
    if (action === undefined) {
      return;
    }

    const stepFromDom = e.target.dataset.counterStep ?? stepInput.value;
    const step = Number(stepFromDom);

    switch (action) {
      case 'increment':
        count += step;
        break;
      case 'decrement':
        count -= step;
        break;
      case 'reset':
        count = initialCount;
        break;
      default:
        throw Error(`The action "${action}" is not implemented.`);
    }
    displayValue(count);
  }
})();

// Todolist
(function () {
  const todos = [
    { id: 1, title: 'Buy Milk', completed: false },
    { id: 2, title: 'Visit grandma', completed: true },
  ];

  const list = document.querySelector('[data-todos-list]');

  function hidrateList(todos) {
    const fragment = document.createDocumentFragment();
    for (const todo of todos) {
      const item = document.createElement('li');
      const check = document.createElement('input');
      const label = document.createElement('label');

      check.type = 'checkbox';
      check.checked = todo.completed;

      label.textContent = todo.title;
      label.prepend(check);
      item.append(label);
      fragment.append(item);
    }
    list.append(fragment);
  }

  hidrateList(todos);
})();

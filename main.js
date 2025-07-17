document.getElementById('addTask').addEventListener('click', function () {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', function () {
      li.classList.toggle('completed');
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '🗑️';
    removeBtn.style.marginLeft = '10px';
    removeBtn.addEventListener('click', function () {
      li.remove();
    });

    li.appendChild(removeBtn);
    document.getElementById('taskList').appendChild(li);
    input.value = '';
  }
});
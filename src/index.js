document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("create-task-form").addEventListener("submit", function(e) {
    e.preventDefault();
    addNewTask(e.target["new-task-description"].value)
  })

  document.getElementById("sort").addEventListener("click", sortByPriority)
});

function addNewTask(newTaskName) {
  const newTaskNode = document.createElement("li");
  const priorityColor = document.getElementById("new-task-priority")
  const priorityColorSelected = priorityColor.options[priorityColor.selectedIndex].value;
  addListItem(newTaskName, newTaskNode, priorityColorSelected)
}

function addListItem(taskName, taskNode, taskColor) {
  if (taskColor === "red") {
    taskNode.textContent = taskName + " ";
    taskNode.style.color = "red"
    document.getElementById("tasks").appendChild(taskNode)
    deleteTaskButton(taskNode)
  } else if (taskColor === "yellow") {
    taskNode.textContent = taskName + " ";
    taskNode.style.color = "yellow"
    document.getElementById("tasks").appendChild(taskNode)
    deleteTaskButton(taskNode)
  } else {
    taskNode.textContent = taskName + " ";
    taskNode.style.color = "green"
    document.getElementById("tasks").appendChild(taskNode)
    deleteTaskButton(taskNode)
  }
}

function deleteTaskButton(taskNode) {
  const newDeleteButton = document.createElement("button")
  newDeleteButton.id = "deleteButton";
  newDeleteButton.textContent = "X";
  newDeleteButton.value = "x";
  newDeleteButton.onclick = function() {deleteTask(taskNode)}
  taskNode.appendChild(newDeleteButton)
}

function deleteTask(taskNode) {
  taskNode.remove()
}

function sortByPriority() {
  const redArr = []
  const yellowArr = []
  const greenArr = []
  const list = document.querySelectorAll("li")
  list.forEach(function(e) {
    if (e.style.color === "red") {
      redArr.push(e)
    } else if (e.style.color === "yellow") {
      yellowArr.push(e)
    } else {
      greenArr.push(e)
    }
  })
  const orderedArr = redArr.concat(yellowArr, greenArr)
  // const ulList = document.getElementById("tasks")
  const allListItems = document.querySelectorAll("li")
  for (let i = 0; i < orderedArr.length; i++) {
    let newListItem = document.createElement("li")
    console.dir(newListItem)
    newListItem.innerHTML = orderedArr[i].innerHTML
    newListItem.style.color = orderedArr[i].style.color
    // allListItems[i] = newListItem
    allListItems[i].parentNode.replaceChild(newListItem, allListItems[i])
    // ulList.innerHTML = orderedArr[i]
  }
}
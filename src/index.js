document.addEventListener("DOMContentLoaded", () => {
  addItem()
});

function addItem(){
  let taskList = document.getElementById("tasks");
  document.addEventListener("submit", function(e){
    e.preventDefault();
    let taskli = document.createElement("li");
    taskli.textContent = e.target["new-task-description"].value;
    let button = document.createElement('button');
    button.innerText = 'x';
    taskli.appendChild(button);
    taskList.appendChild(taskli);
    taskli.style.backgroundColor = "BLACK"
    taskli.style.color = e.target.selections.value;
    button.addEventListener("click", function(e){
      e.preventDefault();
      taskList.removeChild(taskli);
    })
    sortItems(taskList)
  })
}

function sortItems(taskList){
  // let taskList = document.getElementById("tasks");
  Array.from(taskList.getElementsByTagName("li"))
  .sort((a, b) => a.textContent.localeCompare(b.textContent))
  .forEach(li => taskList.appendChild(li));
}

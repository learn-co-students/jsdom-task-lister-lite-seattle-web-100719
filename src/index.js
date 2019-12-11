document.addEventListener("DOMContentLoaded", () => {
  const commentArea = document.getElementById('create-task-form')

  commentArea.addEventListener('submit', function(event){
    event.preventDefault(); 
    // console.log(event.target.dropdownMenu.value) 
    let userInput = event.target["new-task-description"].value
    let selectedPriority = event.target.dropdownMenu.value 
    let color = ''

    if (selectedPriority === '1'){
      color = 'red';
    }
    else if (selectedPriority === '2'){
      color = 'yellow';
    }
    else if (selectedPriority === '3'){
      color = 'green';
    }

    createTask(userInput, color, selectedPriority);
    addTask(createTask(userInput, color, selectedPriority));
    sortTasks(selectedPriority);
    event.target["new-task-description"].value= '';
  }) 

  function createTask(userInput, priorityColor, selectedPriority){ 
    const newTask = document.createElement('li')//creates a new element that we will then append to listArea
    newTask.textContent = userInput;
    newTask.style.color = `${priorityColor}`;

    // if key exists, push value into value

    hash[`${selectedPriority}`] = userInput;

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'X'
    newTask.appendChild(deleteButton)
  
    deleteButton.addEventListener('click', function(){
      newTask.remove(); 
    })

    return newTask   
  }

  function addTask(userInput){
    const listArea = document.getElementById('tasks') // selects where our new item will go
    listArea.appendChild(userInput)
  }

  // function sortTasks(priority){
  //   let dropdownList = document.querySelector('#tasks li')
  //   console.dir(dropdownList) 
  //   let hash = {}

  // }

});

//Task array
var tasks = [];

//task status 'enum'
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

//Task constructor function
function Task (id, name, status){
    this.id = id;
    this.name = name;
    this.status = status;
}

//Creates a new task element and adds it to the DOM
function addTaskElement (task) {
    //create elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    //Set attributes
    taskEl.setAttribute('id', task.id);
    // Add text to task element
    taskEl.appendChild(textEl);
    //Add task element to list
    listEl.appendChild(taskEl);
}

//Click handler to add a task
function addTask (event) {
    var inputEl = document.getElementById('input-task');
    if(inputEl.value != ''){      
        //Create a unique id
        var id = 'item-' + tasks.length;

        //create a new task
        var task = new Task(id, inputEl.value, taskStatus.active);
        tasks.push(task);

        //Add the task to DOM
        addTaskElement(task);

        //reset input
        inputEl.value = '';
    }
}

//Click handler to complete a task
function completeTask(event){
    //get the task element
    var taskEl = event.target;
    var id = taskEl.id;

    //Find corresponding task in tasks array and update status
    for(var i = 0; i < tasks.length; i++){
        if(tasks[i].id === id){
            tasks[i].status = taskStatus.completed;
            break;
        }
    }
    //move task element from active list to completed list
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

//Key press handler to automatically click add task
function clickButton (event) {
    if (event.keyCode === 13) {
        document.getElementById('add-task').click();
    }
}

//Initializes the app
function init () {
    //wire up the add task button click handler
    document.getElementById('add-task').onclick = addTask;

    //Wire up the task completed list item click handler
    document.getElementById('active-list').onclick = completeTask;

    //Wire up the task input key press handler
    document.getElementById('input-task').onkeypress = clickButton;
}

init();
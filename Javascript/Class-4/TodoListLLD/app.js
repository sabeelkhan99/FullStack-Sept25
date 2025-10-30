/*
    Goal: Build a basic To-Do list using objects and arrays (no UI).

    Each To-Do item should be an object:

        {
            task: "Buy groceries",
            isCompleted: false
        }

    Features to Implement:

         - addTask(task): Adds a new task.
         - removeTask(task): Removes a task.
         - markComplete(task): Marks a task as completed.
         - listTasks(): Lists all tasks, showing completed ones differently.

*/

function createTodoList() {
    const todos = [];

    function addTask(task) {
        todos.push({ task: task, isCompleted: false });
    }

    function removeTask(task) {
        // find a index
        let index = -1;
        let count = 0;

        for (let todo of todos) {
            if (todo.task === task) {
                index = count;
                break;
            }
            count++;
        }

        todos.splice(index, 1);
    }

    function markComplete(task) {
        for (let todo of todos) {
            if (todo.task === task) {
                todo.isCompleted = true;
                break;
            }
        }
    }

    function listTasks() {
        console.log('---------------');
        for (let todo of todos) {
            console.log(`${todo.task} , completed : ${todo.isCompleted ? '✅': '❌'}`);
        }
        console.log('---------------');
    }

    return {
        addTask,
        removeTask,
        markComplete,
        listTasks
    }
}

const todo = createTodoList();

todo.addTask("Buy Groceries");
todo.addTask("Go to Swimming");

todo.listTasks();

todo.removeTask("Go to Swimming");
todo.listTasks();

todo.addTask("Learn Web");
todo.listTasks();
todo.markComplete('Learn Web');
todo.listTasks();






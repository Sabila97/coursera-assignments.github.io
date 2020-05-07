
var todoList = {
    todos: [],
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false,
        });
    },
    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function (position) {

        this.todos.splice(position, 1);
    },
    toggleCompleted: function (position) {

        this.todos[position].completed = !this.todos[position].completed;
    },
    toggleAll: function () {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        }
        else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
 

    }
};




var handlers = {
  
    addTodo: function () {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
        view.displayTodo();
    },
    changeTodo: function () {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodo();

    },
    deleteTodo: function () {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
        view.displayTodo();
    },
    toggleCompleted: function () {
        var toggleTodoPositionInput = document.getElementById("toggleTodoPositionInput");
        todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
        toggleTodoPositionInput.value = "";
        view.displayTodo();

    },
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodo();
    },
};

var view = {
    displayTodo: function () {
        var todoUl = document.querySelector("ul");
        todoUl.innerHTML = "";
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement("li");
            var todo = todoList.todos[i];
            var todoWithCompletion = "";
            if (todo.completed === true) {
                todoWithCompletion = "(x) " + todo.todoText;
            } else {
                todoWithCompletion = "( ) " + todo.todoText;
            }
            todoLi.id = i;

            todoLi.textContent = todoWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todoUl.appendChild(todoLi);
        }
    },
    createDeleteButton: function(){
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
        
    },
    
};

var todoUl = document.querySelector("ul");

todoUl.addEventListener("click", function(event){
    console.log(event);
});
























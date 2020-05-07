//var todoList = {
//    todos : ["item 1","item 2","item 3","item 4",],
//    todoList : function(){
//        console.log("My todos:" , this.todos);
//    }
//};



//ARRAY

// 1. Store a todo
//2. Display todos
//var todos = ["item 1","item 2","item 3","item 4"];//Done

//3. Add new todos
//todos.push("item 5"); //Done

//4. Change a todo
//todos[0]="new item 1"; //Done

//5. Delete a todos
//todos.splice(4,1); //Done


//FUNCTION

//1. Function to display todos
//function displayTodos(){
//    console.log("My todos: " , todos);
//} //Done

//2. Function to add new todo
//function addNewTodos(){
//    todos.push("item 5");
//    displayTodos();
//} //Done

//3. Function to change a todo
//function changeTodo(position,item){
//    todos[position] = item;
//    displayTodos();
//}  //Done

//4. Function to delete a todo
//function deleteTodo(position,item){
//    todos.splice(4,1);
//    displayTodos();
//} //Done


//OBJECTS

//var todoList = {
//    todos: ["item 1","item 2","item 3","item 4"],
//};

//Method

//1. Display Todo Method
var todoList = {
    todos: [],
    //    displayTodos: function () {
    //        //        debugger;
    //        if (this.todos.length === 0) {
    //            console.log("Your todolist is empty!!");
    //        } else {
    //            console.log("My todos: ");
    //            for (var i = 0; i < this.todos.length; i++) {
    //                if (this.todos[i].completed === true) {
    //                    console.log("(x) ", this.todos[i].todoText);
    //                } else {
    //                    console.log("( )", this.todos[i].todoText);
    //                }
    //            }
    //        }
    //    },
    addTodo: function (todoText) {
        //        debugger;
        this.todos.push({
            todoText: todoText,
            completed: false,
        });
        //        this.displayTodos();
    },
    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText;
        //        this.displayTodos();
    },
    deleteTodo: function (position) {

        this.todos.splice(position, 1);
        //        this.displayTodos();
    },
    toggleCompleted: function (position) {

        this.todos[position].completed = !this.todos[position].completed;
        //        this.displayTodos();
    },
    toggleAll: function () {
        //If everything's true, make it false
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
        //Otherwise, make it true
        else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        //        this.displayTodos();

    }
};

//var displayTodo = document.getElementById("displayTodo");
//displayTodo.addEventListener("click", function(){
//  todoList.displayTodos();
//});
//
//
//var toggleAll = document.getElementById("toggleAll");
//toggleAll.addEventListener("click", function(){
//  todoList.toggleAll();
//});




var handlers = {
    //    displayTodo: function () {
    //        todoList.displayTodos()
    //    },
    //    toggleAll: function () {
    //        todoList.toggleAll()
    //    },
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
//var testArray = ["item 1", "item 2", "item 3"];
//
//for(i=0;i<testArray.length;i++){
//    console.log(testArray[i]);
//}


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

//var exampleElement = $0;
//exampleElement.addEventListener("click", function(event){
//console.log(event);
//console.log("Example was clicked");
//});
























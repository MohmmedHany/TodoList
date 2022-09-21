import UseLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from "uuid";

export default (intitalTodos) => {
  const [todos, setTodos] = UseLocalStorageState("todos", intitalTodos);
  return {
    todos,
    addTodo: (newTodo) => {
      setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
    },
    removeTodo: (todoId) => {
      //filter out removed todo
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      //call setTodos with new todos array
      setTodos(updatedTodos);
    },
    toggleTodo: (todoId) => {
      //We Map to find the correct Todo
      //then we change its completed to be opposite
      const updatedTodos = todos.map((e) =>
        e.id === todoId ? { ...e, completed: !e.completed } : e
      );
      //we set todos to be the new(updatedTodos)
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map((e) =>
        e.id === todoId ? { ...e, task: newTask } : e
      );
      setTodos(updatedTodos);
    },
  };
};

//This Function basically is responsible for adding newTodo
//We Do this by passing a newTodo Data then using setTodo to add it
//We pass this function to TodoForm.js as a prop
//inside TodoForm we use it to pass Value
//---------------------------------------

//Remove Todo Function

//Update Completed function

//edit todo

import React, { createContext, useReducer } from "react";
import useTodoState from "../Hooks/useTodoState";
import todoReducer from "../reducers/todo.reducer";

const initialTodos = [{ id: 1, task: "Walk The Dog", completed: false }];

export const TodoContext = createContext();
export const DispatchContext = createContext();

export function TodoProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  return (
    <TodoContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  );
}

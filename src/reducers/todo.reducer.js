import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuidv4(), task: action.task, completed: false }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((e) =>
        e.id === action.id ? { ...e, completed: !e.completed } : e
      );
    case "EDIT":
      return state.map((e) =>
        e.id === action.id ? { ...e, task: action.task } : e
      );
    default:
      return state;
  }
};

export default reducer;

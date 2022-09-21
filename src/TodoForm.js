import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import useFormState from "./Hooks/useFormState";
import { DispatchContext, TodoContext } from "./contexts/Todo.Context";

export default function TodoForm() {
  const dispatch = useContext(DispatchContext);
  //We are using useFormState which is a custom a hook
  //basically it takes any intial value and
  //create value , setValue, resetValue
  const [value, handleValue, resetValue] = useFormState("");
  return (
    <Paper>
      <form
        style={{ margin: "1rem 0", padding: "0 1rem" }}
        onSubmit={(e) => {
          //Here We Are calling the addTodo from Todo.js and passing
          //Value so we can add it to our Todo List
          //Then we Are reseting Todo using resetValue That we Got
          //From CustomHook
          e.preventDefault();
          dispatch({ type: "ADD", task: value });
          resetValue();
        }}
      >
        <TextField
          onChange={handleValue}
          value={value}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}

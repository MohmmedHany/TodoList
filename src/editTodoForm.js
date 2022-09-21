import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import useFormState from "./Hooks/useFormState";
import { DispatchContext, TodoContext } from "./contexts/Todo.Context";

export default function EditTodoForm({ data, toggle }) {
  const [value, handleValue, resetValue] = useFormState(data.task);
  const dispatch = useContext(DispatchContext);
  return (
    <form
      style={{ marginLeft: "1rem", width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: data.id, task: value });
        resetValue();
        toggle();
      }}
    >
      <TextField
        margin="normal"
        fullWidth
        value={value}
        onChange={handleValue}
        autoFocus
      />
    </form>
  );
}

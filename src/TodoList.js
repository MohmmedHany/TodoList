import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import TodoItem from "./TodoItem";
import { TodoContext } from "./contexts/Todo.Context";

export default function TodoList() {
  const todos = useContext(TodoContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((e, indx) => {
            return (
              <>
                <TodoItem data={e} key={e.id} />
                {indx < todos.length - 1 && <Divider />}
              </>
            );
          })}
        </List>
      </Paper>
    );
  return null;
}

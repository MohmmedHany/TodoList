import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Todo.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "./Hooks/useTodoState";
import { TodoProvider } from "./contexts/Todo.Context";

export default function Todo() {
  //Our Start Data
  // const initialTodos = [
  //   { id: 1, task: "Grow A Beard", completed: false },
  //   { id: 2, task: "Noice", completed: true },
  //   { id: 3, task: "Play Video Games", completed: false },
  // ];
  //Use Hook to initialize todos,setTodos --- instead of using this.state/ setState

  return (
    <Paper className="paper" elevation={0}>
      <AppBar position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todos</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoProvider>
            <TodoForm />
            <TodoList />
          </TodoProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

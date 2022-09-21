import React, { useContext, memo } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import useToggle from "./Hooks/useToggle";
import EditTodoForm from "./editTodoForm";
import { DispatchContext, TodoContext } from "./contexts/Todo.Context";

function TodoItem({ data }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggle(false);
  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm data={data} toggle={toggle} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={data.completed}
            onClick={() => dispatch({ type: "TOGGLE", id: data.id })}
          />
          <ListItemText
            style={{ textDecoration: data.completed ? "Line-Through" : "none" }}
          >
            {data.task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={toggle}>
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => dispatch({ type: "REMOVE", id: data.id })}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default memo(TodoItem);

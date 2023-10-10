import React from "react";
import { useDispatch } from "react-redux";
import { toggleStatus, deleteTodo } from "../store/todoSlice";
import "../App";

function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();
  return (
    <li className="todoItem">
      <input
        className="check"
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleStatus(id))}
      />
      <span>{title}</span>
      <span className="dell" onClick={() => dispatch(deleteTodo(id))}>
        &times;
      </span>
    </li>
  );
}

export default TodoItem;

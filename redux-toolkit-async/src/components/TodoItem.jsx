import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, removeTodo } from "../store/todoSlice";
import "../App";

function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch();
  return (
    <li className="todoItem">
      <input
        className="check"
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <span>{text}</span>
      <span className="dell" onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </span>
    </li>
  );
}

export default TodoItem;

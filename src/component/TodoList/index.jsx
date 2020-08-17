import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function TodoList(props) {
  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }
  const { todos, onTodoClick } = props;
  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <li key={item.id} onClick={() => handleClick(item)}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

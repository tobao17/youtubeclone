import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
};
function TodoForm(props) {
  const { onsubmit } = props;
  const [value, setValue] = useState("");

  function handleValueChange(e) {
    setValue(e.target.value);
  }
  function handleSubmit(e) {
    //prevent reloading brower
    e.preventDefault();

    if (!onsubmit) return;
    const formvalue = {
      title: value,
    };
    onsubmit(formvalue);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValueChange}></input>
    </form>
  );
}

export default TodoForm;

import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useRef } from "react";

PostList.propTypes = {
  onSubmit: PropTypes.func,
};
PostList.defaultProps = {
  onSubmit: null,
};
function PostList(props) {
  const { onSubmit } = props;
  const [searchTerm, setsearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchTearm(e) {
    const value = e.target.value;
    setsearchTerm(value); //để input còn giữ giá trị
    if (!onSubmit) return;

    //xu ly vi moi lan go la moi lan setstate
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    //day la debounce
    typingTimeoutRef.current = setTimeout(() => {
      //bien e khong sai duoc trong setTimeout
      const formvalue = {
        searchTerm: value,
      };
      onSubmit(formvalue);
    }, 300);
  }
  return (
    <div>
      <form action="">
        <input value={searchTerm} onChange={handleSearchTearm}></input>
      </form>
    </div>
  );
}

export default PostList;

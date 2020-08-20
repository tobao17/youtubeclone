import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
  posts: PropTypes.array,
};
PostList.defaultProps = {
  posts: [],
};
function PostList(props) {
  const { posts } = props;
  return (
    <ul className="post-list">
      {posts.map((item) => (
        <li key={item.key}>{item.title}</li>
      ))}
    </ul>
  );
}

export default PostList;

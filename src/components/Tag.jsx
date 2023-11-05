import React from "react";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    Projects: { backgroundColor: "#fda821" },
    Works: { backgroundColor: "#15d4c8" },
    Studying: { backgroundColor: "#c24641" },
    Exercises: { backgroundColor: "#6cff3f" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
